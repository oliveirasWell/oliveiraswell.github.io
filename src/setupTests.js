import { beforeEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

// Node 26 defines a global `localStorage` that stays undefined without
// --localstorage-file, and it shadows the one jsdom installs. CI (Node 22) is
// unaffected, so shim it to keep the suite deterministic on both.
if (!window.localStorage) {
  const store = new Map();

  Object.defineProperty(window, "localStorage", {
    configurable: true,
    value: {
      getItem: (key) => store.get(key) ?? null,
      setItem: (key, value) => store.set(key, String(value)),
      removeItem: (key) => store.delete(key),
      clear: () => store.clear(),
    },
  });
}

// No test should reach the network. Repos swallows the rejection and renders
// nothing, which is exactly the offline behaviour; tests that care about the
// section stub fetch themselves.
beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn(() => Promise.reject(new Error("offline"))));
});
