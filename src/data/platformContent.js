// Real content for the Platform page's four deep sections — mapped to the
// ACTUAL 8-stage transaction-centric pipeline (confirmed against portal
// build history), not the invented stage names used earlier. Each section
// groups two real stages, same "one pipeline, four zoomed-in views" logic
// as before — just now grounded in the real system.
export const PLATFORM_SECTIONS = [
  {
    id: "intake-kyc",
    stages: ["Intake", "KYC"],
    eyebrow: "Intake & KYC",
    title: "Nothing enters the pipeline unverified.",
    paragraphs: [
      "Every transaction begins with structured intake — client, asset context, and transaction details captured against the same reference data the rest of the pipeline uses. KYC runs as the next governed checkpoint, not a formality that happens before the real process begins.",
      "This is where the pipeline's ownership model matters concretely: intake explicitly captures whether the owner and beneficiary are the same party, and if not, requires beneficiary information before the transaction can advance. There's no path through the pipeline that skips this distinction.",
    ],
  },
  {
    id: "asset-appraisal",
    stages: ["Asset / Collateral", "Appraisal / Valuation"],
    eyebrow: "Asset / Collateral & Appraisal",
    title: "The asset registered, and independently appraised.",
    paragraphs: [
      "Assets are registered against the transaction they back, drawn from admin-maintained reference data covering asset types, backing classifications, and the specific securities instrument involved — MTN, SBLC, 144A, or other structures captured explicitly rather than assumed.",
      "Appraisal and valuation follow as a distinct, gated stage — the asset's registered value isn't accepted at intake, it's verified before the transaction can move further into the pipeline.",
    ],
  },
  {
    id: "monetization-securitization",
    stages: ["Monetization", "Securitization"],
    eyebrow: "Monetization & Securitization",
    title: "The stages where structure gets tested.",
    paragraphs: [
      "Once an asset clears appraisal, monetization and securitization advance the transaction through the same hard-gated model as every stage before it — no stage opens until the one before it has genuinely cleared, tracked and enforced at the transaction level, not the asset level alone.",
      "Every document submitted at these stages is versioned, not overwritten — a resubmission creates a new version rather than erasing what was there before, so the record of what changed and when stays intact.",
    ],
  },
  {
    id: "tokenization-completed",
    stages: ["Tokenization", "Completed"],
    eyebrow: "Tokenization & Completion",
    title: "The pipeline ends in a record, not just a close.",
    paragraphs: [
      "Tokenization is the final structural stage before a transaction is marked complete. Completion isn't a status flip — it's the point where every prior stage's record becomes the transaction's permanent audit trail.",
      "Because every stage along the way — intake, KYC, appraisal, monetization, securitization — was built to produce a record at the moment it happened, the completed transaction doesn't need to be reconstructed for reporting. It already is one.",
    ],
  },
];
