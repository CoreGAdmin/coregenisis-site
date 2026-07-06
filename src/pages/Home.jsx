import { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";
import coreIdentityIcon from "../assets/coreidentity-icon.png";
import PipelineBar from "../components/PipelineBar.jsx";
import { CAPABILITIES, SERVES } from "../data/content.js";

const NAV = [
  { label: "Platform", path: "/platform" },
  { label: "Governance", path: "/governance" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Partners", path: "/partners" },
  { label: "Company", path: "/company" },
];

function GovernedByBadge({ variant = "governance" }) {
  const isFooter = variant === "footer";
  return (
    <div
      className={
        isFooter
          ? "inline-flex items-center gap-2.5 text-xs text-slateLt"
          : "inline-flex items-center gap-3 bg-navyCard border border-navyLine rounded-full pl-3 pr-4 py-2"
      }
    >
      <img
        src={coreIdentityIcon}
        alt="CoreIdentity"
        className={isFooter ? "h-6 w-auto" : "h-7 w-auto"}
      />
      <span className={isFooter ? "" : "text-[13px] text-slateLt"}>Governed by</span>
      <span className={isFooter ? "text-white/90 font-medium" : "text-[13px] text-white font-semibold"}>CoreIdentity</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans text-navy bg-white">
      <nav className="sticky top-0 z-50 bg-navy border-b border-navyLine">
        <div className="flex items-center justify-between px-4 sm:px-8 py-4">
          <Link to="/" className="flex-shrink-0" aria-label="CoreG home">
            <img src={logoDark} alt="CoreG" className="h-[26px] sm:h-[30px]" />
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link key={item.label} to={item.path} className="text-sm font-medium text-white/90 hover:text-white whitespace-nowrap">{item.label}</Link>
            ))}
            <a href="#" className="text-[13px] text-slateLt hover:text-ice whitespace-nowrap">Client Login</a>
            <a href="#" className="bg-gold text-navy text-sm font-semibold px-5 py-2.5 rounded whitespace-nowrap">Request Access</a>
          </div>
          <div className="flex md:hidden items-center gap-3">
            <a href="#" className="bg-gold text-navy text-sm font-semibold px-4 py-2 rounded whitespace-nowrap">Request Access</a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="text-white p-1 -mr-1"
            >
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
            <a href="#" className="py-2.5 text-[15px] text-slateLt hover:text-ice">Client Login</a>
          </div>
        )}
      </nav>

      <section className="bg-navy px-8 pt-24 pb-18">
        <div className="max-w-[880px] mx-auto text-center">
          <span className="inline-block font-mono text-xs tracking-[0.12em] text-gold uppercase
                           border border-gold rounded-full px-4 py-1.5 mb-7">
            Private Capital Markets — Governed
          </span>
          <h1 className="font-display text-[clamp(36px,5.5vw,64px)] font-medium leading-[1.08] text-white mb-6">
            Every stage of the transaction,<br/>verified before it moves.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto mb-11 leading-relaxed">
            CoreG governs the full lifecycle of high-value asset transactions —
            onboarding through reporting — with no stage that can be bypassed.
          </p>
          <a href="#" className="inline-block bg-gold text-navy text-[15px] font-semibold px-8 py-3.5 rounded">
            Request Access
          </a>
          <div className="max-w-[880px] mx-auto mt-16"><PipelineBar /></div>
        </div>
      </section>

      <section className="bg-mist px-8 py-[88px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="max-w-[560px] mb-14">
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">The Platform</div>
            <h2 className="font-display text-[34px] font-medium text-navy leading-tight m-0">
              One governed pipeline, from first contact to close.
            </h2>
          </div>
          <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="bg-white border border-[#E2E8F0] rounded-lg px-6 py-7">
                <div className="font-mono text-xs text-gold mb-3.5">●</div>
                <div className="text-base font-semibold text-navy mb-2.5">{c.label}</div>
                <div className="text-sm text-slate leading-relaxed">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-8 py-[88px]">
        <div className="max-w-[1080px] mx-auto flex flex-wrap gap-12 items-start">
          <div className="flex-1 min-w-[360px]">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">Governance & Compliance</div>
            <h2 className="font-display text-[32px] font-medium text-white mb-5 leading-tight">
              Eleven agents. Zero silent exceptions.
            </h2>
            <p className="text-[15px] text-ice/85 leading-[1.7] mb-7">
              Eleven specialized agents enforce compliance gates at every stage — screening
              for sanctioned parties, verifying documentation, and producing a cryptographic
              proof pack for every decision made. No stage advances on a silent pass.
            </p>
            <GovernedByBadge variant="governance" />
          </div>
          <div className="flex-1 min-w-[300px] grid gap-3.5">
            {[
              ["OFAC / Sanctions Screening", "Every party screened before advancement."],
              ["Document Verification", "Submitted records checked against required standard."],
              ["Cryptographic Proof Pack", "Every decision produces a signed, auditable record."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-gold pl-4">
                <div className="text-sm font-semibold text-white mb-1">{t}</div>
                <div className="text-[13px] text-slateLt leading-snug">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-[88px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">Who We Serve</div>
          <div className="grid gap-10 mt-8 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {SERVES.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[22px] font-medium text-navy mb-2.5">{s.label}</div>
                <div className="text-sm text-slate leading-relaxed">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-8 py-18 border-t border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-display text-[28px] font-medium text-navy mb-4">Bring us your next transaction.</h2>
          <p className="text-[15px] text-slate mb-8">
            Access is by request. Tell us what you're moving and we'll confirm fit before anything else.
          </p>
          <a href="#" className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded">
            Request Access
          </a>
        </div>
      </section>

      <footer className="bg-navy px-8 pt-12 pb-8">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex flex-wrap justify-between gap-6 mb-8">
            <Link to="/" aria-label="CoreG home">
              <img src={logoDark} alt="CoreG" className="h-6" />
            </Link>
            <GovernedByBadge variant="footer" />
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
