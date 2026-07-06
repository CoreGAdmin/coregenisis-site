import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { REFERRAL_POINTS, INTEGRATION_POINTS } from "../data/partnersContent.js";

function TrackSection({ eyebrow, title, intro, points, bg }) {
  return (
    <section className={bg === "dark" ? "bg-navy px-8 py-20" : "bg-white px-8 py-20"}>
      <div className="max-w-[820px] mx-auto">
        <div className={`font-mono text-xs tracking-[0.1em] uppercase mb-3 ${bg === "dark" ? "text-gold" : "text-slateLt"}`}>
          {eyebrow}
        </div>
        <h2 className={`font-display text-[28px] sm:text-[32px] font-medium mb-5 leading-tight ${bg === "dark" ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
        <p className={`text-[15px] leading-[1.75] mb-10 ${bg === "dark" ? "text-ice/85" : "text-slate"}`}>
          {intro}
        </p>
        <div className="space-y-8">
          {points.map((pt) => (
            <div key={pt.label} className={`border-l-2 pl-5 ${bg === "dark" ? "border-gold" : "border-navy/20"}`}>
              <h3 className={`text-base font-semibold mb-2 ${bg === "dark" ? "text-white" : "text-navy"}`}>{pt.label}</h3>
              <p className={`text-[14px] leading-relaxed ${bg === "dark" ? "text-slateLt" : "text-slate"}`}>{pt.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Partners() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      {/* HERO — splits the two tracks immediately, before either gets detail */}
      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[780px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Partners</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,50px)] font-medium leading-[1.15] text-white mb-6">
            Two ways to work with CoreG.
          </h1>
          <p className="text-lg text-ice/85 max-w-[600px] mx-auto leading-relaxed">
            Referring a transaction and integrating with our governed pipeline are different
            relationships with different questions. We keep them separate here, too.
          </p>
        </div>
      </section>

      <TrackSection
        bg="dark"
        eyebrow="Track One"
        title="Referral Partners"
        intro="For intermediaries and referrers who encounter transactions that need a governed pipeline they don't have to build themselves."
        points={REFERRAL_POINTS}
      />

      <TrackSection
        bg="light"
        eyebrow="Track Two"
        title="Technology & Integration Partners"
        intro="For organizations that need their own systems to interoperate with a governed transaction flow, rather than duplicate its compliance logic independently."
        points={INTEGRATION_POINTS}
      />

      {/* CLOSING CTA */}
      <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-display text-2xl font-medium text-navy mb-4">Not sure which track fits?</h2>
          <p className="text-[15px] text-slate mb-8">
            Tell us what you're trying to do — we'll point you to the right conversation.
          </p>
          <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
