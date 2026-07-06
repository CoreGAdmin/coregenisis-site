// Two distinct partnership tracks — deliberately not blended into one pitch,
// since referrers and integration partners ask different questions and want
// different proof points. Structural language only: describes what each
// arrangement IS, not invented numbers (commission %, API specifics) we
// haven't confirmed yet.
export const REFERRAL_POINTS = [
  {
    label: "Who this is for",
    detail: "Intermediaries and referrers already active in private capital markets — the same participants described on our Who We Serve page — who encounter transactions that need a governed pipeline they don't have to build themselves.",
  },
  {
    label: "How it works, structurally",
    detail: "A referred transaction enters the same governed pipeline as any other — onboarding, KYC/AML, asset registration, and every gate after it. The referring party isn't asked to vouch for compliance; the pipeline verifies independently, the same way it does for every transaction.",
  },
  {
    label: "What's expected of a referrer",
    detail: "Good-faith introductions and accurate context about what's being moved. The compliance burden of verification sits with CoreG's governed pipeline, not with the referring party.",
  },
];

export const INTEGRATION_POINTS = [
  {
    label: "Who this is for",
    detail: "Organizations building on top of or alongside CoreG's governed pipeline — platforms, tooling providers, or institutions that need their own systems to interoperate with a governed transaction flow rather than duplicate it.",
  },
  {
    label: "How it works, structurally",
    detail: "Integration means connecting to the pipeline's stage-gated structure — onboarding, verification, advancement, reporting — rather than replicating compliance logic independently. The specifics of that connection are scoped per partner, not offered as a generic self-serve API today.",
  },
  {
    label: "What's expected of an integration partner",
    detail: "A defined technical scope and a real use case for connecting to a governed pipeline, established through direct conversation before any integration work begins.",
  },
];
