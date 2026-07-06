// Deep content for the four capability sections on the Platform page.
// Each maps to the specific pipeline stages it covers, so the page reads as
// ONE governed pipeline with four zoomed-in views — not four separate
// products. No fabricated metrics; every claim here is a mechanism claim
// ("what happens, what's checked"), not a traction claim.
export const PLATFORM_SECTIONS = [
  {
    id: "onboarding",
    stages: ["Onboarding", "KYC / AML"],
    eyebrow: "Client Intake & Compliance Screening",
    title: "Nothing enters the pipeline unverified.",
    paragraphs: [
      "Every relationship begins with structured intake — not a form that gets filed away, but the first governed checkpoint in the pipeline. Identity verification and anti-money-laundering screening run as a single sequence, and neither is treated as complete until the other clears.",
      "This is where \"governed\" starts meaning something concrete: onboarding isn't a formality that happens before the real process begins. It's stage one of the same enforcement chain that runs through registration, funding, and reporting. A client who hasn't cleared KYC/AML has no path to any later stage — there's no side door.",
    ],
  },
  {
    id: "registration",
    stages: ["Asset Registration", "Proof of Funds"],
    eyebrow: "Asset Registration & Proof of Funds",
    title: "The asset and the money behind it, verified together.",
    paragraphs: [
      "High-value instruments are registered against a documented chain of proof — not asserted, evidenced. Proof of funds is checked against the specific asset it's meant to back, not accepted as a generic balance statement.",
      "This is the stage where most informal private-markets processes quietly lose rigor, because verifying provenance is slower than taking a document at face value. CoreG treats that verification as a hard gate: an asset without cleared proof of funds does not advance, regardless of who's asking.",
    ],
  },
  {
    id: "pipeline",
    stages: ["OFAC Screen", "Pipeline Gate", "Proof Pack"],
    eyebrow: "Governed Pipeline Advancement",
    title: "Eight stages. No stage can be bypassed.",
    paragraphs: [
      "Once onboarding and asset verification clear, the transaction enters the governed pipeline itself — sanctions screening, gated advancement, and a cryptographic proof pack generated at every decision point. This is the enforcement layer that makes the rest of the platform meaningful: verification that can be skipped under pressure isn't verification, it's theater.",
      "Every gate produces a record, not just a pass/fail. That record is what makes the pipeline auditable after the fact, not just compliant in the moment it happened.",
    ],
  },
  {
    id: "reporting",
    stages: ["Reporting"],
    eyebrow: "Regulatory Reporting",
    title: "Built for reporting, not reconstructed for it.",
    paragraphs: [
      "Every decision made earlier in the pipeline — every check, every gate, every proof pack — is structured from the moment it's created to serve as a reporting record. Nothing has to be pieced together after the fact from logs, emails, or someone's memory of what happened.",
      "That distinction matters more than it sounds: reconstructed compliance histories are the norm in private capital markets, and they're the first thing a real audit finds thin. CoreG's reporting layer exists because the pipeline was designed around it from stage one, not bolted on afterward.",
    ],
  },
];
