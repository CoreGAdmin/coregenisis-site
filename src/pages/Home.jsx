import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

const DESTINATIONS = [
  {
    number: "01",
    title: "Who We Are",
    body: "Understand CoreG's institutional role, market purpose, and responsibility as an authorized private capital markets intermediary.",
    path: "/who-we-are",
    action: "Discover CoreG",
  },
  {
    number: "02",
    title: "How We Work",
    body: "Follow the disciplined eight-stage operating model that governs an engagement from intake through transaction close.",
    path: "/how-we-work",
    action: "Explore the process",
  },
  {
    number: "03",
    title: "Platform",
    body: "See how governed infrastructure supports verification, documentation, oversight, and an auditable transaction record.",
    path: "/platform",
    action: "View the platform",
  },
  {
    number: "04",
    title: "Leadership",
    body: "Meet the executive leadership responsible for CoreG's strategy, institutional standards, and market stewardship.",
    path: "/leadership",
    action: "Meet leadership",
  },
  {
    number: "05",
    title: "About",
    body: "Learn how CoreG is organized, governed, and positioned within the broader CoreIdentity institutional architecture.",
    path: "/about",
    action: "About CoreG",
  },
  {
    number: "06",
    title: "Insights",
    body: "Read company announcements, thought leadership, platform updates, and answers to frequently asked questions.",
    path: "/insights",
    action: "Read insights",
  },
  {
    number: "07",
    title: "Contact",
    body: "Begin an institutional conversation with CoreG regarding a qualifying transaction, relationship, or inquiry.",
    path: "/contact",
    action: "Contact CoreG",
  },
];

export default function Home() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <main>
        <section className="relative overflow-hidden bg-navy px-5 sm:px-8 py-20 sm:py-28 lg:py-32">
          <div className="absolute inset-0 opacity-40" aria-hidden="true">
            <div className="absolute -right-24 -top-36 h-[520px] w-[520px] rounded-full border border-white/10" />
            <div className="absolute -right-2 -top-16 h-[360px] w-[360px] rounded-full border border-gold/20" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="relative max-w-[1120px] mx-auto">
            <div className="max-w-[930px]">
              <div className="font-mono text-[11px] sm:text-xs tracking-[0.14em] text-gold uppercase mb-7">
                Authorized Private Capital Markets Intermediary
              </div>
              <h1 className="font-display text-[clamp(42px,7vw,78px)] font-medium leading-[1.03] text-white mb-7 text-balance">
                Private capital markets, held to the standard they should have had from the start.
              </h1>
              <p className="text-[17px] sm:text-xl text-ice/85 max-w-[760px] leading-[1.75] mb-10">
                CoreG facilitates qualifying private capital transactions through a disciplined operating standard built to ensure confidence, integrity, and accountability from first engagement through close.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/how-we-work"
                  className="inline-flex items-center justify-center bg-gold text-navy text-[15px] font-semibold px-7 py-3.5 rounded-sm hover:bg-goldBright transition-colors"
                >
                  Explore How We Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-white/35 text-white text-[15px] font-semibold px-7 py-3.5 rounded-sm hover:border-white/70 hover:bg-white/5 transition-colors"
                >
                  Contact CoreG
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 sm:px-8 py-16 sm:py-24" aria-labelledby="institutional-navigation">
          <div className="max-w-[1120px] mx-auto">
            <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 mb-12 sm:mb-16">
              <div>
                <div className="font-mono text-[11px] tracking-[0.13em] text-gold uppercase mb-3">
                  Institutional Navigation
                </div>
                <h2 id="institutional-navigation" className="font-display text-[32px] sm:text-[42px] font-medium text-navy leading-[1.12] text-balance">
                  Understand CoreG through the institution itself.
                </h2>
              </div>
              <div className="lg:pt-7">
                <p className="text-[16px] sm:text-[17px] text-slate leading-[1.8] max-w-[650px]">
                  Each destination has one responsibility: to introduce a specific dimension of CoreG clearly, without duplication or promotional excess.
                </p>
              </div>
            </div>

            <div className="grid border-l border-t border-[#DCE3EC] sm:grid-cols-2 lg:grid-cols-3">
              {DESTINATIONS.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative min-h-[300px] border-r border-b border-[#DCE3EC] p-7 sm:p-8 flex flex-col transition-colors hover:bg-mist ${index === DESTINATIONS.length - 1 ? "lg:col-span-3 lg:min-h-0 lg:grid lg:grid-cols-[0.35fr_0.9fr_1fr_auto] lg:items-center lg:gap-8" : ""}`}
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] text-slateLt mb-10 lg:mb-0">{item.number}</span>
                  <h3 className="font-display text-[27px] font-medium text-navy leading-tight mb-4 lg:mb-0">{item.title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-slate leading-[1.75] mb-8 flex-1 lg:mb-0">{item.body}</p>
                  <span className="inline-flex items-center gap-3 text-[14px] font-semibold text-navy">
                    {item.action}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
