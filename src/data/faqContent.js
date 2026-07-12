// FAQ content — every answer sourced from confirmed portal facts or
// explicitly marked mechanism-only/pending. Nothing here is invented.
export const FAQ_ITEMS = [
  {
    q: "What is PCM, and what kind of market is it?",
    a: [
      "PCM stands for Private Capital Markets — the space where high-value assets and instruments move between institutions and principals outside public exchanges. It covers transactions involving bank instruments, collateralized assets, and structured securities where the parties, the asset, and the compliance record all have to hold up to institutional scrutiny.",
      "CoreG operates in this market as governed infrastructure — the platform doesn't originate transactions, it governs how they move once they're in motion.",
    ],
  },
  {
    q: "Who does CoreG actually serve?",
    a: [
      "Three groups, described in full on our Who We Serve page: Banks moving instruments that need an auditable record, Asset Holders who need verification handled to institutional standard, and PCM Participants — intermediaries and referrers, including both Licensed Brokers and Non-Licensed Brokers.",
      "The distinction between Licensed and Non-Licensed Brokers reflects real regulatory status, not an internal ranking — both categories can participate, and the governed pipeline applies identically to transactions either brings in. [We're finalizing the specific licensing body/regime language for this distinction — check back or ask directly.]",
    ],
  },
  {
    q: "Can sanctioned banks participate on the platform?",
    a: [
      "No. Every party in a transaction — including the institutions behind it — is screened against sanctions lists before any stage involving them can advance, and that screening runs continuously, not just once at onboarding. A bank or institution that appears on an applicable sanctions list cannot move through the governed pipeline.",
      "[The specific sanctions regime and list we screen against is being finalized for publication here — this answer describes the mechanism; the enumerated list is not yet published on this page.]",
    ],
  },
  {
    q: "How does CoreG verify Asset Holders, and what assets qualify?",
    a: [
      "Verification follows the governed pipeline's intake and KYC stages: at intake, if the asset owner differs from the beneficiary, the beneficiary is captured by name with full KYC completed later in the pipeline — not skipped, sequenced. Supporting documentation is uploaded and versioned, so a resubmission never overwrites what was there before.",
      "Qualified asset types are: Art, Gold, Jewelry, Real Estate, Historical Asset, and Other. This reference list is admin-maintained on our side, so it can be extended as new asset classes are added to the platform without requiring a rebuild.",
      "[The full verification standard — what specifically qualifies a submission as sufficient proof of funds — is being finalized. This answer describes the mechanism; the detailed standard will be published here once complete.]",
    ],
  },
  {
    q: "What types of participants does CoreG work with?",
    a: [
      "Banks with instruments to move through a governed process, Asset Holders and their representatives, and PCM Participants — Licensed Brokers and Non-Licensed Brokers who need a compliant pipeline they can plug their referrals into rather than building compliance infrastructure themselves.",
      "Every participant type moves through the same governed pipeline once a transaction is in motion — there's no separate, lighter-touch path for any category.",
    ],
  },
];
