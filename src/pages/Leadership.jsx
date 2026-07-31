import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import executivePortrait from "../assets/todd-morgan-leadership.jpg";

const focusAreas = [
  {
    title: "Institutional Governance",
    description: "Governance structures designed to hold under institutional scrutiny.",
  },
  {
    title: "Operational Integrity",
    description: "Disciplined execution supported by accountable operating controls.",
  },
  {
    title: "Risk & Compliance Infrastructure",
    description: "Verifiable standards embedded directly into transaction operations.",
  },
  {
    title: "Strategic Growth & Partnerships",
    description: "Institutional growth aligned with durable market confidence.",
  },
];

export default function Leadership() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <main>
        <section className="leadership-page">
          <div className="leadership-shell">
            <nav className="leadership-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Leadership</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Todd Morgan</span>
            </nav>

            <article className="leadership-identity-card">
              <div className="leadership-portrait-wrap">
                <img
                  className="leadership-portrait"
                  src={executivePortrait}
                  alt="Todd Morgan, Chief Executive Officer of CoreG"
                  width="1536"
                  height="1536"
                />
              </div>

              <div className="leadership-summary">
                <p className="leadership-eyebrow">Chief Executive Officer</p>
                <h1>Todd Morgan</h1>
                <div className="leadership-rule" aria-hidden="true" />
                <p className="leadership-intro">
                  Todd Morgan leads CoreG&apos;s strategy, growth, and operational
                  execution as the Firm builds the institutional infrastructure layer
                  for the next generation of private capital markets.
                </p>
              </div>
            </article>

            <section className="leadership-biography" aria-labelledby="executive-biography">
              <p className="leadership-section-label" id="executive-biography">
                Executive Biography
              </p>

              <p>
                Todd Morgan brings more than 30 years of executive leadership
                experience across highly regulated, multi-stakeholder operating
                environments where operational precision, institutional
                accountability, and disciplined execution were fundamental to
                mission success.
              </p>

              <p>
                His background spans federal contracting, National Intelligence and
                defense programs, and multi-entity business operations. In these
                roles, he has led complex organizations through environments that
                demanded rigorous governance, verifiable standards, and the ability
                to deliver under the highest levels of scrutiny.
              </p>

              <p>
                At CoreG, Mr. Morgan guides the Firm&apos;s capital markets and
                governance strategy while leading its growth and operational
                execution. His focus is creating a private capital markets ecosystem
                where trust is built into the infrastructure—providing verifiable
                outcomes, operational integrity, and a governance standard that
                institutions can rely on.
              </p>
            </section>

            <section className="leadership-focus" aria-labelledby="areas-of-focus">
              <p className="leadership-section-label" id="areas-of-focus">
                Areas of Focus
              </p>
              <div className="leadership-focus-grid">
                {focusAreas.map((area) => (
                  <article className="leadership-focus-item" key={area.title}>
                    <h2>{area.title}</h2>
                    <p>{area.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <blockquote className="leadership-quote">
              <p>
                Verification that can be bypassed under pressure is not
                verification—it is an unresolved liability.
              </p>
              <footer>— Todd Morgan</footer>
            </blockquote>
          </div>
        </section>

        <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
          <div className="max-w-[600px] mx-auto">
            <h2 className="font-display text-2xl font-medium text-navy mb-4">
              Questions about how we operate?
            </h2>
            <p className="text-[15px] text-slate mb-8">
              Access is by request. We&apos;re glad to walk through how the
              pipeline actually works.
            </p>
            <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">
              Request Access
            </ComingSoonButton>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}

