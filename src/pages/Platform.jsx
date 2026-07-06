import { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";
import coreIdentityIcon from "../assets/coreidentity-icon.png";
import PipelineBar from "../components/PipelineBar.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { PLATFORM_SECTIONS } from "../data/platformContent.js";

const NAV = [
  { label: "Platform", path: "/platform" },
  { label: "Governance", path: "/governance" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Partners", path: "/partners" },
  { label: "Company", path: "/company" },
];

function GovernedByBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 text-xs text-slateLt">
      <img src={coreIdentityIcon} alt="CoreIdentity" className="h-6 w-auto" />
      <span>Governed by</span>
      <span className="text-white/90 font-medium">CoreIdentity</span>
    </div>
  );
}

export default function Platform() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans text-navy bg-white">
      {/* NAV — identical shell to Home, kept consistent across every page */}
      <nav className="sticky top-0 z-50 bg-navy border-b border-navyLine">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link to="/" className="flex-shrink-0" aria-label="CoreG home">
            <img src={logoDark} alt="CoreG" className="h-[26px] sm:h-[30px]" />
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link key={item.label} to={item.path} className="text-sm font-medium text-white/90 hover:text-white whitespace-nowrap">{item.label}</Link>
            ))}
            <ComingSoonButton className="text-[13px] text-slateLt hover:text-ice whitespace-nowrap cursor-pointer">Client Login</ComingSoonButton>
            <ComingSoonButton className="bg-gold text-navy text-sm font-semibold px-5 py-2.5 rounded whitespace-nowrap cursor-pointer">Request Access</ComingSoonButton>
          </div>
          <div className="flex md:hidden items-center gap-3">
            <ComingSoonButton className="bg-gold text-navy text-sm font-semibold px-4 py-2 rounded whitespace-nowrap cursor-pointer">Request Access</ComingSoonButton>
            <button onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen} className="text-white p-1 -mr-1">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {menuOpen ? (
                  <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M2 5H20M2 11H20M2 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col px-4 pb-4 gap-1 border-t border-navyLine">
            {NAV.map((item) => (
              <Link key={item.label} to={item.path} className="py-2.5 text-[15px] font-medium text-white/90 hover:text-white">{item.label}</Link>
            ))}
            <ComingSoonButton className="py-2.5 text-[15px] text-slateLt hover:text-ice cursor-pointer">Client Login</ComingSoonButton>
          </div>
        )}
      </nav>

      {/* HERO — Platform-specific headline, not a repeat of the homepage */}
      <section className="bg-navy px-8 pt-20 pb-14">
        <div className="max-w-[880px] mx-auto text-center">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">The Platform</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.12] text-white mb-6">
            One governed pipeline.<br/>Four points of enforcement.
          </h1>
          <p className="text-lg text-ice/85 max-w-[640px] mx-auto leading-relaxed">
            CoreG isn't four products bundled together — it's a single transaction pipeline
            with hard gates at every stage. Here's what happens at each one.
          </p>
        </div>
      </section>

      {/* PIPELINE SPINE — the visual thread connecting all 4 sections below */}
      <section className="bg-navy px-8 pb-16 border-b border-navyLine">
        <div className="max-w-[880px] mx-auto"><PipelineBar /></div>
      </section>

      {/* FOUR DEEP SECTIONS — alternating background, each a real section */}
      {PLATFORM_SECTIONS.map((section, i) => (
        <section key={section.id} id={section.id} className={i % 2 === 0 ? "bg-white px-8 py-20" : "bg-mist px-8 py-20"}>
          <div className="max-w-[760px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-navy/40 tracking-[0.1em]">0{i + 1}</span>
              <div className="h-px flex-1 bg-[#E2E8F0]" />
              <div className="flex gap-1.5">
                {section.stages.map((s) => (
                  <span key={s} className="font-mono text-[10px] text-gold bg-navy/5 border border-gold/30 rounded-full px-2 py-0.5 whitespace-nowrap">{s}</span>
                ))}
              </div>
            </div>
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">{section.eyebrow}</div>
            <h2 className="font-display text-[28px] sm:text-[32px] font-medium text-navy mb-6 leading-tight">{section.title}</h2>
            {section.paragraphs.map((p, pi) => (
              <p key={pi} className="text-[15px] text-slate leading-[1.75] mb-4 last:mb-0">{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* CLOSING CTA */}
      <section className="bg-navy px-8 py-20 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-display text-[28px] font-medium text-white mb-4">See the pipeline in practice.</h2>
          <p className="text-[15px] text-ice/80 mb-8">
            Access is by request. Tell us what you're moving and we'll confirm fit before anything else.
          </p>
          <ComingSoonButton className="inline-block bg-gold text-navy text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      {/* FOOTER — identical shell to Home */}
      <footer className="bg-navy px-8 pt-12 pb-8 border-t border-navyLine">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-wrap justify-between gap-6 mb-8">
            <Link to="/" aria-label="CoreG home">
              <img src={logoDark} alt="CoreG" className="h-6" />
            </Link>
            <GovernedByBadge />
          </div>
          <div className="border-t border-navyLine pt-5 flex flex-wrap justify-between gap-3">
            <span className="text-xs text-slateLt">© 2026 CoreGenisis dba CoreG. All rights reserved.</span>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service", "Disclosures"].map((l) => (
                <a key={l} href="#" className="text-xs text-slateLt hover:text-ice">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
