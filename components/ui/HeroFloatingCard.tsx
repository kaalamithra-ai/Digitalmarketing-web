type FloatingHeroCardProps = {
  text: string;
  className?: string;
};

export default function FloatingHeroCard({
  text,
  className = "",
}: FloatingHeroCardProps) {
  return (
    <div className={`rounded-xl bg-white px-4 py-2 text-sm shadow-md ${className}`}>
      {text}
    </div>
  );
}
