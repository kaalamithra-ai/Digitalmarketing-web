import Image from "next/image";

type CardContent = {
  title: string;
  description: string;
};

type StoryMissionVisionProps = {
  story: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
  mission: CardContent;
  vision: CardContent;
};

export default function StoryMissionVision({
  story,
  mission,
  vision,
}: StoryMissionVisionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="relative min-h-[360px] overflow-hidden rounded-2xl border border-black/10 bg-slate-100 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:min-h-[430px]">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100" />
          <Image
            src={story.imageSrc}
            alt={story.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent p-6 text-white md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">{story.title}</h2>
            <p className="mt-3 max-w-xl text-sm text-white/90 md:text-base">
              {story.description}
            </p>
          </div>
        </article>

        <div className="grid gap-6">
          <article className="rounded-2xl border border-black/10 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-8">
            <h3 className="text-2xl font-semibold text-slate-900">{mission.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              {mission.description}
            </p>
          </article>
          <article className="rounded-2xl border border-black/10 bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-8">
            <h3 className="text-2xl font-semibold text-slate-900">{vision.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              {vision.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
