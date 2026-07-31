import PageNav from "../components/PageNav.jsx";
import PageFooter from "../components/PageFooter.jsx";

const participantTypes = [
  "Capital Provider",
  "Issuer or Transaction Principal",
  "Advisor or Transaction Participant",
  "Strategic or Institutional Partner",
  "Digital Asset Participant",
  "Other Institutional Inquiry",
];

export default function RequestAccess() {
  return (
    <div className="font-sans text-navy bg-white">
      <PageNav />
      <main>
        <section className="bg-navy px-5 sm:px-8 pt-20 pb-16 text-center">
          <div className="max-w-[820px] mx-auto">
            <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-4">Institutional Access</div>
            <h1 className="font-display text-[clamp(36px,6vw,62px)] font-medium leading-[1.08] text-white mb-6">Request access to CoreG.</h1>
            <p className="text-lg text-ice/85 max-w-[690px] mx-auto leading-relaxed">CoreG evaluates participation through a structured institutional intake process. Submission of a request does not constitute approval, onboarding, an offer, or a commitment to transact.</p>
          </div>
        </section>

        <section className="request-access-page">
          <div className="request-access-shell">
            <div className="request-access-copy">
              <p className="leadership-section-label">Before You Submit</p>
              <h2>Help us understand your role and intended engagement.</h2>
              <p>The information below allows CoreG to route your request, determine whether the proposed engagement is within scope, and identify the appropriate next step.</p>
              <div className="request-access-notice">Access is selective and subject to identity, eligibility, compliance, and transaction-specific review.</div>
            </div>

            <form className="request-access-form" action="mailto:info@coregenisis.com" method="post" encType="text/plain">
              <label>Full name<input name="Full name" autoComplete="name" required /></label>
              <label>Organization<input name="Organization" autoComplete="organization" required /></label>
              <label>Business email<input name="Email" type="email" autoComplete="email" required /></label>
              <label>Participant type
                <select name="Participant type" defaultValue="" required>
                  <option value="" disabled>Select one</option>
                  {participantTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label>Intended engagement
                <textarea name="Intended engagement" rows="6" required placeholder="Briefly describe your organization, your role, and what you are seeking from CoreG." />
              </label>
              <label className="request-access-consent">
                <input type="checkbox" name="Acknowledgement" required />
                <span>I understand that this request is preliminary and does not create an advisory, brokerage, fiduciary, investment, or transaction relationship.</span>
              </label>
              <button type="submit">Submit Access Request</button>
            </form>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
