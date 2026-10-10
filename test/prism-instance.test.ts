import { expect, test } from "bun:test";
import { edition } from "../src/edition.ts";

async function selectedInstances(override?: string): Promise<string[]> {
  const env = { ...process.env };
  if (override === undefined) delete env.STACKANVIL_JAVA_INSTANCE;
  else env.STACKANVIL_JAVA_INSTANCE = override;
  const installer = new URL("../src/prism.ts", import.meta.url).href;
  const lab = new URL("../src/lab/cli.ts", import.meta.url).href;
  const code = `import { prismInstance } from ${JSON.stringify(installer)};
    import { javaInstance } from ${JSON.stringify(lab)};
    console.log(JSON.stringify([prismInstance, javaInstance]));`;
  const child = Bun.spawn([process.execPath, "-e", code], { env, stdout: "pipe", stderr: "pipe" });
  const [status, stdout, stderr] = await Promise.all([child.exited, new Response(child.stdout).text(), new Response(child.stderr).text()]);
  expect(status).toBe(0);
  expect(stderr).toBe("");
  return JSON.parse(stdout);
}

test("preparation and lab launch select the same branded default without starting the lab on import", async () => {
  const name = `${edition.name} 26.3`;
  expect(await selectedInstances()).toEqual([name, name]);
});

test("preparation and lab launch retain the same explicit instance override", async () => {
  const name = "Existing custom 26.3 installation";
  expect(await selectedInstances(name)).toEqual([name, name]);
});
