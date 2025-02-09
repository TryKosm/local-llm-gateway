import { Provider, RouteDecision } from "./types.js";

export function routeModel(model: string, providers: Provider[]): RouteDecision {
  const primary = providers.find((p) => p.models.includes(model));
  if (primary && primary.healthy) {
    return { selectedProviderId: primary.id, fallbackUsed: false };
  }

  const fallback = providers.find((p) => p.healthy && p.models.length > 0);
  if (!fallback) {
    throw new Error("No healthy providers available");
  }

  return { selectedProviderId: fallback.id, fallbackUsed: true };
}
