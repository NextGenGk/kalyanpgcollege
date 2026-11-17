import { SITE } from "@/lib/site-data";

export function Recruiters() {
  const loop = [...SITE.recruiters, ...SITE.recruiters];
  return (
    <section className="py-20 bg-navy text-surface overflow-hidden border-y border-surface/10">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-3 inline-block">
            Career & Placement Pathways
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-balance max-w-2xl">
            Where our graduates make their <span className="italic text-gold">mark.</span>
          </h2>
        </div>
        <p className="text-surface/70 max-w-sm text-xs sm:text-sm leading-relaxed">
          Graduates of Kalyan PG College excel across public sector undertakings, banking, technology, civil services, and academia.
        </p>
      </div>

      <div className="relative">
        <div className="flex w-max animate-marquee">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center mx-3 sm:mx-4 shrink-0"
            >
              <div className="px-6 py-4 bg-surface/10 rounded-xs border border-surface/15 hover:border-gold hover:bg-surface/20 transition-all flex items-center justify-center">
                <span className="text-xs sm:text-sm font-serif font-medium tracking-wide text-surface/90">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
