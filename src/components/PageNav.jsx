import { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";
import { ComingSoonButton } from "./ComingSoonButton.jsx";

const NAV = [
  { label: "Platform", path: "/platform" },
  { label: "Governance", path: "/governance" },
  { label: "Who We Serve", path: "/who-we-serve" },
  { label: "Partners", path: "/partners" },
  { label: "Our Firm", path: "/company" },
  { label: "Leadership", path: "/leadership" },
  { label: "FAQ", path: "/faq" },
];

// Single source of truth for the nav shell across all six pages. Request
// Access and Client Login appear identically everywhere — per UX/CRO
// convention, a nav-bar primary CTA should be consistent site-wide, not
// vary page to page. Fixing drift here means it can't recur per-page.
export default function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-navy border-b border-navyLine">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <Link to="/" className="flex-shrink-0" aria-label="CoreG home">
          <img src={logoDark} alt="CoreG" className="h-11 sm:h-14" />
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
  );
}
