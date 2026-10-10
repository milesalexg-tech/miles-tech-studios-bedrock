import { expect, test, spyOn } from "bun:test";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { Effect } from "effect";
import { assertEditionMutationAllowed, edition } from "../src/edition.ts";
import { root } from "../src/model.ts";
import { prBody, renderPrBody, syncPr, updatePrParticipants } from "../src/pr.ts";
import { publishCurseForge, publishModrinth } from "../src/mod-publishing.ts";

test("edition PR mutation guards reject before target lookup or remote work", async () => {
  await expect(Effect.runPromise(syncPr("__missing_target__"))).rejects.toThrow(/disables upstream PR/);
  await expect(Effect.runPromise(updatePrParticipants("__missing_target__"))).rejects.toThrow(/disables upstream PR/);
  const body = renderPrBody("viabedrock", "A focused change", "Evidence", { runId: "42" });
  expect(body).toContain(`https://github.com/${edition.repository}/actions/runs/42`);
  expect(body).toContain(`https://github.com/${edition.upstreamRepository}`);
  const proposal = await Effect.runPromise(prBody("viabedrock"));
  expect(proposal).toContain(edition.repository);
});

test("inherited StackAnvil repositories and platform IDs remain protected", () => {
  const original = { ...edition.mutations };
  try {
    edition.mutations.upstreamPullRequests = true;
    edition.mutations.modPlatforms = true;
    expect(() => assertEditionMutationAllowed("upstreamPullRequests", "sTaCkAnViL/ViaBedrock")).toThrow(/cannot modify StackAnvil-owned/);
    expect(() => assertEditionMutationAllowed("modPlatforms", "opL7gK2I")).toThrow(/cannot modify StackAnvil-owned/);
    expect(() => assertEditionMutationAllowed("modPlatforms", "1713307")).toThrow(/cannot modify StackAnvil-owned/);
  } finally {
    Object.assign(edition.mutations, original);
  }
});

test("exported upload functions cannot reach the network", async () => {
  const network = spyOn(globalThis, "fetch").mockImplementation(Object.assign(() => {
    throw new Error("Upload attempted");
  }, { preconnect: fetch.preconnect }));
  const artifact = { path: "/missing.jar", file: "missing.jar", version: "1-StackAnvil", minecraft: "26.3", sha256: "invalid" };
  try {
    await expect(publishModrinth(artifact, "stack-v1", "Changes", "opL7gK2I", "unused")).rejects.toThrow(/StackAnvil-owned/);
    await expect(publishCurseForge(artifact, "stack-v1", "Changes", "1713307", "unused")).rejects.toThrow(/StackAnvil-owned/);
    await expect(publishModrinth(artifact, "stack-v1", "Changes", "new-project", "unused")).rejects.toThrow(/disables mod-platform/);
    expect(network).not.toHaveBeenCalled();
  } finally {
    network.mockRestore();
  }
});

test("publishing CLI rejects upload commands before reading artifacts", async () => {
  for (const platform of ["modrinth", "curseforge"]) {
    const child = Bun.spawn([process.execPath, join(root, "src/mod-publishing.ts"), platform,
      "stack-v1", "/does-not-exist/manifest.json", "/does-not-exist/changelog.md"], { stdout: "pipe", stderr: "pipe" });
    const [status, stderr] = await Promise.all([child.exited, new Response(child.stderr).text()]);
    expect(status).toBe(1);
    expect(stderr).toContain("disables mod-platform uploads");
    expect(stderr).not.toContain("ENOENT");
  }
});

test("edition workflows and disabled templates cannot publish releases, listings or Pages", async () => {
  let checked = 0;
  for (const location of [".github/workflows", ".github/workflow-templates"]) {
    const directory = join(root, location);
    const files = await readdir(directory).catch((error: NodeJS.ErrnoException) => {
      if (error.code === "ENOENT") return [];
      throw error;
    });
    expect(files).not.toContain("release.yml");
    expect(files).not.toContain("publish-vfp-vb-addon.yml");
    for (const file of files.filter((name) => /\.ya?ml$/.test(name))) {
      const workflow = await readFile(join(directory, file), "utf8");
      expect(workflow).not.toMatch(/contents:\s*write|pages:\s*write|id-token:\s*write/);
      expect(workflow).not.toContain("actions/deploy-pages");
      expect(workflow).not.toContain("gh release create");
      checked++;
    }
  }
  expect(checked).toBeGreaterThan(0);
});
