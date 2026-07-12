// PIPELINE: the actual 8 stages from the transaction-centric model shipped
// live to app.coregenisis.com (pcm_pipeline_stage_definitions). NOT
// invented — confirmed against portal build history before use.
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
  { label: "Banks",
    body: "Institutions moving high-value instruments that need a governed, auditable transaction record from first contact to close." },
  { label: "Asset Holders",
    body: "Principals and their representatives who need proof-of-funds and asset verification handled to institutional standard." },
  { label: "PCM Participants",
    body: "Intermediaries and referrers in private capital markets who need a compliant pipeline they can plug into — including Licensed Brokers and Non-Licensed Brokers (see FAQ for details)." },
];
