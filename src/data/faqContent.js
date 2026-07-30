// FAQ content — every answer sourced from confirmed portal facts or real,
// named regulatory authorities provided directly. Nothing here is invented.
//
// Item 2's first paragraph uses a special array-of-parts form instead of a
// plain string, so FAQ.jsx can render "Who We Serve" as an inline link in
// its original sentence position. Marked with `whoWeServeLink: true` so
// FAQ.jsx knows to treat that specific paragraph differently.
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
    whoWeServeLink: true,
    a: [
      { before: "Four groups, described in full on our ", linkText: "Who We Serve", after: " page: Banks moving instruments that need an auditable record, Asset Holders who need verification handled to institutional standard, PCM Participants — intermediaries and referrers, including both Licensed Brokers and Non-Licensed Brokers — and Institutional Clients, covering Family Offices, Private Equity, and Hedge Funds." },
      "The distinction between Licensed and Non-Licensed Brokers reflects real regulatory status, not an internal ranking — both categories can participate, and the governed pipeline applies identically to transactions either brings in. Licensing status is verified against the primary authorities described below.",
      "Licensed Brokers are verified against three primary authorities. The SEC (Securities and Exchange Commission) sets the federal laws governing broker-dealer activity — any firm conducting securities business in the U.S. must register with the SEC unless a specific exemption applies. FINRA (Financial Industry Regulatory Authority) is the self-regulatory organization that administers that registration day to day: it sets conduct rules and runs the qualification exams — the SIE, Series 7, Series 63, and similar — that actually certify an individual broker. Where a professional also acts as an investment adviser, IAPD (Investment Adviser Public Disclosure) provides the public record covering that side of their registration as well.",
    ],
  },
  {
    q: "Can sanctioned banks participate on the platform?",
    a: [
      "No. Every party in a transaction — including the institutions behind it — is screened against sanctions lists before any stage involving them can advance, and that screening runs continuously, not just once at onboarding. A bank or institution that appears on an applicable sanctions list cannot move through the governed pipeline.",
      "That screening is validated against three official, real-time searchable databases. US OFAC (Office of Foreign Assets Control) maintains the SDN — Specially Designated Nationals — List; a bank placed on it is effectively cut off from the U.S. financial system and from dealing in U.S. dollars. The European Union maintains its own Consolidated List of Financial Sanctions Targets, covering EU-level restrictions. The United Nations Security Council issues sanctions of its own, typically global asset freezes aimed at entities tied to terrorism, weapons proliferation, or specific conflict zones. A bank appearing on any of the three blocks the transaction at the gate — there's no partial-pass across jurisdictions.",
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
  {
    q: "How does CoreG handle cryptocurrency and digital assets?",
    a: [
      "CoreG serves both custodial and non-custodial managers — those who hold client digital assets directly under a regulated custody model, and those who direct assets while clients retain control of their own keys. Both move through the same governed pipeline as every other institutional client; verification does not relax because the asset is digital.",
      "Institutional participation in digital assets has moved from early adoption to core infrastructure — custody, compliance, and verification are increasingly evaluated by the same standards as any other regulated financial asset, not treated as a separate, lower-scrutiny category.",
      "CoreG's verification layer extends to crypto forensics — tracing asset provenance and flagging wallet-level risk indicators as part of the same governed screening applied to every other asset class.",
    ],
  },
];
