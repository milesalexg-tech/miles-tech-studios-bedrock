# Performance changes and validation

This record covers the Miles Tech Studios edition work validated on 10 October 2026. Original StackAnvil research and measurements remain in their owning patch notes; this record does not attribute those earlier results to the edition.

## Changes

- Source pack loading, decryption, persistence, and definition preparation run on bounded workers. Completed network downloads also verify their digest and decode their archive there, keeping expensive work off the connection event loop. Chunk receipt uses a remaining counter instead of repeatedly scanning the receipt prefix.
- Completed conversions use an LRU limited to 32 entries and 128 MiB of archive bytes plus estimated metadata. Pending conversions share their result separately. Worker queues are bounded and report overload; they never execute expensive work on the caller thread as a fallback.
- Chunk processing classifies candidate palette entries once, skips sections without connected blocks, and checks only relevant border cells. Per-connection chunk ticks reserve one queued or executing job and release that reservation after completion or rejection.
- Actor draws reuse stable snapshot results in a 1,024-entry LRU. Effect locator lookup indexes models once per accepted resource generation. Animated poses, expressions, scale, and yaw retain their existing per-frame evaluation points.
- Private replay profiles work with macOS path aliases and portable filesystem copies. Exact environment ownership inspection handles transient Darwin process-lifetime races without printing process arguments or environments.

Changes stay in their owning patches. Selected subpacks, builtin resource layers, dimension replacement, waterlogging, doors, and cache fingerprints remain covered by the complete replayed stack.

## Validation

| Suite | Passed | Skipped | Failures/errors |
| --- | ---: | ---: | ---: |
| ViaBedrock | 1,155 | 30 | 0 |
| ViaFabricPlus Bedrock add-on | 784 | 120 | 0 |
| ViaProxy | 4 | 0 | 0 |
| CubeConverter | 18 | 0 | 0 |
| Bun tooling | 216 | 1 | 0 |
| Python process-inspection regressions | 6 | 0 | 0 |

All four generated projects build through `bun run build all` from a clean checkout with the pinned upstream client. Core Checkstyle and add-on access-widener validation pass. The standalone first resource-cache patch applies to the pinned upstream base without setup or deferred patches and passes 45 tests plus both Checkstyle tasks.

The add-on's embedded core and the proxy's shaded core match the tested core classes and resources byte for byte. Bundle checks preserve the verified ViaFabricPlus and add-on JAR bytes. Runtime manifests identify the Miles Tech Studios edition and retain original license and author metadata. The edition proxy updater exits without requesting an upstream replacement.

The regressions exercise event-loop responsiveness, queue rejection and shutdown, stale-session publication, cache eviction, invalid archives, out-of-order and duplicate chunks, palette selection, tick ownership, snapshot invalidation, and locator indexing. Clean patch replay reproduces the tested source trees.

## Limits

These checks establish correctness, bounded work, and removal of identified synchronous costs. They do not measure live-server frame times, FPS, or joining-time improvements. Client resource reloads and other workloads still need profiling. No claim is made that every lag spike is eliminated or that this edition is the fastest or most improved version.

Website configuration and workflow YAML were checked; local Jekyll rendering was not performed because the host Ruby differs from the site's CI runtime. CI is supplied as disabled templates because the current login cannot upload active workflows. Automatic release creation, website deployment, and mod-platform uploads remain disabled; see [edition boundaries](edition.md).
