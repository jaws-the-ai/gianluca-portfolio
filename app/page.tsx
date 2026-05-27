import Image from "next/image";
import Nav from "./components/Nav";
import FadeIn from "./components/FadeIn";
import { caseStudies, skills } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center relative overflow-hidden"
        >
          {/* subtle background grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              opacity: 0.5,
            }}
          />
          <div className="max-w-5xl mx-auto px-6 w-full py-32 relative">
            <FadeIn>
              <p className="text-sm text-slate-400 uppercase tracking-widest mb-6">
                Product Manager · NYC / NJ
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-6xl sm:text-7xl font-semibold text-slate-900 tracking-tight mb-8 leading-none">
                Gianluca
                <br />
                DeRossi
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-xl text-slate-500 max-w-lg mb-12 leading-relaxed">
                Building B2B SaaS products and ad programs that grow revenue,
                reduce churn, and give teams clarity on what&apos;s working.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
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
            </FadeIn>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-12">
                About
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Photo */}
              <FadeIn className="md:col-span-1">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-200">
                  <Image
                    src="/Gianluca Profile Photo.JPEG"
                    alt="Gianluca DeRossi"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </FadeIn>

              {/* Bio */}
              <FadeIn delay={100} className="md:col-span-2">
                <h2 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight leading-snug">
                  I turn user confusion
                  <br />
                  into retention.
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  PM based in New York/New Jersey with 4+ years in B2B SaaS,
                  subscription programs, and performance advertising. My work
                  sits at the intersection of product, data, and go-to-market.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  I&apos;ve owned full product lifecycles across white-label SaaS
                  platforms, Google Ads subscription programs, and client-facing
                  analytics tools — working across engineering, design, and
                  external vendors to ship things that measurably move the
                  needle.
                </p>
                <div className="grid grid-cols-2 gap-8">
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
                          className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full"
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
                    <p className="text-slate-700 text-sm font-medium">MBA</p>
                    <p className="text-slate-400 text-xs mb-2">
                      Manhattan College
                    </p>
                    <p className="text-slate-700 text-sm font-medium">
                      BA, Marketing &amp; Digital Media
                    </p>
                    <p className="text-slate-400 text-xs">Manhattan College</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                Work
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 mb-16 tracking-tight">
                Selected case studies
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-24">
              {caseStudies.map((cs, i) => (
                <FadeIn key={cs.id} delay={i * 100}>
                  <div className="grid md:grid-cols-3 gap-10">
                    {/* Left: meta + metrics */}
                    <div>
                      <p className="text-4xl font-semibold text-slate-100 mb-4 select-none">
                        0{i + 1}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                        {cs.company}
                      </p>
                      <p className="text-sm font-medium text-slate-700 mb-1">
                        {cs.role}
                      </p>
                      <p className="text-xs text-slate-400 mb-4">{cs.period}</p>
                      <div className="flex flex-wrap gap-1 mb-8">
                        {cs.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Metric callouts */}
                      <div className="flex flex-col gap-4">
                        {cs.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="border-l-2 border-slate-900 pl-4"
                          >
                            <p className="text-2xl font-semibold text-slate-900 leading-none">
                              {m.value}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: content */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold text-slate-900 mb-8 leading-snug">
                        {cs.headline}
                      </h3>
                      <div className="flex flex-col gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                            Problem
                          </p>
                          <p className="text-slate-500 leading-relaxed text-sm">
                            {cs.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                            Approach
                          </p>
                          <p className="text-slate-500 leading-relaxed text-sm">
                            {cs.approach}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                            Outcome
                          </p>
                          <p className="text-slate-500 leading-relaxed text-sm">
                            {cs.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i < caseStudies.length - 1 && (
                    <div className="mt-24 border-t border-slate-100" />
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                Skills
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 mb-16 tracking-tight">
                What I bring
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {skills.map((group, i) => (
                <FadeIn key={group.category} delay={i * 80}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 h-full">
                    <p className="text-sm font-semibold text-slate-800 mb-5">
                      {group.category}
                    </p>
                    <div className="flex flex-col gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm text-slate-500 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32">
          <FadeIn>
            <div className="max-w-5xl mx-auto px-6 text-center">
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">
                Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
                Let&apos;s talk.
              </h2>
              <p className="text-slate-500 mb-12 max-w-sm mx-auto leading-relaxed">
                Open to PM roles in AdTech, MarTech, and SaaS companies in the
                NYC/NJ area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:your@email.com"
                  className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/gianluca-derossi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-200 text-slate-700 px-8 py-3 rounded-full text-sm font-medium hover:border-slate-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  className="border border-slate-200 text-slate-700 px-8 py-3 rounded-full text-sm font-medium hover:border-slate-400 transition-colors"
                >
                  Download resume
                </a>
              </div>
            </div>
          </FadeIn>
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
