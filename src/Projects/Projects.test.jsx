import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Projects } from "./Projects";
import { projectGroups } from "./projects";
import { content } from "../i18n/content";

const items = projectGroups.flatMap((group) => group.items);

// Titles carry regex metacharacters ("under $5"), so match on them literally.
const literal = (text) =>
  new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

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
  render(<Projects titles={content.pt.projectGroups} language="pt" />);

  items.forEach((item) => {
    expect(
      screen.getByRole("link", { name: literal(item.title) }),
    ).toHaveAttribute("href", item.link);
    expect(screen.getByText(item.description.pt)).toBeInTheDocument();
  });

  expect(screen.queryByText(items[0].description.en)).not.toBeInTheDocument();
});

test("shows a thumbnail on the experience cards and none on the rest", () => {
  const [experience, projects] = projectGroups;

  experience.items.forEach((item) => expect(item.image).toBeTruthy());
  projects.items.forEach((item) => expect(item.image).toBeUndefined());
});

test("the thumbnail stays out of the link's accessible name", () => {
  render(<Projects titles={content.en.projectGroups} language="en" />);

  const card = screen.getByRole("link", {
    name: literal("Popmenu for Owners"),
  });
  const thumb = card.querySelector("img");

  expect(thumb).toBeInTheDocument();
  // A described alt would be appended to the whole card's name, which already
  // carries the title, the description and every tool.
  expect(thumb).toHaveAttribute("alt", "");
});
