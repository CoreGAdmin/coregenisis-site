import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

export default function TermsOfService() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <section className="bg-navy px-8 pt-16 pb-12">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-3">Legal</div>
          <h1 className="font-display text-3xl font-medium text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-slateLt">Effective date: July 6, 2026</p>
        </div>
      </section>
      <section className="bg-white px-8 py-16">
        <div className="max-w-[760px] mx-auto space-y-10 text-[15px] text-slate leading-[1.75]">
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Acceptance</h2>
            <p>
              By accessing coregenisis.com or any CoreG platform service, you agree to these
              Terms of Service. If you do not agree, do not access or use our services.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Use of This Site</h2>
            <p>
              This website is provided for informational purposes. You may not use it for any
              unlawful purpose, attempt to gain unauthorized access to any system or data, or
              engage in any activity that disrupts or interferes with the site or its
              infrastructure.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Intellectual Property</h2>
            <p>
              All content on this site — including text, images, product names, trademarks,
              and platform architecture descriptions — is the property of CoreGenisis dba
              CoreG and is protected by applicable intellectual property laws. Unauthorized
              use or reproduction is prohibited.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Platform Access</h2>
            <p>
              Access to CoreG's governed transaction pipeline is granted exclusively to
              onboarded clients who have cleared the platform's KYC/AML and verification
              gates. Unauthorized access attempts are prohibited and may be subject to legal
              action.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Disclaimers</h2>
            <p>
              This site is provided "as is" without warranties of any kind. CoreG does not
              warrant that the site will be uninterrupted, error-free, or free of harmful
              components.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Governing Law</h2>
            <p>
              These terms are governed by the laws of the United States. Any disputes arising
              from use of this site shall be resolved in accordance with applicable federal
              and state law.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:info@coregenisis.com" className="text-navy underline">info@coregenisis.com</a>.
            </p>
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}
