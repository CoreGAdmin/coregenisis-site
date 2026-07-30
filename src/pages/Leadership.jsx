import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";

export default function Leadership() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Leadership</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,50px)] font-medium leading-[1.15] text-white mb-6">
            The people responsible for holding the standard.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto leading-relaxed">
            Governance is only as credible as the people accountable for enforcing it.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="max-w-[720px] mx-auto">
          <div className="bg-mist border border-[#E2E8F0] rounded-lg p-8">
            <div className="mb-1 text-xs font-mono text-gold uppercase tracking-wide">Chief Executive Officer</div>
            <h2 className="font-display text-2xl font-medium text-navy mb-4">Todd Morgan</h2>
            <p className="text-[15px] text-slate leading-[1.75] mb-4">
              Todd Morgan brings more than 30 years of executive leadership experience
              across highly regulated, multi-stakeholder operating environments where
              operational precision, institutional accountability, and disciplined
              execution were fundamental to mission success. Throughout his career, he has
              led complex organizations, directed mission-critical programs exceeding $100
              million, and built governance frameworks designed to operate reliably in
              environments where failure was not an acceptable outcome.
            </p>
            <p className="text-[15px] text-slate leading-[1.75] mb-4">
              He is the architect of the Trust Infrastructure discipline and the
              Autonomous Execution Governance (AEG) doctrine, establishing the governance
              principles and institutional trust model that enable autonomous execution at
              enterprise scale.
            </p>
            <p className="text-[15px] text-slate leading-[1.75] mb-4">
              As Chief Executive Officer and Chairman of the Board of CoreG, Mr. Morgan
              leads the Firm's strategic direction, growth, and day-to-day operations while
              overseeing the development of its executive leadership team and Board of
              Directors. His focus is building the institutional infrastructure required to
              bring verifiable governance, operational integrity, and accountability to the
              next generation of AI-enabled private capital markets.
            </p>
            <p className="text-[15px] text-slate leading-[1.75]">
              Under his leadership, CoreG operates on a single governing principle:
              verification only matters when it holds under pressure. When critical
              standards can be bypassed, they become liabilities waiting to surface. Every material
              action progresses through defined governance controls that produce
              contemporaneous, auditable evidence before advancing. That operating
              discipline establishes the trust, transparency, and institutional confidence
              upon which the Firm is built.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-display text-2xl font-medium text-navy mb-4">Questions about how we operate?</h2>
          <p className="text-[15px] text-slate mb-8">
            Access is by request. We're glad to walk through how the pipeline actually works.
          </p>
          <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
