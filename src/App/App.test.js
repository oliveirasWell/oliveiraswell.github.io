import React from "react";
import { getNodeText, render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const expectedText = "Wellington";
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/title/i);
  const text = getNodeText(linkElement);

  expect(text).toEqual(expectedText);
});
