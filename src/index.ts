import { routeModel } from "./router.js";
import { Provider } from "./types.js";

const providers: Provider[] = [
  { id: "local-ollama", type: "ollama", healthy: true, models: ["llama3:8b"] },
  { id: "gpu-vllm", type: "vllm", healthy: true, models: ["mixtral:8x7b"] }
];

const decision = routeModel("llama3:8b", providers);
console.log(`selected=${decision.selectedProviderId} fallback=${decision.fallbackUsed}`);
