import { useState } from "react";
import { SITE } from "@/lib/site-data";

export function Courses() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="courses" className="py-24 lg:py-36 px-6 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" /> Academic Programmes
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Degrees that empower <span className="italic text-gold">lifelong</span> ambition.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed">
            Offering over 40 diverse undergraduate, postgraduate, diploma, and doctoral research options affiliated to Hemchand Yadav University Durg.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 border-b border-border mb-10 pb-4">
          {SITE.courses.map((c, idx) => (
            <button
              key={c.stream}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-xs uppercase tracking-[0.16em] font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-navy text-surface border-b-2 border-gold shadow-xs"
                  : "bg-secondary text-ink/70 hover:bg-secondary/80 hover:text-ink"
              }`}
            >
              {c.stream}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-card border border-border p-8 lg:p-12 rounded-xs shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-gold block mb-1">
                Discipline Stream
              </span>
              <h3 className="font-serif text-3xl text-navy">
                {SITE.courses[activeTab].stream}
              </h3>
            </div>
            <span className="px-3.5 py-1 text-xs font-mono font-medium bg-gold/15 text-navy border border-gold/30 uppercase tracking-wider">
              {SITE.courses[activeTab].badge}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE.courses[activeTab].degrees.map((degree, i) => (
              <div
                key={degree}
                className="p-5 border border-border/80 bg-surface/50 hover:border-gold/60 transition-all rounded-xs flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-gold font-bold">0{i + 1}</span>
                  <div className="font-serif text-base text-ink font-medium leading-snug">
                    {degree}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                  <span>Regular / Full-time</span>
                  <a href="#contact" className="text-gold font-semibold hover:underline">Apply →</a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/30 p-6 rounded-xs">
            <div className="text-sm text-ink/80">
              Need detailed eligibility criteria and seat matrices? Refer to the official College Prospectus.
            </div>
            <a
              href="https://kalyanpgcollege.org/downloads/Kalyan_PG_College_Prospectus_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-surface px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-gold hover:text-navy transition-colors shrink-0"
            >
              Download Prospectus (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

