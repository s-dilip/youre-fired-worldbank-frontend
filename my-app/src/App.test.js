import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("One plus one should equal two", () => {
  expect(1 + 1).toBe(2);
});
