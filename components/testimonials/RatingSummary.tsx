import { RatingsSummary } from "@/lib/content/testimonials";

type RatingSummaryProps = {
  summary: RatingsSummary;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={`star-${index}`} aria-hidden="true">
          {index < Math.round(rating) ? "\u2605" : "\u2606"}
        </span>
      ))}
    </div>
  );
}

export default function RatingSummary({ summary }: RatingSummaryProps) {
  const maxCount = Math.max(...Object.values(summary.distribution));
  const rows: Array<5 | 4 | 3 | 2 | 1> = [5, 4, 3, 2, 1];

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-4xl font-semibold text-slate-900">
            {summary.averageRating.toFixed(1)}
          </p>
          <div className="mt-2">
            <Stars rating={summary.averageRating} />
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Based on {summary.totalReviews} verified reviews
          </p>
        </div>

        <div className="space-y-3">
          {rows.map((score) => {
            const count = summary.distribution[score];
            const width = (count / maxCount) * 100;
            return (
              <div key={score} className="grid grid-cols-[36px_1fr_36px] items-center gap-3">
                <span className="text-sm font-medium text-slate-700">
                  {score}
                  {"\u2605"}
                </span>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${width}%` }}
                  />
                </div>
                <span className="text-right text-xs text-slate-500">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
