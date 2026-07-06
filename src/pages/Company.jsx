import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

export default function Company() {
  return (
    <div className="font-sans text-navy bg-white min-h-screen flex flex-col">
      <PageNav />
      <div className="flex-1 flex items-center justify-center px-8 py-24 text-center">
        <div>
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">Company</div>
          <h1 className="font-display text-3xl font-medium text-navy mb-4">Content in progress.</h1>
          <p className="text-slate max-w-md mx-auto">
            This page has the same nav and footer as the rest of the site — its dedicated
            content build is still ahead.
          </p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
