---
layout: default
title: Projects
nav_order: 5
description: Four patch targets and the pinned upstream ViaFabricPlus build.
---

This Miles Tech Studios edition is based on [StackAnvil](https://github.com/StackAnvil/patches). Original licenses and credit remain intact; internal StackAnvil names are compatibility identifiers. Automated upstream PR and platform publishing are disabled.

# Projects
{: .no_toc }

The edition retains StackAnvil's patch files and source history. Generated source checkouts stay under `.worktrees/` on your machine.

| Project | Upstream | JDK | Build command |
| --- | --- | --- | --- |
| ViaBedrock | [ViaVersionAddons/ViaBedrock](https://github.com/ViaVersionAddons/ViaBedrock) | 25 | `bun run build viabedrock` |
| ViaFabricPlus Bedrock add-on | [ViaVersionAddons/viafabricplus-bedrock](https://github.com/ViaVersionAddons/viafabricplus-bedrock) | 25 | `bun run build viafabricplus-bedrock` |
| CubeConverter | [oryxel1/CubeConverter](https://github.com/oryxel1/CubeConverter/tree/vv-json) | 17 | `bun run build cubeconverter` |
| ViaProxy | [ViaVersion/ViaProxy](https://github.com/ViaVersion/ViaProxy) | 25 | `bun run build viaproxy` |

## On this page
{: .no_toc .text-delta }

- TOC
{:toc}

## ViaBedrock

The [ViaBedrock patch series](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/tree/main/patches/viabedrock) is the core of the Bedrock work. Its initial focused upstream PRs include [#420](https://github.com/ViaVersionAddons/ViaBedrock/pull/420), [#425](https://github.com/ViaVersionAddons/ViaBedrock/pull/425), [#427](https://github.com/ViaVersionAddons/ViaBedrock/pull/427), and [#429](https://github.com/ViaVersionAddons/ViaBedrock/pull/429).

## ViaFabricPlus Bedrock add-on

Edition artifacts come from the [edition releases](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/releases), when available. Existing StackAnvil platform listings are upstream resources, not edition downloads. The [player guide]({{ '/getting-started/' | relative_url }}) explains installation and connection steps.

The [add-on patch series](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/tree/main/patches/viafabricplus-bedrock) connects Bedrock support to the Fabric client. Focused upstream PRs include [#7](https://github.com/ViaVersionAddons/viafabricplus-bedrock/pull/7), [#9](https://github.com/ViaVersionAddons/viafabricplus-bedrock/pull/9), and [#11](https://github.com/ViaVersionAddons/viafabricplus-bedrock/pull/11).

## CubeConverter

The [CubeConverter patch series](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/tree/main/patches/cubeconverter) builds a library used by ViaBedrock. It builds before dependent projects.

## ViaFabricPlus

The inherited build downloads [upstream Jenkins build 2261](https://ci.viaversion.com/job/ViaFabricPlus/2261/) for the Bedrock add-on. The [pin](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/blob/main/viafabricplus.json) records its commit and checksums. Run `bun run build viafabricplus` to download and verify it. This command does not build ViaFabricPlus source.

## ViaProxy

The [ViaProxy patch series](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/tree/main/patches/viaproxy) builds against the patched ViaBedrock dependency.

The patch dependency order and upstream commits live in [`targets.json`](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/blob/main/targets.json).

For published artifact coordinates and API references, see [Maven and Javadocs]({{ '/libraries/' | relative_url }}).
