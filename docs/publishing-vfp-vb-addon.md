# Edition artifact preparation

Miles Tech Studios Bedrock does not have configured mod-platform listings or automatic release publishing. The inherited StackAnvil publishing workflows are removed, and `edition.json` disables upload and upstream PR mutations.

Local validation remains available:

```bash
bun run mod:publish prepare stack-v1.0.0 path/to/viafabricplus-bedrock-manifest.json path/to/changelog.md
```

This checks the matching JAR, build manifest, Fabric metadata, and checksum and prints draft listing metadata. It does not upload. The `stack-v...` tag format and `-StackAnvil.jar` filenames are retained as compatibility identifiers.

`mod:publish modrinth` and `mod:publish curseforge` are disabled, including their exported upload functions. Do not reuse StackAnvil's credentials or project IDs. Future edition distribution must use separately configured edition destinations and preserve [original credit and licenses](../CREDITS.md).

The existing [StackAnvil Modrinth listing](https://modrinth.com/mod/stackanvil-bedrock-addon) and [StackAnvil CurseForge listing](https://www.curseforge.com/minecraft/mc-mods/stackanvil-bedrock-addon-for-viafabricplus) belong to the original StackAnvil project. They do not publish this edition. See [edition boundaries](edition.md) for build and publication behavior.
