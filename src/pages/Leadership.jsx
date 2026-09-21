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
              <div className="leadership-heading">
                <p className="leadership-eyebrow">President &amp; Chief Executive Officer</p>
                <h1>Todd Morgan</h1>
                <div className="leadership-rule" aria-hidden="true" />
              </div>

              <div className="leadership-profile-row">
                <div className="leadership-portrait-wrap">
                  <img className="leadership-portrait" src={executivePortrait}
                    alt="Todd Morgan, President &amp; Chief Executive Officer of CoreG" width="1536" height="1536" />
                </div>

                <div className="leadership-summary">
                  <p className="leadership-summary-label">Leadership Summary</p>
                  <p className="leadership-intro">
                    Leads CoreG’s strategy, business development, institutional relationships, and executive operations, with a focus on accountable due-diligence coordination and transaction support.
                  </p>
                </div>
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
              <p>Todd Morgan is President &amp; Chief Executive Officer of CoreG. He leads the company’s strategic direction, business development, institutional relationships, and executive operations, with responsibility for building a disciplined approach to due-diligence coordination and transaction support.</p>
              <p>His career spans more than 30 years and includes federal contracting, support to the National Intelligence Community and the Department of Defense, and multi-entity business operations. His experience includes managing a multi-million-dollar portfolio of federal contracts in environments where accountability, documentation, and disciplined execution are essential.</p>
              <p>At CoreG, he applies that experience to organizational development, participant accountability, and the coordination of professional expertise. His priorities include establishing clear responsibilities, evaluating transaction readiness, and developing the governance and technology needed to support a consistent operating process.</p>
              <p>He is focused on building CoreG for long-term institutional credibility: material claims supported by evidence, clearly defined professional roles, and business decisions informed by independent legal, financial, and technical review.</p>

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
