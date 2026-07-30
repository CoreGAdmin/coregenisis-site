import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { SERVES } from "../data/content.js";

export default function WhoWeServe() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[780px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Who We Serve</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.15] text-white mb-6">
            Serving the private capital ecosystem.
          </h1>
          <p className="text-lg text-ice/85 max-w-[660px] mx-auto leading-relaxed">
            CoreG serves participants across the private capital ecosystem through a single governed operating standard. While each participant enters a transaction with different objectives and responsibilities, every engagement is held to the same standard of confidence, integrity, and accountability.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="max-w-[1080px] mx-auto grid gap-12 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {SERVES.map((item) => (
            <div key={item.label} className="border-t-2 border-gold pt-6">
              <h2 className="font-display text-2xl font-medium text-navy mb-3">{item.label}</h2>
              <p className="text-[15px] text-slate leading-[1.75]">{item.body}</p>
              {item.label === "Transaction Participants" && (
                <p className="text-[14px] text-slate mt-4">
                  See the <Link to="/faq" className="text-navy underline font-medium">FAQ</Link> for participant requirements and information regarding licensed and non-licensed brokers.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
        <div className="max-w-[620px] mx-auto">
          <h2 className="font-display text-2xl font-medium text-navy mb-4">Not sure where your role fits?</h2>
          <p className="text-[15px] text-slate mb-8">Tell us about the transaction and your role in it. We will confirm fit before anything advances.</p>
          <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}
