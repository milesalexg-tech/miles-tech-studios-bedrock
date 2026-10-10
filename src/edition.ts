import { readFileSync } from "node:fs";

interface Edition {
  name: string;
  repository: string;
  upstreamRepository: string;
  bundlePrefix: string;
  mutations: { upstreamPullRequests: boolean; modPlatforms: boolean };
}

export const edition = JSON.parse(readFileSync(new URL("../edition.json", import.meta.url), "utf8")) as Edition;

/** Edition builds never write to the inherited StackAnvil forks or platform listings. */
export function assertEditionMutationAllowed(operation: "upstreamPullRequests" | "modPlatforms", destination?: string): void {
  const inherited = operation === "upstreamPullRequests"
    ? destination?.split("/")[0]?.toLowerCase() === "stackanvil"
    : destination === "opL7gK2I" || destination === "1713307";
  if (inherited) throw new Error(`${edition.name} cannot modify StackAnvil-owned repositories or listings.`);
  if (edition.mutations?.[operation] !== true) {
    throw new Error(`${edition.name} disables ${operation === "upstreamPullRequests" ? "upstream PR pushes and assignments" : "mod-platform uploads"}. StackAnvil-owned destinations remain unchanged; see docs/edition.md.`);
  }
}
