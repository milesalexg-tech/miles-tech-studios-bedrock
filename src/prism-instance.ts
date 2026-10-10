import { edition } from "./edition.ts";

/** Preparation and lab launch must select the same installation, including user overrides. */
export const prismInstance = process.env.STACKANVIL_JAVA_INSTANCE ?? `${edition.name} 26.3`;
