import { SITE } from "@/lib/site-data";

export function Media() {
  return (
    <section id="events" className="py-24 lg:py-36 px-6 bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 inline-block">
              Events & Campus Life
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-2xl">
              Vibrant activities shaping <span className="italic text-gold">community</span> & character.
            </h2>
          </div>
          <a
            href="https://kalyanpgcollege.org/gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-gold pb-1 hover:text-gold transition-colors self-start lg:self-end"
          >
            Visit Official College Archive →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE.events.map((e) => (
            <article
              key={e.title}
              className="group bg-card border border-border hover:border-gold/60 transition-all duration-300 rounded-xs flex flex-col overflow-hidden shadow-xs"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono">
                    <span className="text-gold font-bold">{e.tag}</span>
                    <span>{e.date}</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug mb-3 group-hover:text-gold transition-colors text-navy">
                    {e.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {e.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
