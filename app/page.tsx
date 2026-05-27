import Nav from "./components/Nav";
import { caseStudies, skills } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center"
        >
          <div className="max-w-5xl mx-auto px-6 w-full py-32">
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-4">
              Product Manager
            </p>
            <h1 className="text-5xl sm:text-6xl font-semibold text-slate-900 tracking-tight mb-6">
              Gianluca DeRossi
            </h1>
            <p className="text-xl text-slate-500 max-w-xl mb-10 leading-relaxed">
              Building B2B SaaS products and ad programs that grow revenue,
              reduce churn, and give teams clarity on what&apos;s working.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium hover:border-slate-400 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">
              About
            </p>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight leading-snug">
                  I turn user confusion into retention.
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  I&apos;m a Product Manager based in the New York/New Jersey
                  metro area with 4+ years of experience in B2B SaaS,
                  subscription programs, and performance advertising. My work
                  sits at the intersection of product, data, and go-to-market.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  I&apos;ve owned full product lifecycles across white-label SaaS
                  platforms, Google Ads subscription programs, and client-facing
                  analytics tools. I work across engineering, design, and
                  external vendors to ship things that measurably move the
                  needle.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
                    Focus areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Ads & Monetization",
                      "Growth & Retention",
                      "Data Products",
                      "B2B SaaS",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white border border-slate-200 text-slate-600 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
                    Education
                  </p>
                  <p className="text-slate-700 font-medium">MBA</p>
                  <p className="text-slate-500 text-sm">Manhattan College</p>
                  <p className="text-slate-700 font-medium mt-3">
                    BA, Marketing &amp; Digital Media
                  </p>
                  <p className="text-slate-500 text-sm">Manhattan College</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">
                    Target industries
                  </p>
                  <p className="text-slate-500 text-sm">
                    AdTech / MarTech · Mid-size SaaS · Startups · NYC / NJ area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">
              Work
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 mb-16 tracking-tight">
              Selected case studies
            </h2>
            <div className="flex flex-col gap-16">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="grid md:grid-cols-3 gap-8 pb-16 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                      {cs.company}
                    </p>
                    <p className="text-sm font-medium text-slate-700 mb-1">
                      {cs.role}
                    </p>
                    <p className="text-xs text-slate-400 mb-4">{cs.period}</p>
                    <div className="flex flex-wrap gap-1 mb-6">
                      {cs.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      {cs.metrics.map((m) => (
                        <span
                          key={m}
                          className="text-sm font-semibold text-slate-900"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6 leading-snug">
                      {cs.headline}
                    </h3>
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                          Problem
                        </p>
                        <p className="text-slate-500 leading-relaxed text-sm">
                          {cs.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                          Approach
                        </p>
                        <p className="text-slate-500 leading-relaxed text-sm">
                          {cs.approach}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                          Outcome
                        </p>
                        <p className="text-slate-500 leading-relaxed text-sm">
                          {cs.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-8">
              Skills
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 mb-16 tracking-tight">
              What I bring
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-semibold text-slate-700 mb-4">
                    {group.category}
                  </p>
                  <div className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-sm text-slate-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
              Contact
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">
              Let&apos;s talk
            </h2>
            <p className="text-slate-500 mb-10 max-w-sm mx-auto leading-relaxed">
              Open to PM roles in AdTech, MarTech, and SaaS companies in the
              NYC/NJ area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:your@email.com"
                className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium hover:border-slate-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                className="border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium hover:border-slate-400 transition-colors"
              >
                Download resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-xs text-slate-400">
          <span>Gianluca DeRossi</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
