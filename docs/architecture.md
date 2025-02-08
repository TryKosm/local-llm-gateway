# Architecture

- `src/router.ts`: deterministic provider routing and fallback strategy.
- `src/types.ts`: shared domain contracts.
- `tests/router.test.ts`: validates routing behavior under failures.

Design keeps routing policy independent from transport/API layers, so HTTP or gRPC can be added later without policy rewrites.
