import coreIdentityIcon from "../assets/coreidentity-icon.png";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { GOVERNANCE_FUNCTIONS, GOVERNANCE_STANDARDS } from "../data/governanceContent.js";

export default function Governance() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Governance &amp; Compliance</div>
          <h1 className="font-display text-[clamp(34px,5vw,58px)] font-medium leading-[1.1] text-white mb-6">
            Governance that holds throughout the transaction.
          </h1>
          <p className="text-lg text-ice/85 max-w-[660px] mx-auto leading-relaxed">
            CoreG operates under a governed standard designed to ensure that identity, authority, documentation, assets, and material claims are evaluated before a transaction advances.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">The Operating Principle</div>
          <h2 className="font-display text-[30px] sm:text-[34px] font-medium text-navy mb-6 leading-tight">
            Verification only matters when it cannot be bypassed under pressure.
          </h2>
          <p className="text-[15px] text-slate leading-[1.8] mb-4">
            Private capital transactions can involve multiple principals, representatives, institutions, documents, assets, and jurisdictions. CoreG applies a structured governance process so material requirements are addressed as part of the transaction—not reconstructed after the fact.
          </p>
          <p className="text-[15px] text-slate leading-[1.8]">
            The standard applies across participant types and asset classes. The specific evidence required may vary, but the responsibility to establish a defensible transaction record does not.
          </p>
        </div>
      </section>

      <section className="bg-navyCard px-8 py-16 border-y border-navyLine">
        <div className="max-w-[1080px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3 text-center">Governance Functions</div>
          <h2 className="font-display text-[30px] font-medium text-white mb-10 text-center leading-tight">
            Eleven specialized agents operating across four functions.
          </h2>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {GOVERNANCE_FUNCTIONS.map((item) => (
              <div key={item.label} className="bg-navy border border-navyLine rounded-lg p-6">
                <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                <div className="font-mono text-xs text-gold uppercase tracking-wide mb-3">
                  {item.count} agent{item.count !== 1 ? "s" : ""}
                </div>
                <p className="text-[13px] text-slateLt leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3 text-center">How the Standard Is Applied</div>
          <h2 className="font-display text-[30px] font-medium text-navy mb-14 text-center leading-tight">
            Four controls supporting one transaction record.
          </h2>
          <div className="space-y-10">
            {GOVERNANCE_STANDARDS.map((item, index) => (
              <div key={item.label} className="flex gap-6">
                <div className="flex-none">
                  <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center font-display text-gold font-medium">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{item.label}</h3>
                  <p className="text-[15px] text-slate leading-[1.75]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-8 py-16 border-t border-[#E2E8F0]">
        <div className="max-w-[740px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full pl-3 pr-5 py-2.5 mb-6">
            <img src={coreIdentityIcon} alt="CoreIdentity" className="h-7 w-auto" />
            <span className="text-[13px] text-slate">Governed by</span>
            <span className="text-[13px] text-navy font-semibold">CoreIdentity Technologies</span>
          </div>
          <p className="text-[15px] text-slate leading-relaxed">
            CoreG is the private capital markets intermediary. CoreIdentity Technologies owns and operates the Trust Infrastructure and Autonomous Execution Governance capabilities under which CoreG conducts governed transaction activity.
          </p>
        </div>
      </section>

      <section className="bg-navy px-8 py-20 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-display text-[28px] font-medium text-white mb-4">Understand the standard applied to your transaction.</h2>
          <p className="text-[15px] text-ice/80 mb-8">
            Access is by request. CoreG will confirm fit, participant requirements, and the verification standards applicable to the proposed transaction.
          </p>
          <ComingSoonButton className="inline-block bg-gold text-navy text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
