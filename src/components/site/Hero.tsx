import { SITE } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] lg:min-h-screen flex items-end overflow-hidden">
      <img
        src={SITE.hero.banner}
        alt="Kalyan PG College Bhilai Campus"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-36 lg:pt-44 w-full">
        <div className="max-w-3xl text-surface animate-fade-up">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold font-semibold">
              Admissions Open · Academic Session 2026-27
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-gold/20 text-gold border border-gold/40">
              UGC CPE Accredited
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[5.25rem] leading-[1.0] text-balance mb-6">
            Lighting the Torch of <span className="italic text-gold">Knowledge</span> & Character.
          </h1>

          <p className="text-base sm:text-lg text-surface/90 max-w-2xl mb-10 leading-relaxed text-pretty">
            Kalyan Post Graduate College, Bhilai — Founded in 1963 with the foundation stone laid by Shri Neelam Sanjiva Reddy. 
            Over six decades of academic distinction, recognized by UGC as a &ldquo;College with Potential for Excellence&rdquo;.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gold text-navy px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-surface transition-colors shadow-lg"
            >
              Apply for Admission
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-3 border border-surface/40 text-surface px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-surface/15 transition-colors"
            >
              Explore Programmes
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-surface/80 hover:text-gold text-xs font-medium uppercase tracking-[0.18em] ml-2 transition-colors"
            >
              Our 1963 Legacy ↓
            </a>
          </div>
        </div>

        <div className="absolute right-6 bottom-20 hidden lg:flex flex-col items-end gap-3 text-surface/80">
          <div className="bg-surface/10 backdrop-blur-md border border-surface/20 p-3 rounded-xs flex items-center gap-3 mb-2">
            <img src={SITE.logos.yearsBadge} alt="60+ Years Celebration" className="h-10 w-auto" />
            <div className="text-left text-xs font-mono leading-tight">
              <span className="text-gold font-bold block">1963 — Present</span>
              <span className="text-surface/80 text-[10px]">Diamond Jubilee Heritage</span>
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Sector 7 · Bhilai Nagar</div>
          <div className="w-px h-12 bg-surface/30" />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em]">Hemchand Yadav Univ.</div>
        </div>
      </div>
    </section>
  );
}
