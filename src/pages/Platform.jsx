import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import PipelineBar from "../components/PipelineBar.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { PLATFORM_SECTIONS } from "../data/platformContent.js";

export default function Platform() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <section className="bg-navy px-8 pt-20 pb-14">
        <div className="max-w-[880px] mx-auto text-center">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">The Platform</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.12] text-white mb-6">
            One transaction process.<br/>Governed from intake through close.
          </h1>
          <p className="text-lg text-ice/85 max-w-[640px] mx-auto leading-relaxed">
            CoreG facilitates qualifying transactions through a structured, stage-gated process. Each stage addresses a distinct transaction requirement while preserving one continuous, auditable record.
          </p>
        </div>
      </section>

      <section className="bg-navy px-8 pb-16 border-b border-navyLine">
        <div className="max-w-[880px] mx-auto"><PipelineBar /></div>
      </section>

      {PLATFORM_SECTIONS.map((section, i) => (
        <section key={section.id} id={section.id} className={i % 2 === 0 ? "bg-white px-8 py-20" : "bg-mist px-8 py-20"}>
          <div className="max-w-[760px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-navy/40 tracking-[0.1em]">0{i + 1}</span>
              <div className="h-px flex-1 bg-[#E2E8F0]" />
              <div className="flex gap-1.5">
                {section.stages.map((s) => (
                  <span key={s} className="font-mono text-[10px] text-gold bg-navy/5 border border-gold/30 rounded-full px-2 py-0.5 whitespace-nowrap">{s}</span>
                ))}
              </div>
            </div>
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">{section.eyebrow}</div>
            <h2 className="font-display text-[28px] sm:text-[32px] font-medium text-navy mb-6 leading-tight">{section.title}</h2>
            {section.paragraphs.map((p, pi) => (
              <p key={pi} className="text-[15px] text-slate leading-[1.75] mb-4 last:mb-0">{p}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-navy px-8 py-20 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="font-display text-[28px] font-medium text-white mb-4">Discuss a qualifying transaction.</h2>
          <p className="text-[15px] text-ice/80 mb-8">
            Access is by request. Tell us what you are moving, your role in the transaction, and the relevant counterparties. CoreG will confirm fit before the process begins.
          </p>
          <ComingSoonButton className="inline-block bg-gold text-navy text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
