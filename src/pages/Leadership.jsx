import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import executivePortrait from "../assets/todd-morgan-leadership.jpg";

const focusAreas = [
  { title: "Capital Markets Strategy", description: "Advancing a governance-first operating model that strengthens trust, transparency, and accountability throughout private capital markets." },
  { title: "Institutional Governance", description: "Establishing verifiable governance standards that enable institutions to operate with greater confidence, integrity, and operational discipline." },
  { title: "Strategic Growth", description: "Building long-term institutional relationships and expanding the Firm’s presence across the private capital markets ecosystem." },
  { title: "Executive Operations", description: "Aligning strategy, governance, and execution to support disciplined organizational growth and long-term institutional success." },
];

export default function Leadership() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="leadership-page">
          <div className="leadership-shell">
            <nav className="leadership-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span aria-hidden="true">/</span>
              <span>Leadership</span><span aria-hidden="true">/</span>
              <span aria-current="page">Todd Morgan</span>
            </nav>

            <article className="leadership-identity-card">
              <div className="leadership-portrait-wrap">
                <img className="leadership-portrait" src={executivePortrait}
                  alt="Todd Morgan, Chief Executive Officer of CoreG" width="1536" height="1536" />
              </div>
              <div className="leadership-summary">
                <p className="leadership-eyebrow">Chief Executive Officer</p>
                <h1>Todd Morgan</h1>
                <div className="leadership-rule" aria-hidden="true" />
                <p className="leadership-summary-label">Leadership Summary</p>
                <p className="leadership-intro">
                  Leads CoreG&apos;s strategy, institutional growth, and executive operations while guiding the Firm&apos;s capital markets and governance strategy to establish a more trusted, transparent, and institutionally accountable private capital markets ecosystem.
                </p>
              </div>
            </article>

            <section className="leadership-focus" aria-labelledby="areas-of-focus">
              <p className="leadership-section-label" id="areas-of-focus">Areas of Focus</p>
              <div className="leadership-focus-grid">
                {focusAreas.map((area) => (
                  <article className="leadership-focus-item" key={area.title}>
                    <h2>{area.title}</h2><p>{area.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="leadership-biography" aria-labelledby="biography">
              <p className="leadership-section-label" id="biography">Biography</p>
              <p>As Chief Executive Officer of CoreG, Mr. Morgan is responsible for the Firm&apos;s strategic direction, institutional growth, executive operations, and capital markets governance strategy.</p>
              <p>He brings more than 30 years of executive leadership experience across highly regulated, multi-stakeholder operating environments where operational precision, institutional accountability, and disciplined execution were fundamental to mission success. His background spans federal contracting, National Intelligence and defense programs, and multi-entity business operations. Throughout his career, he has led complex organizations through environments that demanded rigorous governance, verifiable standards, and the ability to deliver under the highest levels of institutional scrutiny.</p>
              <p>At CoreG, he guides the Firm&apos;s capital markets and governance strategy while leading its institutional growth and executive operations. His focus is advancing a governance-first operating model that strengthens trust, verification, operational integrity, and institutional accountability across private capital markets.</p>
              <p>He believes private capital markets should operate to the same institutional standards expected throughout the broader financial system. Under his leadership, CoreG is establishing a more transparent and accountable environment for capital formation—one where governance, verification, and operational integrity are embedded into the way institutions operate and investors engage with the market.</p>
            </section>

            <blockquote className="leadership-quote">
              <p>Private capital markets perform best when trust is not assumed—it is continuously verified through governance, transparency, and institutional accountability.</p>
            </blockquote>
          </div>
        </section>

        <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
          <div className="max-w-[600px] mx-auto">
            <h2 className="font-display text-2xl font-medium text-navy mb-4">Engage with CoreG</h2>
            <p className="text-[15px] text-slate mb-8">Institutional participation begins with a structured access request.</p>
            <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded">Request Access</ComingSoonButton>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
