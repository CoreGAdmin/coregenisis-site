import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

export default function NotFound() {
  return (
    <div className="font-sans text-navy bg-white min-h-screen flex flex-col">
      <PageNav />
      <main className="flex-1 bg-mist px-5 sm:px-8 py-24 flex items-center">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="font-mono text-xs tracking-[0.12em] text-gold uppercase mb-4">404 — Page Not Found</div>
          <h1 className="font-display text-[clamp(38px,6vw,64px)] font-medium leading-[1.05] text-navy mb-6">The requested page is not part of the CoreG site.</h1>
          <p className="text-[17px] text-slate leading-[1.75] mb-9 mx-auto">Return to the institutional gateway or contact CoreG directly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/" className="inline-flex justify-center bg-navy text-white font-semibold px-7 py-3.5 rounded-sm">Return Home</Link>
            <Link to="/contact" className="inline-flex justify-center border border-navy/30 text-navy font-semibold px-7 py-3.5 rounded-sm">Contact CoreG</Link>
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}
