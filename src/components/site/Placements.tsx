const stats = [
  {
    value: "50K",
    suffix: "+",
    label: "Alumni Network",
    caption: "Alumni serving in Civil Services, SAIL, Academia, Banking & Global MNCs",
  },
  {
    value: "8",
    suffix: " Centres",
    label: "Ph.D Research Hubs",
    caption: "Commerce, Chemistry, Hindi, Maths, Education, Economics, Sociology, Pol. Science",
  },
  {
    value: "60",
    suffix: "+ Yrs",
    label: "Educational Heritage",
    caption: "Empowering Bhilai and Central India with affordable, high-quality learning since 1963",
  },
];

export function Placements() {
  return (
    <section id="placements" className="py-24 lg:py-36 px-6 bg-secondary/40 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 inline-block">
            Career & Scholastic Impact
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Outcomes that define <span className="italic text-gold">lifelong</span> leadership.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border bg-card shadow-xs">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-14 px-8 text-center flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-[10px] text-gold mb-4">
                  ({String(i + 1).padStart(2, "0")})
                </div>
                <div className="font-serif text-5xl lg:text-7xl text-navy mb-3 leading-none font-bold">
                  {s.value}
                  <span className="text-2xl lg:text-3xl text-gold align-top ml-1">
                    {s.suffix}
                  </span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-ink mb-2">
                  {s.label}
                </div>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-4 leading-relaxed">
                {s.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
