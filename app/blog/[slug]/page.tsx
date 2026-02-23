import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import AnimatedHeading from "@/components/blog/AnimatedHeading";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type SectionBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

const siteUrl = "https://www.kaalamithra.com";

function isSectionArray(content: unknown): content is SectionBlock[] {
  return (
    Array.isArray(content) &&
    content.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "heading" in item &&
        "paragraphs" in item &&
        Array.isArray((item as SectionBlock).paragraphs)
    )
  );
}

function collectHighlights(content: unknown): string[] {
  if (isSectionArray(content)) {
    return content.map((section) => section.heading).slice(0, 4);
  }
  return ["Practical strategy", "Execution framework", "Optimization insights", "Business outcomes"];
}

function collectTldr(content: unknown, excerpt: string): string[] {
  if (isSectionArray(content)) {
    const bulletPool = content.flatMap((section) => section.bullets ?? []);
    if (bulletPool.length > 0) {
      return bulletPool.slice(0, 3);
    }
  }
  return [excerpt, "Actionable steps you can apply now.", "Built for measurable growth outcomes."];
}

function renderPostBody(content: unknown) {
  if (typeof content === "string") {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  if (isSectionArray(content)) {
    return content.map((section) => (
      <section key={section.heading} className="mb-9">
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.bullets?.length ? (
          <ul>
            {section.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </section>
    ));
  }

  return content as React.ReactNode;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "Blog Article";
  const description = post?.excerpt ?? "Read practical digital marketing insights and strategies.";
  const image = post?.featuredImage ?? "/blog/default.png";
  const canonical = `${siteUrl}/blog/${slug}`;

  return {
    title: `${title} | Kaalamithra Blog`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonical = `${siteUrl}/blog/${post.slug}`;
  const image = post.featuredImage || "/blog/default.png";
  const description = post.excerpt || "Read practical digital marketing insights and strategies.";
  const highlights = collectHighlights(post.content);
  const tldr = collectTldr(post.content, description);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title || "Blog Article",
    description,
    image: `${siteUrl}${image}`,
    mainEntityOfPage: canonical,
    url: canonical,
    datePublished: "2026-02-19",
    dateModified: "2026-02-19",
    author: {
      "@type": "Organization",
      name: "Kaalamithra",
    },
    publisher: {
      "@type": "Organization",
      name: "Kaalamithra",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/next.svg`,
      },
    },
  };

  return (
    <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#f6f9ff_45%,#f9fcff_100%)] py-12 text-slate-900 md:py-16">
      <ReadingProgress />
      <Script id={`blog-posting-${post.slug}`} type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <article className="mx-auto max-w-5xl px-4 md:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
        >
          <span aria-hidden>&larr;</span> Back to Blog
        </Link>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold text-cyan-700">
            {post.category}
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
            {post.readingTime}
          </span>
          <span className="rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-semibold text-violet-600">
            AI Premium Insight
          </span>
        </div>

        <AnimatedHeading
          text={post.title}
          className="mt-4 text-balance text-4xl font-bold leading-tight md:text-6xl"
        />
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{description}</p>

        <div className="relative mt-9 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_26px_70px_-42px_rgba(15,23,42,0.45)]">
          <Image
            src={image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-cyan-100 bg-white/80 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">TL;DR</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {tldr.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-slate prose-lg mt-8 max-w-none rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur md:p-8 prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-8 prose-p:text-slate-700 prose-a:text-cyan-700 prose-a:no-underline hover:prose-a:text-cyan-800 prose-strong:text-slate-900 prose-li:leading-7 prose-li:text-slate-700">
              {renderPostBody(post.content)}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-slate-700">Share this article</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                  LinkedIn
                </button>
                <button type="button" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                  X
                </button>
                <button type="button" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                  Copy Link
                </button>
              </div>
            </div>
          </div>

          <aside className="space-y-4 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Need this strategy implemented?</p>
              <p className="mt-2 text-sm text-slate-600">
                Get a tailored growth roadmap for your business goals.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Free Strategy Call
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
