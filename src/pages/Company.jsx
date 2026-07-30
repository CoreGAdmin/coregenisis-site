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
            An authorized intermediary built for confidence, integrity, and accountability.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto leading-relaxed">
            CoreG serves private capital markets through a disciplined operating standard designed to strengthen the integrity of every engagement.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[16px] text-slate leading-[1.8] mb-6">
            CoreG is an authorized intermediary serving institutional and qualified participants across private capital markets. We facilitate transactions without originating the assets, instruments, or investment opportunities that enter our process.
          </p>
          <p className="text-[16px] text-slate leading-[1.8] mb-6">
            Our responsibility extends beyond transaction execution. CoreG applies structured verification, documentation, due diligence, and transaction oversight so that identities, authority, assets, and material claims are addressed before a transaction advances.
          </p>
          <p className="text-[16px] text-slate leading-[1.8]">
            CoreG is governed by Trust Infrastructure and Autonomous Execution Governance provided by CoreIdentity Technologies. That relationship strengthens how CoreG operates while preserving a clear distinction: CoreG is the intermediary; CoreIdentity owns and operates the governance infrastructure beneath it.
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
              To facilitate private capital transactions with confidence, integrity, and accountability by applying a consistent standard of verification, documentation, due diligence, and transaction oversight.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">Our Vision</div>
            <p className="text-[17px] text-navy leading-[1.7] font-medium">
              To become the authorized intermediary private capital market participants rely on when transaction integrity, accountability, and verifiable execution matter most.
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
