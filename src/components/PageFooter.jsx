import { Link } from "react-router-dom";
import logoDark from "../assets/coreg-logo-dark.png";
import coreIdentityIcon from "../assets/coreidentity-icon.png";

export default function PageFooter() {
  return (
    <footer className="bg-navy px-8 pt-12 pb-8 border-t border-navyLine">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-wrap justify-between gap-6 mb-8">
          <Link to="/" aria-label="CoreG home">
            <img src={logoDark} alt="CoreG" className="h-8" />
          </Link>
          <div className="inline-flex items-center gap-2.5 text-xs text-slateLt">
            <img src={coreIdentityIcon} alt="CoreIdentity" className="h-6 w-auto" />
            <span>Governed by</span>
            <span className="text-white/90 font-medium">CoreIdentity</span>
          </div>
        </div>
        <div className="border-t border-navyLine pt-5 flex flex-wrap justify-between gap-3">
          <span className="text-xs text-slateLt">© 2026 CoreGenisis dba CoreG. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="text-xs text-slateLt hover:text-ice">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-xs text-slateLt hover:text-ice">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
