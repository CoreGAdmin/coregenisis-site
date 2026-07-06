import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <section className="bg-navy px-8 pt-16 pb-12">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">Legal</div>
          <h1 className="font-display text-3xl font-medium text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-slateLt">Effective date: July 6, 2026</p>
        </div>
      </section>
      <section className="bg-white px-8 py-16">
        <div className="max-w-[760px] mx-auto space-y-10 text-[15px] text-slate leading-[1.75]">
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Overview</h2>
            <p>
              CoreGenisis dba CoreG ("CoreG," "we," "us," or "our") operates coregenisis.com
              and related platform services. This Privacy Policy describes how we collect,
              use, and protect information when you interact with our website and services.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Information We Collect</h2>
            <p className="mb-3">
              As of this policy's effective date, Request Access on this site is not yet
              connected to a live intake form — no information is collected through it at
              this time. When a live intake process is active, we will collect information
              you provide directly, including name, email address, and organizational
              affiliation, along with standard server log data such as IP addresses,
              browser type, and pages visited.
            </p>
            <p>
              We do not sell, rent, or share personal information with third parties for
              marketing purposes.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">How We Use Information</h2>
            <p>
              Information you provide, once collection is active, is used solely to respond
              to your inquiry, confirm fit for the governed pipeline, and communicate about
              CoreG's platform and services. We do not use your information for automated
              decision-making or profiling.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Data Retention</h2>
            <p>
              We retain contact information for as long as necessary to fulfill the purpose
              for which it was collected or as required by applicable law. You may request
              deletion of your information at any time by contacting us directly.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Security</h2>
            <p>
              CoreG applies institutional-grade security controls to all data we handle,
              consistent with the governance standards described throughout this site. This
              includes encryption in transit and at rest, access controls, and audit logging.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Contact</h2>
            <p>
              For privacy-related inquiries, contact us at{" "}
              <a href="mailto:info@coregenisis.com" className="text-navy underline">info@coregenisis.com</a>.
            </p>
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}
