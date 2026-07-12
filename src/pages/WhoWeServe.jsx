import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { SERVES, INSTITUTIONAL_CLIENTS } from "../data/content.js";

export default function WhoWeServe() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Who We Serve</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.15] text-white mb-6">
            Four kinds of participants. One governed pipeline.
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

      {/* INSTITUTIONAL CLIENTS — distinct block, not a flat card, since it
          contains three sub-types with their own descriptors rather than
          one entry with one line, unlike the three cards above. */}
      <section className="bg-mist px-8 py-20 border-t border-[#E2E8F0]">
        <div className="max-w-[1080px] mx-auto">
          <div className="border-t-2 border-gold pt-6 mb-10">
            <h2 className="font-display text-2xl font-medium text-navy mb-3">Institutional Clients</h2>
            <p className="text-[15px] text-slate leading-relaxed max-w-[640px]">
              Family Offices, Private Equity, and Hedge Funds — institutional participants
              who move through the same governed pipeline as every other client type on CoreG.
            </p>
          </div>
          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {INSTITUTIONAL_CLIENTS.map((c) => (
              <div key={c.label} className="bg-white border border-[#E2E8F0] rounded-lg p-6">
                <h3 className="text-base font-semibold text-navy mb-2">{c.label}</h3>
                <p className="text-[14px] text-slate leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 pb-16 text-center">
        <p className="text-[14px] text-slate">
          Licensed and Non-Licensed Broker distinctions — <Link to="/faq" className="text-navy underline font-medium">see FAQ for details</Link>.
        </p>
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
