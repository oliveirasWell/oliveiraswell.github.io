import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";
import App from "./App";
import { calendly, content } from "../i18n/content";

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

test("toggles the copy between english and portuguese", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByText(content.en.greeting)).toBeInTheDocument();

  await user.click(
    screen.getByRole("button", { name: content.en.switchLabel }),
  );

  expect(screen.getByText(content.pt.greeting)).toBeInTheDocument();
  expect(document.documentElement.lang).toBe("pt-BR");
  expect(window.localStorage.getItem("lang")).toBe("pt");
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

test("translates the link group titles", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(
    screen.getByRole("button", { name: content.en.switchLabel }),
  );

  expect(
    screen.getByRole("heading", { name: content.pt.linkGroups.projects }),
  ).toBeInTheDocument();
});

test("offers a booking link next to the e-mail", () => {
  render(<App />);

  const booking = screen.getByRole("link", { name: /Book a call/ });

  expect(booking).toHaveAttribute("href", calendly);
  expect(booking).toHaveAttribute("target", "_blank");
  // A stale ?month= would open the widget on a month that has already passed.
  expect(calendly).not.toContain("month=");
});
