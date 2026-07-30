import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import RelatedPages from "../components/RelatedPages.jsx";
import executivePortrait from "../assets/todd-morgan-executive.jpg";

export default function Leadership() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="bg-navy px-5 sm:px-8 pt-20 pb-16 text-center">
          <div className="max-w-[800px] mx-auto">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Leadership</div>
            <h1 className="font-display text-[clamp(34px,5vw,56px)] font-medium leading-[1.1] text-white mb-6 text-balance">The leadership accountable for holding the standard.</h1>
            <p className="text-lg text-ice/85 max-w-[650px] mx-auto leading-relaxed">Institutional governance is only as credible as the leadership responsible for enforcing it.</p>
          </div>
        </section>

        <section className="bg-white px-5 sm:px-8 py-20">
          <div className="max-w-[1080px] mx-auto grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden bg-navy border border-[#DCE3EC] rounded-sm">
                <img src={executivePortrait} alt="Todd Morgan, Chief Executive Officer of CoreG" className="w-full aspect-square object-cover object-top" />
              </div>
              <div className="border-x border-b border-[#DCE3EC] px-6 py-5">
                <div className="font-mono text-[10px] tracking-[0.12em] text-gold uppercase mb-2">Chief Executive Officer</div>
                <h2 className="font-display text-[30px] font-medium text-navy">Todd Morgan</h2>
              </div>
            </div>

            <article>
              <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-4">Executive Biography</div>
              <div className="space-y-6 text-[16px] text-slate leading-[1.85]">
                <p>Todd Morgan brings more than 30 years of executive leadership experience across highly regulated, multi-stakeholder operating environments where operational precision, institutional accountability, and disciplined execution were fundamental to mission success. Throughout his career, he has led complex organizations, directed mission-critical programs exceeding $100 million, and built governance frameworks designed to operate reliably in environments where failure was not an acceptable outcome.</p>
                <p>He is the architect of the Trust Infrastructure discipline and the Autonomous Execution Governance doctrine, establishing the governance principles and institutional trust model that enable autonomous execution at enterprise scale.</p>
                <p>As Chief Executive Officer of CoreG, Mr. Morgan guides the Firm's capital markets and governance strategy, growth, and operations while overseeing the development of its executive leadership team and Board of Directors. His focus is building the institutional infrastructure required to bring verifiable governance, operational integrity, and accountability to the next generation of AI-enabled private capital markets.</p>
                <p>Under his leadership, CoreG operates on a single governing principle: verification only matters when it holds under pressure. Every material action progresses through defined governance controls that produce contemporaneous, auditable evidence before advancing. That operating discipline establishes the trust, transparency, and institutional confidence upon which the Firm is built.</p>
              </div>
              <div className="mt-9 pt-8 border-t border-[#DCE3EC]">
                <Link to="/contact" className="inline-flex bg-navy text-white text-[15px] font-semibold px-7 py-3.5 rounded-sm">Contact CoreG</Link>
              </div>
            </article>
          </div>
        </section>

        <RelatedPages title="Continue through the CoreG institution." pages={[
          { title: "Who We Are", body: "Understand CoreG's role and institutional responsibility.", path: "/who-we-are", action: "Discover CoreG" },
          { title: "How We Work", body: "Follow the governed eight-stage transaction process.", path: "/how-we-work", action: "Explore the process" },
          { title: "About", body: "Read CoreG's mission, vision, and institutional architecture.", path: "/about", action: "About CoreG" },
        ]} />
      </main>
      <PageFooter />
    </div>
  );
}
