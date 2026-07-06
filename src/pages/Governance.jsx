import { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";
import coreIdentityIcon from "../assets/coreidentity-icon.png";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { AGENT_CATEGORIES, MECHANISMS } from "../data/governanceContent.js";

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

export default function Governance() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans text-navy bg-white">
      <nav className="sticky top-0 z-50 bg-navy border-b border-navyLine">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link to="/" className="flex-shrink-0" aria-label="CoreG home">
            <img src={logoDark} alt="CoreG" className="h-11 sm:h-12" />
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link key={item.label} to={item.path} className="text-sm font-medium text-white/90 hover:text-white whitespace-nowrap">{item.label}</Link>
            ))}
            <ComingSoonButton className="text-[13px] text-slateLt hover:text-ice whitespace-nowrap cursor-pointer">Client Login</ComingSoonButton>
            <ComingSoonButton className="bg-gold text-navy text-[13px] font-semibold px-4 py-2 rounded whitespace-nowrap cursor-pointer">Request Access</ComingSoonButton>
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

      {/* HERO — leads with the number, since it's the differentiator */}
      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Governance & Compliance</div>
          <h1 className="font-display text-[clamp(34px,5vw,58px)] font-medium leading-[1.1] text-white mb-6">
            Eleven agents. Zero silent exceptions.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto leading-relaxed">
            No other private capital markets platform enforces compliance the way CoreG does:
            eleven specialized agents, holding every gate, producing a record for every decision —
            whether or not anyone ever asks to see it.
          </p>
        </div>
      </section>

      {/* AGENT CATEGORIES — the "11 agents" made concrete, grouped by function */}
      <section className="bg-navyCard px-8 py-16 border-y border-navyLine">
        <div className="max-w-[1080px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-8 text-center">Eleven Agents, Four Functions</div>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {AGENT_CATEGORIES.map((cat) => (
              <div key={cat.label} className="bg-navy border border-navyLine rounded-lg p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-3xl font-medium text-gold">{cat.count}</span>
                  <span className="text-sm font-semibold text-white">{cat.label}</span>
                </div>
                <p className="text-[13px] text-slateLt leading-relaxed">{cat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE MECHANISMS — the concrete enforcement layer, full depth */}
      <section className="bg-white px-8 py-20">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3 text-center">How Enforcement Actually Works</div>
          <h2 className="font-display text-[30px] font-medium text-navy mb-14 text-center leading-tight">
            Three mechanisms. No exceptions to any of them.
          </h2>
          <div className="space-y-10">
            {MECHANISMS.map((m, i) => (
              <div key={m.label} className="flex gap-6">
                <div className="flex-none">
                  <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center font-display text-gold font-medium">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{m.label}</h3>
                  <p className="text-[15px] text-slate leading-[1.75]">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNED BY — CoreIdentity trust badge, substantiated here in depth */}
      <section className="bg-mist px-8 py-16 border-t border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full pl-3 pr-5 py-2.5 mb-6">
            <img src={coreIdentityIcon} alt="CoreIdentity" className="h-7 w-auto" />
            <span className="text-[13px] text-slate">Governed by</span>
            <span className="text-[13px] text-navy font-semibold">CoreIdentity</span>
          </div>
          <p className="text-[15px] text-slate leading-relaxed">
            The enforcement layer described on this page isn't a feature CoreG built —
            it's infrastructure CoreG runs on, governed by CoreIdentity's control plane.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-navy px-8 py-20 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-display text-[28px] font-medium text-white mb-4">Ask us what gets checked, and when.</h2>
          <p className="text-[15px] text-ice/80 mb-8">
            Access is by request. We'll walk through exactly which gates apply to what you're moving.
          </p>
          <ComingSoonButton className="inline-block bg-gold text-navy text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <footer className="bg-navy px-8 pt-12 pb-8 border-t border-navyLine">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-wrap justify-between gap-6 mb-8">
            <Link to="/" aria-label="CoreG home">
              <img src={logoDark} alt="CoreG" className="h-8" />
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
