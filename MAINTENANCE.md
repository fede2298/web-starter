# Maintenance & Cleanup Policy

This document describes automated cleanup policies for the project.

Local runner / workspace
- After CI/build runs, remove node_modules/ and .next/ from the runner to save space.
- Use `npm run clean` to remove local build artifacts.

Vercel deployments
- Keep only the latest 10 deployments for the project to reduce clutter and costs.
- A GitHub workflow can call the Vercel API to remove older deployments; requires `VERCEL_TOKEN` in repository secrets.

CI workflow
- Use `npm ci` with a committed package-lock.json for reproducible builds in CI.
- If no lockfile exists, fallback to `npm install`.

Useful scripts
- `npm run clean` — remove node_modules and .next
- `npm run ci:build` — run `npm ci` then `npm run build`

Add the Vercel token to GitHub repository secrets as `VERCEL_TOKEN` to enable automatic remote cleanup.
