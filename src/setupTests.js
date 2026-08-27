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

