import coreIdentityIcon from "../assets/coreidentity-icon.png";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";

export default function Company() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      {/* HERO — mission/thesis. Leadership now lives on its own page. */}
      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Our Firm</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,50px)] font-medium leading-[1.15] text-white mb-6">
            Private capital markets, held to the standard they should have had from the start.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto leading-relaxed">
            CoreG exists because verification that can be skipped under pressure isn't
            verification — it's a liability waiting for the wrong moment to surface.
          </p>
        </div>
      </section>

      {/* MISSION (narrative) — unchanged from original build. */}
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

      {/* MISSION / VISION / PURPOSE — new, finalized content. Kept as short,
          clearly-labeled statements, matching the confirmed institutional
          convention (Smith Capital Investors: short, separately-labeled
          Mission/Vision, distinct from any individual bio). */}
      <section className="bg-mist px-8 py-20 border-t border-[#E2E8F0]">
        <div className="max-w-[820px] mx-auto space-y-12">
          <div>
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">Our Mission</div>
            <p className="text-[17px] text-navy leading-[1.7] font-medium">
              To establish trust as an operational standard in private capital markets by
              independently governing identity, verification, due diligence, compliance,
              and transaction execution — ensuring every material claim is verifiable
              before capital moves.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">Our Vision</div>
            <p className="text-[17px] text-navy leading-[1.7] font-medium">
              To become the institutional trust layer for private capital markets, making
              independently verifiable transactions the global standard for the movement
              of private capital.
            </p>
          </div>
          <div className="border-t border-[#E2E8F0] pt-10 text-center">
            <p className="font-display text-[22px] sm:text-[26px] font-medium text-navy leading-snug">
              Capital should never move faster than truth.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-white px-8 py-16 text-center border-t border-[#E2E8F0]">
        <div className="max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-3 bg-mist border border-[#E2E8F0] rounded-full pl-3 pr-5 py-2.5 mb-8">
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
