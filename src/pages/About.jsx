import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import coreIdentityIcon from "../assets/coreidentity-icon.png";

export default function About() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="bg-navy px-5 sm:px-8 pt-20 pb-16 text-center">
          <div className="max-w-[760px] mx-auto">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">About CoreG</div>
            <h1 className="font-display text-[clamp(34px,5vw,54px)] font-medium leading-[1.12] text-white mb-6 text-balance">Built around a clear institutional responsibility.</h1>
            <p className="text-lg text-ice/85 max-w-[620px] mx-auto leading-relaxed">CoreG exists to help ensure that private capital transactions are conducted with confidence, integrity, and accountability.</p>
          </div>
        </section>
        <section className="bg-white px-5 sm:px-8 py-20">
          <div className="max-w-[820px] mx-auto space-y-12">
            <div><div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">Our Mission</div><p className="text-[17px] text-navy leading-[1.7] font-medium">To facilitate private capital transactions with confidence, integrity, and accountability by applying a consistent standard of verification, documentation, due diligence, and transaction oversight.</p></div>
            <div><div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">Our Vision</div><p className="text-[17px] text-navy leading-[1.7] font-medium">To become the authorized intermediary private capital market participants rely on when transaction integrity, accountability, and verifiable execution matter most.</p></div>
            <div className="border-t border-[#E2E8F0] pt-10 text-center"><p className="font-display text-[24px] sm:text-[28px] font-medium text-navy">Capital should never move faster than truth.</p></div>
          </div>
        </section>
        <section className="bg-mist px-5 sm:px-8 py-16 border-t border-[#E2E8F0]">
          <div className="max-w-[800px] mx-auto text-center">
            <img src={coreIdentityIcon} alt="CoreIdentity Technologies" className="h-10 w-auto mx-auto mb-5" />
            <h2 className="font-display text-2xl font-medium text-navy mb-4">Built on Trust Infrastructure provided by CoreIdentity Technologies.</h2>
            <p className="text-[15px] text-slate leading-[1.75] mx-auto">CoreG is an independent private capital markets company and client of CoreIdentity Technologies. CoreIdentity Technologies builds and operates the Trust Infrastructure and governed technology environment supporting CoreG's operating model. CoreG remains responsible for its intermediary activities, institutional relationships, and transaction execution.</p>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
