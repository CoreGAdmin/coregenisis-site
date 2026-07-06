import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { SERVES } from "../data/content.js";

export default function WhoWeServe() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Who We Serve</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.15] text-white mb-6">
            Three kinds of participants. One governed pipeline.
          </h1>
          <p className="text-lg text-ice/85 max-w-[600px] mx-auto leading-relaxed">
            CoreG doesn't segment its platform by client type — everyone moves through the same
            governed pipeline. What differs is what each participant needs from it.
          </p>
        </div>
      </section>
      <section className="bg-white px-8 py-20">
        <div className="max-w-[1080px] mx-auto grid gap-12 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {SERVES.map((s) => (
            <div key={s.label} className="border-t-2 border-gold pt-6">
              <h2 className="font-display text-2xl font-medium text-navy mb-3">{s.label}</h2>
              <p className="text-[15px] text-slate leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-display text-2xl font-medium text-navy mb-4">Not sure which applies to us?</h2>
          <p className="text-[15px] text-slate mb-8">Tell us what you're moving — we'll confirm fit before anything else.</p>
          <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}
