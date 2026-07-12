import coreIdentityIcon from "../assets/coreidentity-icon.png";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";

export default function Company() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      {/* HERO — mission/thesis. Leadership section below names the CEO. */}
      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Company</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,50px)] font-medium leading-[1.15] text-white mb-6">
            Private capital markets, held to the standard they should have had from the start.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto leading-relaxed">
            CoreG exists because verification that can be skipped under pressure isn't
            verification — it's a liability waiting for the wrong moment to surface.
          </p>
        </div>
      </section>

      {/* MISSION — unchanged. */}
      <section className="bg-white px-8 py-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[16px] text-slate leading-[1.8] mb-6">
            Most private capital markets infrastructure treats compliance as a step that
            happens alongside a transaction — checked, filed, and moved past. CoreG treats
            it as the thing the transaction is built on top of. Every stage of a governed
            pipeline exists because the stage before it cleared, not because someone signed
            off that it probably did.
          </p>
          <p className="text-[16px] text-slate leading-[1.8] mb-6">
            That standard doesn't come from CoreG alone. The enforcement layer described
            throughout this site — the eleven agents, the cryptographic proof packs, the
            hard gates that can't be bypassed — runs on infrastructure built and governed
            by CoreIdentity, a company built specifically to hold autonomous systems to a
            provable standard rather than an assumed one. CoreG is what that infrastructure
            looks like applied to private capital markets.
          </p>
          <p className="text-[16px] text-slate leading-[1.8]">
            We don't set our own bar. The regulatory environment our clients operate in
            does. We build to that bar, plus a level of margin — because the cost of being
            wrong about compliance is never symmetric with the cost of being careful.
          </p>
        </div>
      </section>

      {/* LEADERSHIP — finalized bio, provided verbatim, 3 paragraphs. */}
      <section className="bg-mist px-8 py-20 border-t border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-8">Leadership</div>
          <div className="bg-white border border-[#E2E8F0] rounded-lg p-8">
            <div className="mb-1 text-xs font-mono text-gold uppercase tracking-wide">Chief Executive Officer</div>
            <h2 className="font-display text-2xl font-medium text-navy mb-4">Todd Morgan</h2>
            <p className="text-[15px] text-slate leading-[1.75] mb-4">
              Todd Morgan serves as Chief Executive Officer and Chairman of the Board of
              CoreG, where he leads the Firm's strategy, growth, and execution. He is
              responsible for advancing CoreG's long-term vision, building its executive
              leadership team, and establishing a new standard for private capital markets
              infrastructure.
            </p>
            <p className="text-[15px] text-slate leading-[1.75] mb-4">
              Mr. Morgan brings executive leadership experience spanning federal
              contracting, National Intelligence and defense programs, and multi-entity
              business operations. Throughout his career, he has operated in complex,
              high-accountability environments where trust, verification, governance, and
              disciplined execution are essential to mission success. These experiences
              shaped his approach to building institutional frameworks designed to create
              greater transparency, accountability, and confidence in critical
              decision-making environments.
            </p>
            <p className="text-[15px] text-slate leading-[1.75]">
              Under his leadership, CoreG is redefining private capital markets
              infrastructure by embedding verification, governance, and accountability as
              foundational elements of every transaction. CoreG was built on the principle
              that verification only matters when it holds under pressure. When critical
              standards can be bypassed, they become liabilities waiting to surface. By
              establishing enforceable standards throughout the investment lifecycle, CoreG
              enables investors, enterprises, and market participants to operate with
              greater confidence, transparency, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
        <div className="max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full pl-3 pr-5 py-2.5 mb-8">
            <img src={coreIdentityIcon} alt="CoreIdentity" className="h-7 w-auto" />
            <span className="text-[13px] text-slate">Governed by</span>
            <span className="text-[13px] text-navy font-semibold">CoreIdentity</span>
          </div>
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
