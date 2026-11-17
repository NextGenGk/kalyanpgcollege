export function Videos() {
  return (
    <section className="py-24 lg:py-36 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 inline-block">
            Campus Tour
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Kalyan PG College, in <span className="italic text-gold">motion.</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            Explore the campus facilities, academic departments, laboratories, and student activities in Bhilai Nagar.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-navy text-surface p-6 sm:p-10 rounded-xs">
          <div className="lg:col-span-8">
            <div className="relative aspect-video bg-black/60 rounded-xs overflow-hidden shadow-2xl border border-surface/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NVtHSWz1HuY"
                title="Kalyan PG College NAAC & Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
              <span className="size-2 rounded-full bg-gold animate-pulse" />
              Official College Video Tour
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-surface">
              Kalyan PG College Institutional Walkthrough
            </h3>
            <p className="text-surface/75 text-sm leading-relaxed">
              Produced by Kalyan P. G. College, showcasing the extensive academic infrastructure, scientific laboratories, sports arena, and central library across Sector 7 Bhilai.
            </p>
            <div className="pt-4 border-t border-surface/20 flex items-center justify-between text-xs font-mono text-surface/60">
              <span>Channel: Kalyan P. G. College</span>
              <a
                href="https://www.youtube.com/watch?v=NVtHSWz1HuY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
