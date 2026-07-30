import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

const SECTIONS = [
  { number: "01", title: "Thought Leadership", body: "Perspectives on verification, governance, institutional trust, and the evolution of private capital markets.", status: "Publications will be added as they are released." },
  { number: "02", title: "Announcements", body: "Material company developments, institutional milestones, and official CoreG notices.", status: "Official updates will be maintained here." },
  { number: "03", title: "Platform Updates", body: "Release notices and material changes affecting the CoreG operating environment and participant access.", status: "Enhancement notices will be published here." },
];

export default function Insights() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="bg-navy px-5 sm:px-8 pt-20 pb-16 text-center">
          <div className="max-w-[780px] mx-auto">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Insights</div>
            <h1 className="font-display text-[clamp(34px,5vw,54px)] font-medium leading-[1.1] text-white mb-6 text-balance">Institutional perspectives, updates, and answers.</h1>
            <p className="text-lg text-ice/85 max-w-[650px] mx-auto leading-relaxed">A focused source for CoreG thought leadership, company announcements, platform updates, and frequently asked questions.</p>
          </div>
        </section>

        <section className="bg-white px-5 sm:px-8 py-20">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid border-l border-t border-[#DCE3EC] md:grid-cols-2">
              {SECTIONS.map((item) => (
                <article key={item.title} className="border-r border-b border-[#DCE3EC] p-7 sm:p-9 min-h-[280px] flex flex-col">
                  <span className="font-mono text-[11px] text-slateLt mb-8">{item.number}</span>
                  <h2 className="font-display text-[27px] font-medium text-navy mb-3">{item.title}</h2>
                  <p className="text-[15px] text-slate leading-[1.75] mb-8 flex-1">{item.body}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-slateLt">{item.status}</p>
                </article>
              ))}
              <Link to="/insights/faq" className="group border-r border-b border-gold/45 bg-mist p-7 sm:p-9 min-h-[280px] flex flex-col hover:bg-white transition-colors">
                <span className="font-mono text-[11px] text-gold mb-8">04</span>
                <h2 className="font-display text-[27px] font-medium text-navy mb-3">Frequently Asked Questions</h2>
                <p className="text-[15px] text-slate leading-[1.75] mb-8 flex-1">Straight answers about private capital markets, participant roles, digital assets, verification, and the CoreG process.</p>
                <span className="text-sm font-semibold text-navy">Read the FAQ <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
