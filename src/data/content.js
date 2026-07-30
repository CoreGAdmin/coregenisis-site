// CoreG public-site content. The participant taxonomy is role-based so the
// site describes how organizations engage in a transaction rather than
// grouping them only by legal or organizational form.
export const PIPELINE = [
  "Intake", "KYC", "Asset / Collateral", "Appraisal / Valuation",
  "Monetization", "Securitization", "Tokenization", "Completed",
];

export const CAPABILITIES = [
  { label: "Intake & KYC",
    body: "Client and transaction intake, identity verification, and compliance checks run as one governed sequence — no later stage opens until intake and KYC both clear." },
  { label: "Asset / Collateral & Appraisal",
    body: "Assets are registered against the transaction and independently appraised before valuation is accepted — not asserted, verified against the collateral actually backing the transaction." },
  { label: "Monetization & Securitization",
    body: "Once appraised, an asset moves through monetization and securitization under the same gated model — each stage requires the one before it to have genuinely cleared, not just been marked complete." },
  { label: "Tokenization & Completion",
    body: "The final stages produce a completed, auditable transaction record — built for reporting from the first stage, not reconstructed from it after the fact." },
];

export const SERVES = [
  {
    label: "Capital Providers",
    body: "Banks, family offices, hedge funds, private equity firms, digital asset funds, cryptocurrency banks, and other institutional investors providing capital into private market transactions. CoreG supports these organizations with governed transaction execution, institutional verification, and an auditable record from first engagement through close.",
  },
  {
    label: "Transaction Principals",
    body: "Asset owners, issuers, trusts, and authorized representatives bringing assets, collateral, or investment opportunities into private capital markets. CoreG helps ensure that identity, authority, documentation, and transaction readiness are verified to institutional standards.",
  },
  {
    label: "Transaction Participants",
    body: "Licensed brokers, non-licensed brokers, intermediaries, introducers, and advisors participating in private capital transactions. CoreG provides a governed operating environment that enables participants to engage through a consistent, compliant transaction process.",
  },
  {
    label: "Digital Asset Participants",
    body: "Custodial and non-custodial institutions, cryptocurrency banks, exchanges, digital asset funds, qualified token issuers, and other organizations transacting in digital assets. Through secure API integrations with supported cryptocurrency banks, digital asset custodians, and banking platforms, CoreG extends institutional verification into the digital asset ecosystem, including wallet validation and cryptocurrency forensic analysis.",
  },
];
