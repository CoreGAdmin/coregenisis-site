# CoreG Release Process

## Lifecycle

Planning → Development → Engineering Review → Release Candidate → Validation → Production → Archive → Post-release review.

## Versioning

CoreG follows semantic versioning:

- Major: structural or strategic change.
- Minor: new page, feature, or material capability.
- Patch: defect correction, copy correction, or limited UX refinement.

## Release candidate

Every production release begins as a release candidate. The release candidate must build successfully, pass the validation checklist, and be reviewed in the deployed environment before promotion.

## Required evidence

Each release must include:

- Release notes.
- Changelog entry.
- Validation record.
- Source or update archive.
- Rollback reference.
- Git tag.

## Promotion

A release candidate is promoted only after acceptance. Promotion consists of committing the approved source, creating the production tag, pushing the tag, and preserving the release archive.
