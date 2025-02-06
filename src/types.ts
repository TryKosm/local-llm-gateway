export type ProviderType = "ollama" | "openai-compatible" | "vllm";

export interface Provider {
  id: string;
  type: ProviderType;
  healthy: boolean;
  models: string[];
}

export interface RouteDecision {
  selectedProviderId: string;
  fallbackUsed: boolean;
}
