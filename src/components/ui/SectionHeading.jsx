export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`} data-reveal>
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </span>
      )}

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}{" "}
        {highlight && <span className="text-gold">{highlight}</span>}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}