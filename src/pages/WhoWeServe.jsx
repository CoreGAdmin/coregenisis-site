// __COREG_PLACEHOLDER_PENDING__ — wired into routing so the nav is never a
// dead link. Replace with real content via its own dedicated transform.
import { Link } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";

export default function WhoWeServe() {
  return (
    <div className="font-sans text-navy bg-white min-h-screen flex flex-col">
      <nav className="bg-navy border-b border-navyLine px-4 sm:px-8 py-4">
        <Link to="/" aria-label="CoreG home">
          <img src={logoDark} alt="CoreG" className="h-[26px] sm:h-[30px]" />
        </Link>
      </nav>
      <div className="flex-1 flex items-center justify-center px-8 py-24 text-center">
        <div>
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">Who We Serve</div>
          <h1 className="font-display text-3xl font-medium text-navy mb-4">Content in progress.</h1>
          <p className="text-slate max-w-md mx-auto mb-8">
            This page is wired into navigation and ready for its dedicated content build.
          </p>
          <Link to="/" className="inline-block bg-navy text-white text-sm font-semibold px-6 py-3 rounded">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
