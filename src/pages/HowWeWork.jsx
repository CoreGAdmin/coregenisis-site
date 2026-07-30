import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import PipelineBar from "../components/PipelineBar.jsx";
import RelatedPages from "../components/RelatedPages.jsx";
import { PROCESS_STAGES, OPERATING_PRINCIPLES } from "../data/processContent.js";

export default function HowWeWork() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="bg-navy px-5 sm:px-8 pt-20 pb-14 text-center">
          <div className="max-w-[860px] mx-auto">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">How We Work</div>
            <h1 className="font-display text-[clamp(34px,5vw,56px)] font-medium leading-[1.1] text-white mb-6 text-balance">A disciplined transaction process from first engagement through completion.</h1>
            <p className="text-lg text-ice/85 max-w-[700px] mx-auto leading-relaxed">Every qualifying transaction progresses through eight defined stages. Each stage has one responsibility, produces its own record, and must satisfy its requirements before the next stage can open.</p>
          </div>
        </section>
        <section className="bg-navy px-5 sm:px-8 pb-16 border-b border-navyLine"><div className="max-w-[920px] mx-auto"><PipelineBar /></div></section>

        <section className="bg-white px-5 sm:px-8 py-20">
          <div className="max-w-[1040px] mx-auto">
            <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 mb-14">
              <div>
                <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-3">The Operating Model</div>
                <h2 className="font-display text-[30px] sm:text-[38px] font-medium text-navy leading-tight">Eight stages. One governed record.</h2>
              </div>
              <p className="text-[16px] text-slate leading-[1.8] lg:pt-6">The process is designed to prevent unresolved questions about identity, authority, assets, valuation, structure, and execution from being carried forward as hidden transaction risk.</p>
            </div>
            <div className="border-t border-[#DCE3EC]">
              {PROCESS_STAGES.map((stage) => (
                <article key={stage.number} className="grid gap-4 border-b border-[#DCE3EC] py-8 md:grid-cols-[80px_0.75fr_1.25fr] md:gap-8">
                  <div className="font-mono text-xs text-gold">{stage.number}</div>
                  <div>
                    <h3 className="font-display text-[25px] font-medium text-navy mb-3">{stage.name}</h3>
                    <p className="text-[15px] text-slate leading-[1.75]">{stage.purpose}</p>
                  </div>
                  <div className="md:border-l md:border-[#DCE3EC] md:pl-8">
                    <div className="font-mono text-[10px] tracking-[0.12em] text-slateLt uppercase mb-2">Advancement Standard</div>
                    <p className="text-[14px] text-navy leading-[1.75] font-medium">{stage.gate}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-5 sm:px-8 py-20">
          <div className="max-w-[1040px] mx-auto">
            <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-3">Operating Principles</div>
            <h2 className="font-display text-[30px] sm:text-[38px] font-medium text-white mb-12">What holds the process together.</h2>
            <div className="grid gap-px bg-white/15 md:grid-cols-2">
              {OPERATING_PRINCIPLES.map((item) => (
                <article key={item.title} className="bg-navy p-7 sm:p-9">
                  <h3 className="font-display text-2xl font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-[15px] text-ice/75 leading-[1.75]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages title="Understand the institution behind the process." pages={[
          { title: "Who We Are", body: "Understand CoreG's role and responsibility in private capital markets.", path: "/who-we-are", action: "Discover CoreG" },
          { title: "Platform", body: "See how the operating environment supports the governed transaction record.", path: "/platform", action: "View the platform" },
          { title: "Contact", body: "Begin a direct conversation regarding a qualifying transaction or institutional relationship.", path: "/contact", action: "Contact CoreG" },
        ]} />
      </main>
      <PageFooter />
    </div>
  );
}
