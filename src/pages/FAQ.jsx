import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";
import { FAQ_ITEMS } from "../data/faqContent.js";

// Renders one FAQ paragraph. A paragraph is normally a plain string; item
// 2's first paragraph is an object {before, linkText, after} instead, so
// "Who We Serve" renders as a real inline <Link> in its original sentence
// position rather than a separate link at the end of the answer.
function FaqParagraph({ para }) {
  if (typeof para === "string") {
    return <p className="text-[15px] text-slate leading-[1.75] mb-3 last:mb-0">{para}</p>;
  }
  return (
    <p className="text-[15px] text-slate leading-[1.75] mb-3 last:mb-0">
      {para.before}
      <Link to="/who-we-are" className="text-navy underline font-medium">{para.linkText}</Link>
      {para.after}
    </p>
  );
}

export default function FAQ() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <section className="bg-navy px-8 pt-20 pb-16 text-center">
        <div className="max-w-[720px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">FAQ</div>
          <h1 className="font-display text-[clamp(32px,4.5vw,48px)] font-medium leading-[1.15] text-white mb-4">
            Questions about how CoreG works.
          </h1>
          <p className="text-lg text-ice/85 max-w-[560px] mx-auto leading-relaxed">
            Straight answers about the market, who we serve, and how verification actually works.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-16">
        <div className="max-w-[780px] mx-auto space-y-12">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-t border-[#E2E8F0] pt-8 first:border-t-0 first:pt-0">
              <h2 className="text-xl font-semibold text-navy mb-4">{item.q}</h2>
              {item.a.map((para, pi) => (
                <FaqParagraph key={pi} para={para} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist px-8 py-16 text-center border-t border-[#E2E8F0]">
        <div className="max-w-[560px] mx-auto">
          <h2 className="font-display text-2xl font-medium text-navy mb-4">Question not covered here?</h2>
          <p className="text-[15px] text-slate mb-8">Ask us directly — we'll give you a straight answer.</p>
          <ComingSoonButton className="inline-block bg-navy text-white text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">Request Access</ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
