import test from "node:test";
import assert from "node:assert/strict";
import { routeModel } from "../src/router.js";
import { Provider } from "../src/types.js";

test("routes to primary healthy provider", () => {
  const providers: Provider[] = [
    { id: "p1", type: "ollama", healthy: true, models: ["llama3:8b"] }
  ];
  const decision = routeModel("llama3:8b", providers);
  assert.equal(decision.selectedProviderId, "p1");
  assert.equal(decision.fallbackUsed, false);
});

test("falls back to secondary provider", () => {
  const providers: Provider[] = [
    { id: "p1", type: "ollama", healthy: false, models: ["llama3:8b"] },
    { id: "p2", type: "vllm", healthy: true, models: ["mixtral"] }
  ];
  const decision = routeModel("llama3:8b", providers);
  assert.equal(decision.selectedProviderId, "p2");
  assert.equal(decision.fallbackUsed, true);
});
