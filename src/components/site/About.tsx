import { SITE } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-28">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" /> About the College
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance mb-6">
              A glorious tradition of learning since <span className="italic text-gold">1963.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty text-sm sm:text-base">
              <p>
                Kalyan Post Graduate College is one of Chhattisgarh&rsquo;s most prestigious grant-in-aid institutions. 
                Managed by the benevolent <strong>Chhattisgarh Kalyan Samiti</strong> (founded in 1961), the college&rsquo;s 
                foundation stone was officially laid on <strong>23rd July 1963</strong> by then Central Steel Minister 
                <strong> Shri Neelam Sanjiva Reddy</strong>, who later became the 6th President of India.
              </p>
              <p>
                From humble beginnings in the steel city of Bhilai, the institution has blossomed into a premier seat of higher education, 
                conferred with the coveted status of <strong>&ldquo;College with Potential for Excellence&rdquo; (CPE)</strong> by the University Grants Commission (UGC) 
                and affiliated to <strong>Hemchand Yadav Vishwavidyalaya, Durg</strong>.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
              <img
                src={SITE.logos.naacBadge}
                alt="NAAC Accredited"
                className="h-12 w-auto object-contain opacity-90"
              />
              <div className="text-xs text-ink/80 font-mono">
                <span className="font-bold text-navy block">NAAC ACCREDITED</span>
                <span>Recognized under UGC 2(f) & 12(B)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 aspect-[16/9] overflow-hidden rounded-xs border border-border shadow-xs">
              <img
                src="/kalyan/about_campus.jpg"
                alt="Kalyan PG College Historic Campus Block"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>
            {SITE.campus.slice(0, 4).map((src, i) => (
              <div key={src} className="aspect-[4/3] overflow-hidden rounded-xs border border-border shadow-xs">
                <img
                  src={src}
                  alt={`Kalyan PG College campus life ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-28 bg-secondary/50 p-8 sm:p-12 border border-border/80">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 block">Our Vision</span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance mb-6 text-navy">
              Empowering students through accessible, value-based and research-oriented education.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To emerge as a center of holistic development where intellectual curiosity, moral integrity, 
              and progressive scholarship converge to uplift society and prepare visionary leaders for the nation.
            </p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 block">Our Mission</span>
            <ul className="space-y-5">
              {[
                "Impart quality higher education across humanities, sciences, commerce, technology, and teacher training.",
                "Promote high-impact scholastic research across our 8 recognized Ph.D doctoral research centers.",
                "Inculcate national unity, social awareness, and civic responsibility via active NCC, NSS, and student welfare initiatives.",
                "Ensure inclusive education with affordable fee structures, merit scholarships, and state-of-the-art infrastructure.",
              ].map((m, i) => (
                <li key={i} className="flex gap-4 border-b border-border/60 pb-4 last:border-0">
                  <span className="font-mono text-xs font-semibold text-gold pt-1">0{i + 1}</span>
                  <p className="text-sm text-ink/85 leading-relaxed">{m}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-border divide-y lg:divide-y-0 lg:divide-x divide-border">
          {SITE.stats.map((s, i) => (
            <div
              key={s.label}
              className="py-10 px-6 flex flex-col items-center text-center bg-card/40"
            >
              <div className="font-mono text-[10px] text-gold mb-3">({String(i + 1).padStart(2, "0")})</div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy mb-2 font-bold">{s.value}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
