---
layout: default
title: Libraries
nav_order: 5
description: Local edition dependencies and separately maintained upstream StackAnvil libraries.
---

# Libraries and original API references

The edition build uses the CubeConverter and ViaBedrock dependencies produced by the same build run in `.stackanvil/maven/`. It retains the original Maven coordinates and version suffixes for compatibility. ViaFabricPlus itself is the checksum-verified upstream Jenkins artifact recorded in `viafabricplus.json`.

No public Miles Tech Studios Maven repository is configured. Build from source to use this edition's libraries. Do not run generic upstream Gradle `publish` tasks to distribute edition artifacts; those generated tasks still describe original maintainers' destinations.

## Original StackAnvil resources

The [StackAnvil Maven repository](https://stackanvil-maven.pistonmaster.net/) and [Javadocs](https://stackanvil-jd.pistonmaster.net/) are maintained by the original StackAnvil project. Their `io.github.stackanvil` coordinates publish original StackAnvil releases, not this edition. They remain useful upstream references.

See [edition boundaries](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/blob/main/docs/edition.md), [projects]({{ '/projects/' | relative_url }}), and [credits](https://github.com/milesalexg-tech/miles-tech-studios-bedrock/blob/main/CREDITS.md).
