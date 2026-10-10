# Miles Tech Studios Bedrock

An independent Miles Tech Studios edition of the [StackAnvil patch stack](https://github.com/StackAnvil/patches), for connecting Minecraft Java Edition clients to Bedrock Edition worlds through ViaFabricPlus or ViaProxy.

This edition preserves StackAnvil's history, patches, build tooling, and original project credit. Miles Tech Studios' changes address repeated actor rendering work, resource decoding, chunk processing, and macOS replay preparation. See [the validation record](docs/performance-validation.md) for tests and limits. These changes target specific sources of stalls; no overall performance ranking or benchmark advantage is claimed.

**Project:** [milesalexg-tech/miles-tech-studios-bedrock](https://github.com/milesalexg-tech/miles-tech-studios-bedrock) · [Issues](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/issues) · [Edition boundaries](docs/edition.md) · [Credits](CREDITS.md)

## Build and play

The player instructions are in [site/getting-started.md](site/getting-started.md). Choose either ViaProxy beside a regular Java client, or ViaFabricPlus and its Bedrock add-on in a Fabric client. The add-on embeds ViaBedrock and CubeConverter; those libraries are not separate Fabric mods.

Install Bun, Git, and JDK 25; CubeConverter also needs JDK 17. Build the exact pinned stack with:

```bash
bun install --frozen-lockfile
bun run build all
bun run bundle
```

Build artifacts go to `dist/`. The edition client bundle is `dist/modpack/Miles-Tech-Studios-26.3.mrpack`. Import it into a launcher supporting Modrinth modpacks. It contains the verified ViaFabricPlus and add-on JARs and pins the supported Minecraft and Fabric Loader versions.

JAR filenames, Maven coordinates, Fabric mod IDs, resource namespaces, Gradle property names, and `.stackanvil/` working directories retain their existing compatibility identifiers. A filename ending in `-StackAnvil.jar` identifies the inherited build format; it does not change who maintains this edition. Use matching client JARs from the same build and keep only one ViaFabricPlus JAR installed.

[Edition releases](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/releases) will hold edition artifacts when published. Build from source while no release is available. Automatic release creation, mod-platform uploads, and website deployment are disabled. Build and website CI are supplied as [disabled templates](.github/workflow-templates/README.md). The current GitHub login cannot upload active workflows; local builds and tests were verified before publication.

## Projects and provenance

| Component | Original project |
| --- | --- |
| Patch stack and tooling | [StackAnvil/patches](https://github.com/StackAnvil/patches) |
| Bedrock protocol translation | [ViaBedrock](https://github.com/ViaVersionAddons/ViaBedrock) |
| Fabric Bedrock add-on | [viafabricplus-bedrock](https://github.com/ViaVersionAddons/viafabricplus-bedrock) |
| Resource conversion | [CubeConverter](https://github.com/oryxel1/CubeConverter) |
| Standalone proxy | [ViaProxy](https://github.com/ViaVersion/ViaProxy) |
| Pinned upstream client | [ViaFabricPlus](https://github.com/ViaVersion/ViaFabricPlus) |

`targets.json` pins upstream source commits and dependency order. `viafabricplus.json` pins the unchanged upstream Jenkins client and verifies its JAR, API JAR, and Maven POM checksums. The build uses a private local Maven directory for dependencies from the same run.

Existing [StackAnvil releases](https://github.com/StackAnvil/patches/releases), [website](https://stackanvil.pistonmaster.net/), [Maven repository](https://stackanvil-maven.pistonmaster.net/), [Javadocs](https://stackanvil-jd.pistonmaster.net/), and [CurseForge listing](https://www.curseforge.com/minecraft/mc-mods/stackanvil-bedrock-addon-for-viafabricplus) are maintained by the original StackAnvil project. They distribute upstream StackAnvil builds, not Miles Tech Studios edition builds. This edition has no configured Modrinth, CurseForge, or public Maven publication.

## Work on the patches

Read [CONTRIBUTING.md](CONTRIBUTING.md), [AGENTS.md](AGENTS.md), and [the patch workflow](docs/patch-workflow.md). Setup patches prepare compatible builds; upstreamable patches describe focused changes; deferred patches retain their original upstream PR references.

```bash
bun run stack status viabedrock
bun run stack sync viabedrock
bun run pr check viabedrock
bun run pr body viabedrock
```

The source checkouts under `.worktrees/` remain normal detached Git checkouts. Edit owning patches there and export them through `bun run stack rebuild <project>`. `pr sync` and `pr assign` are disabled in this edition to protect inherited StackAnvil fork destinations. Read-only checks, local builds, and proposed PR body generation remain available.

The [capture lab](docs/capture-lab.md) and [server replay guide](docs/server-replay.md) explain private local testing. Historical research documents retain their original StackAnvil terminology and evidence paths.

## Credit and licenses

See [CREDITS.md](CREDITS.md). The existing [LICENSE](LICENSE), upstream license files, copyright notices, patch authorship, and contributor history are preserved. Miles Tech Studios maintains this edition; it is independent of StackAnvil and ViaVersion and does not represent an official release from either project.
