# Miles Tech Studios edition boundaries

[Edition configuration](../edition.json) identifies `milesalexg-tech/miles-tech-studios-bedrock` and its StackAnvil provenance. Branding changes live in this separate edition; the upstream performance contribution remains free of edition branding.

## Compatible artifacts

Edition bundles and release titles use Miles Tech Studios branding. Internal JAR filenames, Maven groups and versions, Fabric mod IDs, Java packages, resource namespaces, Gradle property names, and `.stackanvil/` directories stay compatible with the inherited stack. The ViaFabricPlus client remains the exact checksum-verified upstream Jenkins artifact.

`bun run build all` publishes dependencies only into the local `.stackanvil/maven/` directory. The inherited generated projects contain upstream Maven publishing tasks; do not run their generic Gradle `publish` tasks for edition distribution. No public edition Maven repository is configured.

## Mutation boundaries

Both mutation switches in `edition.json` are disabled. `pr sync` and `pr assign` reject before running GitHub or Git mutations. `mod:publish modrinth` and `mod:publish curseforge` reject before loading artifacts or uploading. Direct upload functions have the same guard. The inherited StackAnvil fork owner and platform IDs also remain forbidden destinations if a switch is later changed.

Ordinary stack builds, `pr check`, `pr build`, and `pr body` remain available. `bun run mod:publish prepare <tag> <manifest> <changelog>` validates a local artifact and prints draft metadata without uploading. It retains the inherited `stack-v...` validation format for compatibility; this does not create a release.

The inherited automatic release and mod-platform publishing workflows are removed. The website workflow builds a downloadable test artifact with read-only repository permissions; it does not deploy Pages. Enabling future publication needs separately configured edition destinations and an explicit workflow change. Do not reuse StackAnvil platform tokens, listing IDs, domains, or fork branches.

## Original resources

Existing StackAnvil releases, website, Maven repository, Javadocs, Discord community, and platform listings belong to the original project. Links to them are labeled as upstream resources. They do not distribute this edition. The old site's IndexNow ownership key is absent from this edition.

Keep [credits](../CREDITS.md), licenses, copyright notices, patch authorship, and historical research intact. The edition makes no claim to be the fastest or most improved build without comparative benchmarks.
