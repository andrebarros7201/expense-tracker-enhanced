import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/header/header";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Expense Tracker",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Monthly Budget" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Investment Calculator" }),
    ).toBeInTheDocument();
  });
});
