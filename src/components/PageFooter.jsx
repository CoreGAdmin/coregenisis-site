import { Link } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";
import coreIdentityIcon from "../assets/coreidentity-icon.png";

const FOOTER_NAV = [
  ["Who We Are", "/who-we-are"], ["How We Work", "/how-we-work"], ["Platform", "/platform"],
  ["Leadership", "/leadership"], ["About", "/about"], ["Insights", "/insights"], ["Contact", "/contact"],
];

export default function PageFooter() {
  return (
    <footer className="bg-navy px-5 sm:px-8 pt-14 pb-8 border-t border-navyLine">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] mb-10">
          <div>
            <Link to="/" aria-label="CoreG home" className="inline-block mb-5"><img src={logoDark} alt="CoreG" className="h-9" /></Link>
            <p className="font-display text-xl text-white max-w-[300px] leading-snug">Truth in Transactions. Confidence Through Governance.</p>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-4">Navigate</div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2">{FOOTER_NAV.map(([label, path]) => <Link key={path} to={path} className="text-sm text-slateLt hover:text-white">{label}</Link>)}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-4">Trust Infrastructure</div>
            <div className="inline-flex items-center gap-2.5 text-xs text-slateLt">
              <img src={coreIdentityIcon} alt="CoreIdentity Technologies" className="h-7 w-auto" />
              <span>Technology provided by <span className="text-white/90 font-medium">CoreIdentity Technologies</span></span>
            </div>
          </div>
        </div>
        <div className="border-t border-navyLine pt-5 flex flex-wrap justify-between gap-3">
          <span className="text-xs text-slateLt">© 2026 CoreGenisis dba CoreG. All rights reserved.</span>
          <div className="flex gap-5"><Link to="/privacy-policy" className="text-xs text-slateLt hover:text-ice">Privacy Policy</Link><Link to="/terms-of-service" className="text-xs text-slateLt hover:text-ice">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}
