import { useState } from "react";
import { SITE } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = SITE.testimonials[i];
  const prev = () => setI((p) => (p - 1 + SITE.testimonials.length) % SITE.testimonials.length);
  const next = () => setI((p) => (p + 1) % SITE.testimonials.length);

  return (
    <section className="py-24 lg:py-36 px-6 bg-navy text-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4 inline-block">
            Voices of Kalyan College
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-3xl">
            Stories from those who&rsquo;ve <span className="italic text-gold">walked these halls.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-surface/5 rounded-xs border border-surface/15">
              <img
                key={t.img}
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover animate-fade-up"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold text-navy p-5 hidden md:block shadow-lg">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em]">Alumni & Scholars</div>
              <div className="font-serif text-xl mt-1 font-bold">0{i + 1} / 0{SITE.testimonials.length}</div>
            </div>
          </div>

          <div key={i} className="animate-fade-up">
            <svg className="size-10 text-gold mb-6 opacity-90" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl leading-[1.4] italic text-balance mb-8 text-surface/95">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-surface/20 pt-5">
              <div className="font-serif text-xl text-surface font-semibold">{t.name}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-surface/70 mt-1 font-mono">{t.dept}</div>
              <div className="text-sm text-gold mt-2 italic">{t.title}</div>
            </div>

            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="size-12 border border-surface/30 hover:bg-gold hover:text-navy hover:border-gold transition-colors flex items-center justify-center cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="size-12 border border-surface/30 hover:bg-gold hover:text-navy hover:border-gold transition-colors flex items-center justify-center cursor-pointer"
              >
                →
              </button>
              <div className="ml-4 flex gap-1.5">
                {SITE.testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1 transition-all cursor-pointer ${
                      idx === i ? "w-10 bg-gold" : "w-5 bg-surface/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
