import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Projects } from "./Projects";
import { projectGroups } from "./projects";
import { content } from "../i18n/content";

const items = projectGroups.flatMap((group) => group.items);

// Titles carry regex metacharacters ("under $5"), so match on them literally.
const literal = (text) => new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

test("every project carries copy in both languages and a real link", () => {
  items.forEach((item) => {
    expect(item.title).toBeTruthy();
    expect(item.description.en).toBeTruthy();
    expect(item.description.pt).toBeTruthy();
    expect(item.tools.length).toBeGreaterThan(0);
    expect(item.link).toMatch(/^https:\/\//);
  });
});

test("every group has a title in both languages", () => {
  projectGroups.forEach((group) => {
    expect(content.en.projectGroups[group.id]).toBeTruthy();
    expect(content.pt.projectGroups[group.id]).toBeTruthy();
  });
});

test("renders each project once, in the chosen language", () => {
  render(
    <Projects titles={content.pt.projectGroups} language="pt" />,
  );

  items.forEach((item) => {
    expect(
      screen.getByRole("link", { name: literal(item.title) }),
    ).toHaveAttribute("href", item.link);
    expect(screen.getByText(item.description.pt)).toBeInTheDocument();
  });

  expect(screen.queryByText(items[0].description.en)).not.toBeInTheDocument();
});
