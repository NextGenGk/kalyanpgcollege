import { useState } from "react";
import { SITE } from "@/lib/site-data";
import collegeLogo from "@/assets/logo.svg";

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Dedicated Admissions & Enquiry Section */}
      <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Contact Info & Institutional Details */}
            <div className="lg:col-span-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-red-800 font-semibold mb-3 inline-block">
                Admissions Open · Session 2026-27
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight mb-6">
                Begin your academic journey at <span className="italic text-red-800">Kalyan College.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Experience over six decades of academic distinction in Bhilai Nagar. Offering 40+ degree programmes in Sciences, Commerce, Arts, Teacher Education, Computer Applications, and Ph.D research.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 bg-white p-6 rounded-md border border-slate-200 shadow-xs mb-8">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Campus Address
                  </div>
                  <p className="text-slate-800 text-sm font-medium leading-snug">
                    Street No. 5, Sector 7<br />
                    Bhilai Nagar, Dist. Durg<br />
                    Chhattisgarh 490006
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Contact Information
                  </div>
                  <p className="text-slate-800 text-sm leading-snug">
                    <span className="font-medium">Phone:</span> 0788-2284252<br />
                    <span className="font-medium">Principal:</span> +91 91315 76378<br />
                    <span className="font-medium">Email:</span> office@kalyanpgcollege.org
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://kalyanpgcollege.org/downloads/Kalyan_PG_College_Prospectus_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-slate-800 transition-colors shadow-xs"
                >
                  Download Prospectus (PDF) ↗
                </a>
                <a
                  href="https://kalyanpgcollege.org/downloads/student_hand_book_3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider rounded-sm hover:border-red-800 hover:text-red-800 transition-colors bg-white"
                >
                  Student Handbook ↗
                </a>
              </div>
            </div>

            {/* Right: Admission Inquiry Form Card */}
            <div className="lg:col-span-5 bg-white p-8 rounded-lg border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Admission Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Session 2026-27 Enrollment</p>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider bg-red-50 text-red-800 border border-red-200 rounded-sm">
                  Online Desk
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="size-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-serif text-xl font-bold text-slate-900">Inquiry Received</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Thank you for contacting Kalyan Post Graduate College. Our admissions counselling team will get in touch shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-red-800 font-semibold uppercase tracking-wider underline cursor-pointer pt-2 block mx-auto"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Applicant Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-red-800 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Mobile Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-red-800 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@email.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-red-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Programme of Interest
                    </label>
                    <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-sm text-sm text-slate-800 focus:bg-white focus:border-red-800 focus:outline-none transition-colors">
                      <option>B.Sc. — Science (Computer Science / Bio / Biotech / Maths)</option>
                      <option>M.Sc. — Chemistry / Biotech / Botany / Zoology / CS</option>
                      <option>B.Com / B.B.A. — Commerce & Management</option>
                      <option>M.Com. — Master of Commerce</option>
                      <option>B.A. / M.A. — Humanities & Social Sciences</option>
                      <option>B.Ed. / M.Ed. — Faculty of Education (NCTE)</option>
                      <option>B.C.A. / PGDCA / DCA — Computer Applications</option>
                      <option>Ph.D Doctoral Research</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-800 text-white font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-red-900 transition-colors shadow-sm cursor-pointer mt-2"
                  >
                    Submit Admission Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Institutional Footer */}
      <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-10 border-t-2 border-red-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Institutional Brand & Quality Accreditation Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="size-16 rounded-full bg-white p-1.5 shrink-0 shadow-md border-2 border-gold flex items-center justify-center">
                <img
                  src={collegeLogo}
                  alt="Kalyan College Crest"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-white tracking-tight">
                  Kalyan Post Graduate College
                </h3>
                <p className="text-gold text-xs font-mono uppercase tracking-wider mt-0.5">
                  Bhilai Nagar, Dist. Durg (C.G.) · Estd. 1963 · CPE Status (UGC)
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Managed by Chhattisgarh Kalyan Samiti · Affiliated to Hemchand Yadav University Durg
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4 bg-slate-800/60 p-2.5 rounded-sm border border-slate-700 shrink-0">
              <img
                src={SITE.logos.yearsBadge}
                alt="60+ Years Celebration"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="w-px h-8 bg-slate-700" />
              <img
                src={SITE.logos.naacBadge}
                alt="NAAC Accredited"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* 5-Column Navigation Grid matching official kalyanpgcollege.org */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-slate-800 text-xs">
            {/* 1. Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Contact
              </h4>
              <p className="text-slate-400 leading-relaxed mb-3">
                <strong className="text-slate-200">Address:</strong><br />
                Street No. 5, Sector 7<br />
                Bhilai (C.G.) 490006
              </p>
              <p className="text-slate-400 space-y-1">
                <div><strong className="text-slate-200">Principal:</strong> 9131576378</div>
                <div><strong className="text-slate-200">Phone:</strong> 07882284252</div>
                <div><strong className="text-slate-200">Email:</strong> office@kalyanpgcollege.org</div>
              </p>
            </div>

            {/* 2. About Us */}
            <div>
              <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                About Us
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-gold transition-colors">The College</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">Vision & Mission</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">Milestones</a></li>
                <li><a href="#infrastructure" className="hover:text-gold transition-colors">Infrastructure</a></li>
                <li><a href="#leadership" className="hover:text-gold transition-colors">Governing Body</a></li>
                <li><a href="#leadership" className="hover:text-gold transition-colors">Principal's Desk</a></li>
              </ul>
            </div>

            {/* 3. Admission */}
            <div>
              <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Admission
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#courses" className="hover:text-gold transition-colors">Courses Offered</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Admission Procedure</a></li>
                <li><a href="https://kalyanpgcollege.org/admission-title/fee-structure/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Fee Structure ↗</a></li>
                <li><a href="https://kalyanpgcollege.org/downloads/Kalyan_PG_College_Prospectus_2026.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">College Prospectus ↗</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">College Office</a></li>
              </ul>
            </div>

            {/* 4. Student Corner */}
            <div>
              <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Student's Corner
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://kalyanpgcollege.org/downloads/student_hand_book_3.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Handbook ↗</a></li>
                <li><a href="https://kalyanpgcollege.org/code-of-conduct-2/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Code of Conduct ↗</a></li>
                <li><a href="#infrastructure" className="hover:text-gold transition-colors">NCC & NSS Units</a></li>
                <li><a href="https://kalyanpgcollege.org/student-title/best-practices/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Best Practices ↗</a></li>
                <li><a href="https://kalyanpgcollege.org/student-title/welfare-scheme/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Welfare Scheme ↗</a></li>
                <li><a href="https://kalyanpgcollege.org/student-title/scholarship/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Scholarships ↗</a></li>
              </ul>
            </div>

            {/* 5. Council Linkages */}
            <div>
              <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-700 pb-2">
                Council Links
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="https://durguniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Hemchand Yadav University ↗</a></li>
                <li><a href="http://ignou.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">IGNOU Study Centre ↗</a></li>
                <li><a href="https://ncte.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">NCTE Recognition ↗</a></li>
                <li><a href="https://www.ugc.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">UGC Official ↗</a></li>
                <li><a href="http://naac.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">NAAC Council ↗</a></li>
                <li><a href="http://highereducation.cg.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">CG Higher Education ↗</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Accreditations */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
            <p>
              Copyright © {new Date().getFullYear()} Kalyan Post Graduate College, Bhilai Nagar, Chhattisgarh.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-[11px]">
              <span>UGC "College with Potential for Excellence"</span>
              <span>·</span>
              <span>NAAC Accredited</span>
              <span>·</span>
              <span>NCTE Approved</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
