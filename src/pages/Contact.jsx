import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";
import PlatformNotice from "../components/PlatformNotice.jsx";

const INQUIRIES = [
  { title: "Capital Markets", body: "Qualifying transaction inquiries from principals, capital providers, authorized representatives, and institutional participants.", subject: "Capital Markets Inquiry" },
  { title: "Strategic Relationships", body: "Institutional relationships, supported infrastructure, custody, banking, verification, or market collaboration.", subject: "Strategic Relationship Inquiry" },
  { title: "Platform Questions", body: "Questions concerning participant access, planned platform enhancements, or the governed operating environment.", subject: "Platform Inquiry" },
  { title: "Media & General", body: "Media requests, company information, speaking inquiries, and other institutional correspondence.", subject: "General Inquiry" },
];

export default function Contact() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="bg-navy px-5 sm:px-8 pt-20 pb-16 text-center">
          <div className="max-w-[780px] mx-auto">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Contact</div>
            <h1 className="font-display text-[clamp(34px,5vw,54px)] font-medium leading-[1.1] text-white mb-6 text-balance">Begin with a direct institutional conversation.</h1>
            <p className="text-lg text-ice/85 max-w-[650px] mx-auto leading-relaxed">Contact CoreG regarding a qualifying transaction, institutional relationship, platform question, or general inquiry.</p>
          </div>
        </section>

        <section className="bg-white px-5 sm:px-8 py-20">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 mb-14">
              <div>
                <div className="font-mono text-[11px] tracking-[0.12em] text-gold uppercase mb-3">Direct Correspondence</div>
                <h2 className="font-display text-[30px] sm:text-[38px] font-medium text-navy mb-5">Route your inquiry clearly.</h2>
                <p className="text-[15px] text-slate leading-[1.8] mb-7">Include your organization, your role, and the nature of the inquiry. Transaction-related correspondence should identify the asset or opportunity only at a high level. Do not transmit passports, banking records, private keys, proof-of-funds documents, or other sensitive materials through an unsolicited email.</p>
                <a href="mailto:info@coregenisis.com" className="inline-flex bg-navy text-white text-[15px] font-semibold px-7 py-3.5 rounded-sm">info@coregenisis.com</a>
              </div>
              <div className="grid border-l border-t border-[#DCE3EC] sm:grid-cols-2">
                {INQUIRIES.map((item) => (
                  <a key={item.title} href={`mailto:info@coregenisis.com?subject=${encodeURIComponent(item.subject)}`} className="group border-r border-b border-[#DCE3EC] p-7 min-h-[220px] flex flex-col hover:bg-mist transition-colors">
                    <h3 className="font-display text-2xl font-medium text-navy mb-3">{item.title}</h3>
                    <p className="text-[14px] text-slate leading-[1.75] mb-7 flex-1">{item.body}</p>
                    <span className="text-sm font-semibold text-navy">Open email <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
                  </a>
                ))}
              </div>
            </div>
            <PlatformNotice />
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
