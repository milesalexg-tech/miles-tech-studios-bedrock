---
layout: default
title: Downloads
nav_order: 3
description: Build or download Miles Tech Studios edition artifacts with compatible StackAnvil JAR names.
---

# Edition downloads

[Edition releases](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/releases) will contain edition artifacts when published. Until then, follow [build from source]({{ '/build-from-source/' | relative_url }}). CI test artifacts are not published releases. Automatic release creation and platform uploads are disabled.

## Fabric client

Import `Miles-Tech-Studios-26.3.mrpack` into a launcher supporting Modrinth modpacks. It includes the verified ViaFabricPlus and Bedrock add-on JARs and the supported Minecraft and Fabric Loader pins.

For manual installation, use both `ViaFabricPlus-...jar` and `viafabricplus-bedrock-...-StackAnvil.jar` from the same edition build. Keep one ViaFabricPlus JAR installed. The add-on embeds ViaBedrock and CubeConverter; do not install those libraries as separate Fabric mods.

## ViaProxy and libraries

Run `ViaProxy-...-StackAnvil.jar` as a separate proxy beside a regular Java client. Developer builds also provide `ViaBedrock-...-StackAnvil.jar` and `cubeconverter-...-StackAnvil.jar`.

These internal filenames preserve compatibility with the original stack. Miles Tech Studios branding identifies the distribution; original component names, credit, and licenses remain unchanged.

## Upstream resources

The [original StackAnvil releases](https://github.com/StackAnvil/patches/releases), [Modrinth listing](https://modrinth.com/mod/stackanvil-bedrock-addon), [CurseForge listing](https://www.curseforge.com/minecraft/mc-mods/stackanvil-bedrock-addon-for-viafabricplus), [Maven repository](https://stackanvil-maven.pistonmaster.net/), and [Javadocs](https://stackanvil-jd.pistonmaster.net/) belong to the original project. They distribute and document original StackAnvil builds, not this edition. No edition platform listing or public Maven repository is configured.
