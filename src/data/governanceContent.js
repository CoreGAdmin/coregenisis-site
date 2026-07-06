// Governance page content — structured around the ELEVEN AGENTS and THREE
// MECHANISMS, deliberately NOT the Platform page's four-pipeline-stage
// pattern. This is CoreG's actual differentiator; it earns its own shape.
export const AGENT_CATEGORIES = [
  {
    label: "Identity & Screening",
    count: 4,
    detail: "Verify who's involved before anything else runs — identity checks, sanctions screening, and ongoing monitoring for changes in status.",
  },
  {
    label: "Document & Asset Verification",
    count: 3,
    detail: "Check submitted records and registered assets against the required standard — not accepted at face value, checked against source.",
  },
  {
    label: "Pipeline Enforcement",
    count: 2,
    detail: "Hold the gate at every stage transition. A transaction does not advance on a partial pass or a manual override.",
  },
  {
    label: "Proof & Reporting",
    count: 2,
    detail: "Generate the cryptographic proof pack and structure every decision as a reporting-ready record from the moment it's made.",
  },
];

export const MECHANISMS = [
  {
    label: "OFAC / Sanctions Screening",
    detail: "Every party in a transaction — not just the primary client — is screened against sanctions lists before any stage involving them can advance. Screening runs continuously, not once at onboarding; a status change after intake re-triggers the gate.",
  },
  {
    label: "Document Verification",
    detail: "Submitted documentation is checked against the specific standard required for that asset class and jurisdiction — not a generic checklist. A document that doesn't meet the standard blocks advancement; it doesn't get a note for manual follow-up.",
  },
  {
    label: "Cryptographic Proof Pack",
    detail: "Every decision — a pass, a gate held, an escalation — produces a signed, auditable record at the moment it happens. The proof pack isn't generated for an audit; it exists whether or not anyone ever asks to see it.",
  },
];
