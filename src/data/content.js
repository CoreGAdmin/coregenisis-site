export const PIPELINE = [
  "Onboarding", "KYC / AML", "Asset Registration", "Proof of Funds",
  "OFAC Screen", "Pipeline Gate", "Proof Pack", "Reporting",
];

export const CAPABILITIES = [
  { label: "Onboarding & KYC/AML",
    body: "Client intake, identity verification, and anti-money-laundering checks run as one governed sequence — no stage advances until the one before it clears." },
  { label: "Asset Registration & Proof of Funds",
    body: "High-value assets are registered and verified against documented proof of funds before they can move further into the pipeline." },
  { label: "Governed Pipeline Advancement",
    body: "An eight-stage transaction pipeline with hard gates at every step. No stage can be skipped, and no advancement happens without a passing check." },
  { label: "Regulatory Reporting",
    body: "Every decision produces a record built for reporting, not reconstructed after the fact." },
];

export const SERVES = [
  { label: "Banks",
    body: "Institutions moving high-value instruments that need a governed, auditable transaction record from first contact to close." },
  { label: "Asset Holders",
    body: "Principals and their representatives who need proof-of-funds and asset verification handled to institutional standard." },
  { label: "PCM Participants",
    body: "Intermediaries and referrers in private capital markets who need a compliant pipeline they can plug into." },
];
