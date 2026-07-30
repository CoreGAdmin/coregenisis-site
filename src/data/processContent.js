export const PROCESS_STAGES = [
  {
    number: "01",
    name: "Intake",
    purpose: "Establish the engagement, participant roles, transaction objective, and initial documentary record.",
    gate: "The transaction does not advance until the required intake information is complete and internally consistent.",
  },
  {
    number: "02",
    name: "KYC",
    purpose: "Verify identity, authority, ownership, beneficiary relationships, and applicable compliance requirements.",
    gate: "Material identity, authority, or compliance questions must be resolved before the asset enters review.",
  },
  {
    number: "03",
    name: "Asset / Collateral",
    purpose: "Register the asset or collateral against the transaction and establish the evidence supporting ownership and control.",
    gate: "Unverified assets, unsupported authority, and incomplete ownership records are excluded from advancement.",
  },
  {
    number: "04",
    name: "Appraisal / Valuation",
    purpose: "Subject the registered asset or collateral to the valuation work required by the transaction structure.",
    gate: "Asserted value is not treated as verified value. The applicable valuation requirement must be satisfied first.",
  },
  {
    number: "05",
    name: "Monetization",
    purpose: "Evaluate and execute the approved pathway for converting verified asset value into transaction capacity.",
    gate: "The monetization pathway must align with the verified asset, approved structure, and authorized counterparties.",
  },
  {
    number: "06",
    name: "Securitization",
    purpose: "Structure the transaction record, instruments, and obligations required for institutional execution.",
    gate: "Documentation, approvals, and transaction authority must remain current and traceable before advancement.",
  },
  {
    number: "07",
    name: "Tokenization",
    purpose: "Apply the approved digital representation or recording process where the transaction structure requires it.",
    gate: "Tokenization does not replace verification. It occurs only after the preceding transaction requirements have cleared.",
  },
  {
    number: "08",
    name: "Completed",
    purpose: "Close the governed process with the transaction record, supporting evidence, and stage history preserved.",
    gate: "Completion reflects satisfied stage requirements and an auditable record—not merely a changed status field.",
  },
];

export const OPERATING_PRINCIPLES = [
  {
    title: "Stage-gated progression",
    body: "Each stage has a defined responsibility. A later stage does not open simply because commercial pressure increases.",
  },
  {
    title: "Contemporaneous evidence",
    body: "Verification and approvals are recorded when they occur so the transaction history does not have to be reconstructed after the fact.",
  },
  {
    title: "Role-based accountability",
    body: "Principals, capital providers, participants, and institutional counterparties remain accountable for the information and authority attached to their roles.",
  },
  {
    title: "Truth before velocity",
    body: "CoreG is designed to advance qualifying transactions efficiently without allowing speed to displace verification, integrity, or accountability.",
  },
];
