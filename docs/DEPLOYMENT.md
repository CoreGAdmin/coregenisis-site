# CoreG Deployment

The production website is built with Vite and deployed through Cloudflare Pages from the GitHub repository.

## Local verification

```bash
npm ci
npm run build
```

## Production release

1. Install the approved release package.
2. Run the validation script.
3. Commit the release candidate.
4. Push to the production branch.
5. Verify the Cloudflare Pages deployment.
6. Create and push the production tag.
7. Archive the release package and rollback snapshot.

## Rollback

Use the backup created by the release installer or check out the prior production tag. Run the production build after restoration before pushing the rollback commit.
