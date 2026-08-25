import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "vitest";
import App from "./App";
import { content } from "../i18n/content";

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
