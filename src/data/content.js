// CoreG public-site content. The participant taxonomy is role-based so the
// site describes how organizations engage in a transaction rather than
// grouping them only by legal or organizational form.
export const PIPELINE = [
  "Intake", "KYC", "Asset / Collateral", "Appraisal / Valuation",
  "Monetization", "Securitization", "Tokenization", "Completed",
];

export const CAPABILITIES = [{"label": "Intake & KYC", "body": "The intended operating model begins with participant roles, transaction context, identity, authority and beneficial-ownership evidence. Participant admission and transaction admission are separate reviews."}, {"label": "Asset / Collateral & Appraisal", "body": "The model separates asset family, instrument type, transaction structure and regulatory treatment. Ownership, provenance, transferability and valuation require evidence appropriate to the transaction."}, {"label": "Monetization & Securitization", "body": "Any proposed monetization or securitization requires transaction-specific legal review, suitable counterparties and appropriately authorized professionals. These stages are not promises of services available through this website."}, {"label": "Tokenization & Completion", "body": "Tokenization, where applicable and lawful, is a separate stage; it does not create ownership, liquidity or regulatory permission. Completion depends on the actual agreed work and supporting evidence."}];

export const SERVES = [
  {
    label: "Capital Providers",
    body: "Banks, family offices, hedge funds, private equity firms, digital asset funds, cryptocurrency banks, and other institutional investors providing capital into private market transactions. CoreG’s operating model focuses on diligence coordination, documentation and accountability, subject to service availability and transaction-specific review.",
  },
  {
    label: "Transaction Principals",
    body: "Asset owners, issuers, trusts, and authorized representatives bringing assets, collateral, or investment opportunities into private capital markets. The intended review addresses identity, authority, documentation and transaction readiness before any engagement is accepted.",
  },
  {
    label: "Transaction Participants",
    body: "Appropriately licensed professionals, intermediaries, introducers, and advisors participating in private capital transactions. CoreG provides a governed operating environment that is intended to support consistent documentation; participation does not confer regulatory authorization.",
  },
  {
    label: "Digital Asset Participants",
    body: "Custodial and non-custodial institutions, cryptocurrency banks, exchanges, digital asset funds, qualified token issuers, and other organizations transacting in digital assets. Digital asset review may require independent custody, ownership and blockchain-risk expertise. Bank and custodian APIs and automated forensic services are not represented as currently deployed integrations.",
  },
];
