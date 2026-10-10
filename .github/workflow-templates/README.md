# Disabled CI templates

These reviewed workflows preserve the edition build, patch, and website checks. They are templates rather than active workflows because the GitHub login used to publish this edition does not have workflow-upload permission. This keeps the complete source and contributor history publishable without expanding account access.

Local `bun run check`, `bun test`, `bun run build all`, and `bun run bundle` were verified before publication; see [the validation record](../../docs/performance-validation.md).

To enable CI later, review these templates and copy the `.yml` files into `.github/workflows/` using an account or credential authorized to upload workflows. The templates build test artifacts; they do not create releases, upload to mod platforms, or deploy the website. The website template expects its final path to be `.github/workflows/pages.yml`.
