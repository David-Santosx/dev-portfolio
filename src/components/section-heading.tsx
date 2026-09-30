export function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-md space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {intro && (
        <p className="text-muted-foreground leading-relaxed text-pretty">
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHeading({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <header className="max-w-3xl space-y-6">
      <h1
        className="hero-reveal text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-balance"
        style={{ animationDelay: "0ms" }}
      >
        {title}
      </h1>
      <p
        className="hero-reveal text-lg md:text-xl leading-relaxed text-neutral-400 max-w-xl text-pretty"
        style={{ animationDelay: "120ms" }}
      >
        {intro}
      </p>
    </header>
  );
}
