import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";
import App from "./App";
import { calendly, content } from "../i18n/content";
import { languages } from "../i18n/useLanguage";

beforeEach(() => window.localStorage.clear());

test("renders the name in the header", () => {
  render(<App />);

  expect(screen.getByTestId("title")).toHaveTextContent("Wellington");
});

test("renders every link with an href", () => {
  render(<App />);

  const links = screen.getAllByRole("link");

  expect(links.length).toBeGreaterThan(0);
  links.forEach((link) => expect(link).toHaveAttribute("href"));
});

test.each(languages.filter((entry) => entry.code !== "en"))(
  "switches the whole page to $name",
  async ({ code, name, htmlLang }) => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: content.en.projectGroups.experience,
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name }));

    expect(
      screen.getByRole("heading", {
        name: content[code].projectGroups.experience,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content[code].linkGroups.projects }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe(htmlLang);
    expect(window.localStorage.getItem("lang")).toBe(code);
  },
);

// A missing key renders as "undefined" on the page rather than failing loudly,
// so the shapes are compared directly.
test("every language defines the same keys as english", () => {
  const shape = (value) =>
    value && !Array.isArray(value) && typeof value === "object"
      ? Object.keys(value).sort().join(",")
      : typeof value;

  languages.forEach(({ code }) => {
    Object.entries(content.en).forEach(([key, value]) => {
      expect(`${code}.${key}: ${shape(content[code][key])}`).toBe(
        `${code}.${key}: ${shape(value)}`,
      );
    });
  });
});

test("renders every link group with links under it", () => {
  render(<App />);

  Object.values(content.en.linkGroups).forEach((title) => {
    const heading = screen.getByRole("heading", { name: title });

    expect(heading.parentElement.querySelectorAll("a").length).toBeGreaterThan(
      0,
    );
  });
});

test("offers a booking link next to the e-mail", () => {
  render(<App />);

  const booking = screen.getByRole("link", { name: /book a call here/i });

  expect(booking).toHaveAttribute("href", calendly);
  expect(booking).toHaveAttribute("target", "_blank");
  // A stale ?month= would open the widget on a month that has already passed.
  expect(calendly).not.toContain("month=");
});
