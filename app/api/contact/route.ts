import { NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
};

type LeadData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  page: string;
};

async function sendResendEmailNotification(lead: LeadData) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!resendApiKey || !notificationEmail) {
    return;
  }

  const servicesText = lead.services.length > 0 ? lead.services.join(", ") : "N/A";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Website Leads <onboarding@resend.dev>",
      to: [notificationEmail],
      subject: "New Website Lead",
      text: `Name: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nCompany: ${lead.company}\nServices: ${servicesText}\nMessage: ${lead.message || "N/A"}\nPage: ${lead.page}`,
    }),
  });

  if (!response.ok) {
    throw new Error("Resend notification failed.");
  }
}

async function sendTwilioWhatsappAlert(lead: LeadData) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM;
  const to = process.env.TWILIO_WHATSAPP_TO;

  if (!accountSid || !authToken || !from || !to) {
    return;
  }

  const servicesText = lead.services.length > 0 ? lead.services.join(", ") : "N/A";
  const body =
    "🚀 New Website Lead\n" +
    `Name: ${lead.name}\n` +
    `Phone: ${lead.phone || "N/A"}\n` +
    `Service: ${servicesText}\n` +
    `Email: ${lead.email}`;

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: from,
        To: to,
        Body: body,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Twilio WhatsApp alert failed.");
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const {
      firstName = "",
      lastName = "",
      companyName = "",
      email = "",
      phone = "",
      message = "",
      services = [],
    } = body;
    const page = "/contact";
    const lead: LeadData = {
      name: `${firstName} ${lastName}`.trim(),
      company: companyName,
      email,
      phone,
      services,
      message,
      page,
    };

    const webhookUrl =
      process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL ??
      process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Google Sheets webhook URL is not configured." },
        { status: 500 }
      );
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name,
        company: lead.company,
        email: lead.email,
        phone: lead.phone,
        service: lead.services,
        message: lead.message,
        page: lead.page,
      }),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "Failed to forward lead to webhook." },
        { status: 502 }
      );
    }

    await Promise.all([
      sendResendEmailNotification(lead),
      sendTwilioWhatsappAlert(lead),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process lead notification." },
      { status: 500 }
    );
  }
}
