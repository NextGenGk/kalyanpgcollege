import { SITE } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-36 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 inline-block">
            Campus Moments
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Life at Kalyan College, captured through the <span className="italic text-gold">lens.</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-4">
            Glimpses of daily academic life, heritage halls, and vibrant extracurricular activities in Bhilai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SITE.gallery.map((g, i) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden bg-muted rounded-xs border border-border ${
                i === 0 || i === 3 ? "lg:row-span-2 aspect-[3/4] lg:aspect-[3/5]" : "aspect-[4/3] sm:aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-surface">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                  Kalyan PG College
                </div>
                <div className="font-serif text-xl mb-1 text-white">{g.title}</div>
                <div className="text-xs text-surface/80 leading-snug">{g.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
