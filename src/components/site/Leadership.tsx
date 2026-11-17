import { SITE } from "@/lib/site-data";

export function Leadership() {
  return (
    <section id="leadership" className="py-24 lg:py-36 px-6 bg-secondary/60 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 inline-block">
            College Leadership
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Guidance rooted in <span className="italic text-gold">wisdom</span> & service.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {SITE.leadership.map((leader) => (
            <div
              key={leader.name}
              className="bg-card border border-border p-8 lg:p-10 rounded-xs flex flex-col sm:flex-row gap-8 items-start hover:border-gold/60 transition-colors shadow-xs"
            >
              <div className="w-36 h-44 sm:w-44 sm:h-52 shrink-0 overflow-hidden rounded-xs border border-border bg-muted">
                <img
                  src={leader.img}
                  alt={leader.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-1">
                  {leader.subtitle}
                </div>
                <h3 className="font-serif text-2xl text-navy mb-1">{leader.name}</h3>
                <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-medium mb-4">
                  {leader.role}
                </div>
                <p className="text-sm text-ink/80 leading-relaxed italic border-l-2 border-gold/40 pl-4">
                  &ldquo;{leader.message}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

