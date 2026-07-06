import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import PipelineBar from "../components/PipelineBar.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { CAPABILITIES, SERVES } from "../data/content.js";

export default function Home() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <section className="bg-navy px-8 pt-24 pb-18">
        <div className="max-w-[880px] mx-auto text-center">
          <span className="inline-block font-mono text-xs tracking-[0.12em] text-gold uppercase
                           border border-gold rounded-full px-4 py-1.5 mb-7">
            Private Capital Markets — Governed
          </span>
          <h1 className="font-display text-[clamp(36px,5.5vw,64px)] font-medium leading-[1.08] text-white mb-6">
            Every stage of the transaction,<br/>verified before it moves.
          </h1>
          <p className="text-lg text-ice/85 max-w-[620px] mx-auto mb-11 leading-relaxed">
            CoreG governs the full lifecycle of high-value asset transactions —
            onboarding through reporting — with no stage that can be bypassed.
          </p>
          <div className="max-w-[880px] mx-auto mt-8"><PipelineBar /></div>
        </div>
      </section>

      <section className="bg-mist px-8 py-[88px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="max-w-[560px] mb-14">
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">The Platform</div>
            <h2 className="font-display text-[34px] font-medium text-navy leading-tight m-0">
              One governed pipeline, from first contact to close.
            </h2>
          </div>
          <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="bg-white border border-[#E2E8F0] rounded-lg px-6 py-7">
                <div className="font-mono text-xs text-gold mb-3.5">●</div>
                <div className="text-base font-semibold text-navy mb-2.5">{c.label}</div>
                <div className="text-sm text-slate leading-relaxed">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-8 py-[88px]">
        <div className="max-w-[1080px] mx-auto flex flex-wrap gap-12 items-start">
          <div className="flex-1 min-w-[360px]">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">Governance & Compliance</div>
            <h2 className="font-display text-[32px] font-medium text-white mb-5 leading-tight">
              Eleven agents. Zero silent exceptions.
            </h2>
            <p className="text-[15px] text-ice/85 leading-[1.7] mb-7">
              Eleven specialized agents enforce compliance gates at every stage — screening
              for sanctioned parties, verifying documentation, and producing a cryptographic
              proof pack for every decision made. No stage advances on a silent pass.
            </p>
          </div>
          <div className="flex-1 min-w-[300px] grid gap-3.5">
            {[
              ["OFAC / Sanctions Screening", "Every party screened before advancement."],
              ["Document Verification", "Submitted records checked against required standard."],
              ["Cryptographic Proof Pack", "Every decision produces a signed, auditable record."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-gold pl-4">
                <div className="text-sm font-semibold text-white mb-1">{t}</div>
                <div className="text-[13px] text-slateLt leading-snug">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-[88px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">Who We Serve</div>
          <div className="grid gap-10 mt-8 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {SERVES.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[22px] font-medium text-navy mb-2.5">{s.label}</div>
                <div className="text-sm text-slate leading-relaxed">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-8 py-18 border-t border-[#E2E8F0]">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-display text-[28px] font-medium text-navy mb-4">Bring us your next transaction.</h2>
          <p className="text-[15px] text-slate mb-8">
            Access is by request. Tell us what you're moving and we'll confirm fit before anything else.
          </p>
          <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
