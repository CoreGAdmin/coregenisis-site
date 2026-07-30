import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import RelatedPages from "../components/RelatedPages.jsx";
import { SERVES } from "../data/content.js";

export default function WhoWeAre() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="bg-navy px-5 sm:px-8 pt-20 pb-16 text-center">
          <div className="max-w-[800px] mx-auto">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Who We Are</div>
            <h1 className="font-display text-[clamp(34px,5vw,56px)] font-medium leading-[1.1] text-white mb-6 text-balance">An authorized intermediary serving private capital markets.</h1>
            <p className="text-lg text-ice/85 max-w-[680px] mx-auto leading-relaxed">CoreG facilitates qualifying private capital transactions through a disciplined operating standard built to ensure confidence, integrity, and accountability from first engagement through close.</p>
          </div>
        </section>

        <section className="bg-white px-5 sm:px-8 py-20">
          <div className="max-w-[960px] mx-auto grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-3">Institutional Role</div>
              <h2 className="font-display text-[30px] sm:text-[38px] font-medium text-navy leading-tight">Responsibility beyond transaction execution.</h2>
            </div>
            <div className="space-y-6 text-[16px] text-slate leading-[1.8]">
              <p>CoreG serves institutional and qualified participants across private capital markets. We facilitate transactions without originating the assets, instruments, or investment opportunities that enter our process.</p>
              <p>Our responsibility extends beyond bringing parties and opportunities into contact. CoreG applies structured verification, documentation, due diligence, and transaction oversight so that identities, credentials, authority, assets, and material claims are addressed before a transaction advances.</p>
              <p>The standard is intentionally consistent. Commercial urgency does not create a separate pathway around verification, and participation does not convert an unsupported claim into an accepted fact.</p>
            </div>
          </div>
        </section>

        <section className="bg-mist px-5 sm:px-8 py-20 border-y border-[#E2E8F0]">
          <div className="max-w-[1080px] mx-auto">
            <div className="max-w-[700px] mb-12">
              <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-3">Participants We Serve</div>
              <h2 className="font-display text-[30px] sm:text-[38px] font-medium text-navy mb-4">One standard across the private capital ecosystem.</h2>
              <p className="text-[16px] text-slate leading-[1.8]">Each participant enters with a different role and responsibility. Every qualifying engagement is nevertheless held to the same operating expectation: material claims must be supported before capital or authority moves.</p>
            </div>
            <div className="grid border-l border-t border-[#DCE3EC] md:grid-cols-2">
              {SERVES.map((item) => (
                <article key={item.label} className="bg-white border-r border-b border-[#DCE3EC] p-7 sm:p-8">
                  <h3 className="font-display text-2xl font-medium text-navy mb-3">{item.label}</h3>
                  <p className="text-[15px] text-slate leading-[1.75]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages title="See how CoreG puts the standard into operation." pages={[
          { title: "How We Work", body: "Follow the eight-stage process from intake through completion.", path: "/how-we-work", action: "Explore the process" },
          { title: "About", body: "Read CoreG's mission, vision, governance relationship, and institutional purpose.", path: "/about", action: "About CoreG" },
          { title: "Leadership", body: "Meet the executive leadership accountable for strategy and institutional standards.", path: "/leadership", action: "Meet leadership" },
        ]} />
      </main>
      <PageFooter />
    </div>
  );
}
