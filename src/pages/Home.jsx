import { Link } from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import { ComingSoonButton } from "../components/ComingSoonButton.jsx";

const PATHWAYS = [
  {
    eyebrow: "How We Operate",
    title: "A disciplined transaction process.",
    body: "CoreG facilitates qualifying private capital transactions through a structured operating standard from first engagement through close.",
    path: "/platform",
    link: "Explore the platform",
  },
  {
    eyebrow: "Who We Serve",
    title: "Participants across private capital markets.",
    body: "CoreG serves capital providers, transaction principals, transaction participants, and digital asset participants.",
    path: "/who-we-serve",
    link: "See who we serve",
  },
  {
    eyebrow: "Verification",
    title: "Confidence supported by governed oversight.",
    body: "Every engagement is supported by structured verification, documentation, sanctions screening, and an auditable transaction record.",
    path: "/governance",
    link: "Understand the standard",
  },
];

export default function Home() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />

      <section className="bg-navy px-8 pt-24 pb-20">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="inline-block font-mono text-xs tracking-[0.12em] text-gold uppercase border border-gold rounded-full px-4 py-1.5 mb-7">
            Authorized Private Capital Markets Intermediary
          </span>
          <h1 className="font-display text-[clamp(36px,5.5vw,64px)] font-medium leading-[1.08] text-white mb-6">
            CoreG is an authorized intermediary<br />serving private capital markets.
          </h1>
          <p className="text-lg text-ice/85 max-w-[660px] mx-auto leading-relaxed">
            CoreG facilitates qualifying private capital transactions through a disciplined operating standard designed to promote confidence, integrity, and accountability from first engagement through close.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="max-w-[820px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">Why CoreG Exists</div>
          <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-navy mb-6 leading-tight">
            Private capital transactions require more from an intermediary.
          </h2>
          <p className="text-[16px] text-slate leading-[1.8]">
            CoreG exists because private capital transactions require an intermediary whose responsibility extends beyond transaction execution to ensuring every transaction is conducted with confidence, integrity, and accountability.
          </p>
        </div>
      </section>

      <section className="bg-mist px-8 py-20 border-y border-[#E2E8F0]">
        <div className="max-w-[820px] mx-auto text-center">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Truth in Transactions</div>
          <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-navy mb-7">
            Truth in Transactions is our operating standard.
          </h2>
          <p className="text-[16px] text-slate leading-[1.9] mb-4">
            Every identity. Every credential. Every authority. Every document. Every material claim.
          </p>
          <p className="text-[16px] text-slate leading-[1.9] mb-4">
            Independently verified before a transaction can advance.
          </p>
          <p className="text-[16px] text-navy font-semibold leading-[1.9]">
            If a claim cannot be independently verified, it does not become part of the transaction.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-[88px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="max-w-[620px] mb-12">
            <div className="font-mono text-xs tracking-[0.1em] text-slateLt uppercase mb-3">CoreG</div>
            <h2 className="font-display text-[32px] font-medium text-navy leading-tight">
              An intermediary defined by how it serves the market.
            </h2>
          </div>
          <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {PATHWAYS.map((item) => (
              <div key={item.title} className="border border-[#E2E8F0] rounded-lg p-7 flex flex-col">
                <div className="font-mono text-[11px] tracking-[0.1em] text-gold uppercase mb-3">{item.eyebrow}</div>
                <h3 className="font-display text-[22px] font-medium text-navy mb-3 leading-tight">{item.title}</h3>
                <p className="text-[14px] text-slate leading-[1.7] mb-6 flex-1">{item.body}</p>
                <Link to={item.path} className="text-[14px] text-navy font-semibold underline underline-offset-4">
                  {item.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-8 py-20 text-center">
        <div className="max-w-[680px] mx-auto">
          <h2 className="font-display text-[30px] font-medium text-white mb-4">Bring us your next transaction.</h2>
          <p className="text-[15px] text-ice/80 mb-8">
            Access is by request. Tell us about the transaction and your role in it, and we will confirm fit before anything advances.
          </p>
          <ComingSoonButton className="inline-block bg-gold text-navy text-[15px] font-semibold px-8 py-3.5 rounded cursor-pointer">
            Request Access
          </ComingSoonButton>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
