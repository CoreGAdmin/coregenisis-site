import coreIdentityIcon from "../assets/coreidentity-icon.png";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { AGENT_CATEGORIES, MECHANISMS } from "../data/governanceContent.js";

export default function Governance() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Governance & Compliance</div>
          <h1 className="font-display text-[clamp(34px,5vw,58px)] font-medium leading-[1.1] text-white mb-6">
            Eleven agents. Zero silent exceptions.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto leading-relaxed">
            No other private capital markets platform enforces compliance the way CoreG does:
            eleven specialized agents, holding every gate, producing a record for every decision —
            whether or not anyone ever asks to see it.
          </p>
        </div>
      </section>

      <section className="bg-navyCard px-8 py-16 border-y border-navyLine">
        <div className="max-w-[1080px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-8 text-center">Eleven Agents, Four Functions</div>
          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {AGENT_CATEGORIES.map((cat) => (
              <div key={cat.label} className="bg-navy border border-navyLine rounded-lg p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-3xl font-medium text-gold">{cat.count}</span>
                  <span className="text-sm font-semibold text-white">{cat.label}</span>
                </div>
                <p className="text-[13px] text-slateLt leading-relaxed">{cat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3 text-center">How Enforcement Actually Works</div>
          <h2 className="font-display text-[30px] font-medium text-navy mb-14 text-center leading-tight">
            Three mechanisms. No exceptions to any of them.
          </h2>
          <div className="space-y-10">
            {MECHANISMS.map((m, i) => (
              <div key={m.label} className="flex gap-6">
                <div className="flex-none">
                  <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center font-display text-gold font-medium">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{m.label}</h3>
                  <p className="text-[15px] text-slate leading-[1.75]">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-8 py-16 border-t border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full pl-3 pr-5 py-2.5 mb-6">
            <img src={coreIdentityIcon} alt="CoreIdentity" className="h-7 w-auto" />
            <span className="text-[13px] text-slate">Governed by</span>
            <span className="text-[13px] text-navy font-semibold">CoreIdentity</span>
          </div>
          <p className="text-[15px] text-slate leading-relaxed">
            The enforcement layer described on this page isn't a feature CoreG built —
            it's infrastructure CoreG runs on, governed by CoreIdentity's control plane.
          </p>
        </div>
      </section>

      <section className="bg-navy px-8 py-20 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-display text-[28px] font-medium text-white mb-4">Ask us what gets checked, and when.</h2>
          <p className="text-[15px] text-ice/80 mb-8">
            Access is by request. We'll walk through exactly which gates apply to what you're moving.
          </p>
          <ComingSoonButton className="inline-block bg-gold text-navy text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
