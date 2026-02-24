type FeatureItem = {
  title: string;
  description: string;
};

type WhyRightForYouProps = {
  heading: string;
  paragraph: string;
  topCards: [FeatureItem, FeatureItem];
  bottomCards: [FeatureItem, FeatureItem, FeatureItem];
};

function FeatureCard({
  item,
  tintClass,
  minHeightClass,
}: {
  item: FeatureItem;
  tintClass: string;
  minHeightClass: string;
}) {
  return (
    <article
      className={`group flex ${minHeightClass} flex-col justify-between rounded-2xl border border-black/10 bg-gradient-to-br ${tintClass} p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md`}
    >
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {item.description}
        </p>
      </div>
      <span className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-700 transition duration-200 group-hover:scale-105">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
    </article>
  );
}

export default function WhyRightForYou({
  heading,
  paragraph,
  topCards,
  bottomCards,
}: WhyRightForYouProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
          {heading}
        </h2>
        <span
          className="hidden h-16 w-[3px] rounded-full bg-orange-500 lg:block"
          aria-hidden="true"
        />
        <p className="max-w-2xl text-base leading-relaxed text-slate-500">
          {paragraph}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <FeatureCard
          item={topCards[0]}
          tintClass="from-white to-orange-50"
          minHeightClass="min-h-[220px]"
        />
        <FeatureCard
          item={topCards[1]}
          tintClass="from-white to-blue-50"
          minHeightClass="min-h-[220px]"
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <FeatureCard
          item={bottomCards[0]}
          tintClass="from-white to-blue-50"
          minHeightClass="min-h-[170px]"
        />
        <FeatureCard
          item={bottomCards[1]}
          tintClass="from-white to-emerald-50"
          minHeightClass="min-h-[170px]"
        />
        <FeatureCard
          item={bottomCards[2]}
          tintClass="from-white to-indigo-50"
          minHeightClass="min-h-[170px]"
        />
      </div>
    </section>
  );
}

