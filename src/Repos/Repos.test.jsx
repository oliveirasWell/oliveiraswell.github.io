import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { Repos, pickBest } from "./Repos";
import { content } from "../i18n/content";

const repo = (name, extra = {}) => ({
  id: name,
  name,
  html_url: `https://github.com/oliveirasWell/${name}`,
  description: null,
  language: "TypeScript",
  pushed_at: "2026-08-26T00:00:00Z",
  fork: false,
  archived: false,
  ...extra,
});

test("keeps only fresh, own, non-curated repos, capped at six", () => {
  const picked = pickBest([
    repo("oliveiraswell.github.io"), // this very site
    repo("some-fork", { fork: true }),
    repo("old-thing", { archived: true }),
    repo("diario"), // already written up in the links panel
    ...Array.from({ length: 8 }, (_, i) => repo(`fresh-${i}`)),
  ]);

  expect(picked.map((r) => r.name)).toEqual([
    "fresh-0",
    "fresh-1",
    "fresh-2",
    "fresh-3",
    "fresh-4",
    "fresh-5",
  ]);
});

test("renders what GitHub returned", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([repo("radar", { description: "A radar" })]),
      }),
    ),
  );

  render(<Repos t={content.en} language="en" />);

  expect(await screen.findByText("radar")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /radar/ })).toHaveAttribute(
    "href",
    "https://github.com/oliveirasWell/radar",
  );
  expect(screen.getByText("A radar")).toBeInTheDocument();
  expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
});

test("stays out of the page when GitHub cannot be reached", () => {
  const { container } = render(<Repos t={content.en} language="en" />);

  expect(container).toBeEmptyDOMElement();
});
