import { afterEach, beforeEach, expect, test, vi } from "vitest";

const sentryInit = vi.fn();

vi.mock("@sentry/react", () => ({
  init: sentryInit,
}));

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({ render: vi.fn() })),
}));

beforeEach(() => {
  vi.resetModules();
  vi.unstubAllEnvs();
  sentryInit.mockClear();
  document.body.innerHTML = '<div id="root"></div>';
});

afterEach(() => {
  vi.unstubAllEnvs();
});

test("renders the app without initializing Sentry when VITE_SENTRY_DSN is unset", async () => {
  vi.stubEnv("VITE_SENTRY_DSN", "");

  await import("./main.jsx");

  expect(sentryInit).not.toHaveBeenCalled();
});

test("initializes Sentry when VITE_SENTRY_DSN is set", async () => {
  const dsn = "https://examplePublicKey@o0.ingest.sentry.io/0";
  vi.stubEnv("VITE_SENTRY_DSN", dsn);

  await import("./main.jsx");

  expect(sentryInit).toHaveBeenCalledWith(
    expect.objectContaining({ dsn, environment: expect.any(String) }),
  );
});
