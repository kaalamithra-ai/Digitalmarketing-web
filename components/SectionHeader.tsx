type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mx-auto flex max-w-2xl flex-col ${alignment}`}>
      <h2 className="gradient-text text-glow float-text-med text-3xl font-semibold md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-slate-600 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
