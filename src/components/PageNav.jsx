import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";
import { ComingSoonButton } from "./ComingSoonButton.jsx";

const NAV = [
  { label: "Who We Are", path: "/who-we-are" },
  { label: "How We Work", path: "/how-we-work" },
  { label: "Platform", path: "/platform" },
  { label: "Leadership", path: "/leadership" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

function navClass({ isActive }) {
  return `text-sm font-medium whitespace-nowrap transition-colors ${
    isActive ? "text-gold" : "text-white/90 hover:text-white"
  }`;
}

export default function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav sticky top-0 z-50 bg-navy border-b border-navyLine" aria-label="Primary navigation">
      <div className="site-nav-inner flex items-center justify-between px-4 sm:px-8 py-4 max-w-[1440px] mx-auto">
        <Link to="/" className="site-nav-brand flex-shrink-0" aria-label="CoreG home" onClick={closeMenu}>
          <img src={logoDark} alt="CoreG" className="site-nav-logo h-11 sm:h-14" />
        </Link>

        <div className="hidden xl:flex items-center gap-4 2xl:gap-7">
          {NAV.map((item) => (
            <NavLink key={item.label} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
          <ComingSoonButton className="text-[13px] text-slateLt hover:text-ice whitespace-nowrap cursor-pointer">
            Client Login
          </ComingSoonButton>
          <Link to="/request-access" className="bg-gold text-navy text-[13px] font-semibold px-4 py-2 rounded whitespace-nowrap">
            Request Access
          </Link>
        </div>

        <div className="site-nav-actions flex xl:hidden items-center gap-3">
          <Link
            to="/request-access"
            className="site-nav-request bg-gold text-navy text-sm font-semibold px-4 py-2 rounded whitespace-nowrap"
            onClick={closeMenu}
          >
            Request Access
          </Link>
          <button
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="site-nav-toggle text-white p-1 -mr-1"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
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
        <div className="xl:hidden flex flex-col px-4 pb-4 gap-1 border-t border-navyLine">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-2.5 text-[15px] font-medium ${
                  isActive ? "text-gold" : "text-white/90 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ComingSoonButton className="py-2.5 text-[15px] text-slateLt hover:text-ice cursor-pointer">
            Client Login
          </ComingSoonButton>
        </div>
      )}
    </nav>
  );
}

