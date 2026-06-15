import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Dashboard from "../Dashboard";

test("renders loading state", () => {
  render(<Dashboard />);

  expect(
    screen.getByText(/Loading Dashboard Data/i)
  ).toBeInTheDocument();
});