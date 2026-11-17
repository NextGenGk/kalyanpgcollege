import { SITE } from "@/lib/site-data";

export function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 lg:py-36 px-6 bg-navy text-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" /> Campus Infrastructure
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Designed for holistic <span className="italic text-gold">growth</span> & research.
            </h2>
          </div>
          <p className="text-surface/75 max-w-sm text-sm sm:text-base text-pretty leading-relaxed">
            Sprawled across Sector 7, Bhilai Nagar with automated libraries, modern laboratories, multimedia lecture halls, and expansive sports complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE.facilities.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-navy/80 border border-surface/10 overflow-hidden flex flex-col hover:border-gold/60 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-navy/90">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-gold border border-gold/30">
                  {f.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80 mb-2">
                    Facility · 0{i + 1}
                  </div>
                  <h3 className="font-serif text-2xl mb-3 text-surface group-hover:text-gold transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-surface/70 leading-relaxed">
                    {f.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
