import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the name in the header", () => {
  render(<App />);

  expect(screen.getByTestId("title")).toHaveTextContent("Wellington");
});

test("renders every social link with an href", () => {
  render(<App />);

  const links = screen.getAllByRole("link");

  expect(links.length).toBeGreaterThan(0);
  links.forEach((link) => expect(link).toHaveAttribute("href"));
});
