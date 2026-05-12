import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LocaleLayout from "@/app/[locale]/layout";

describe("LocaleLayout", () => {
  it("wraps children with intl provider", async () => {
    const tree = await LocaleLayout({
      children: <span data-testid="child">inside</span>,
      params: Promise.resolve({ locale: "en" }),
    });
    render(tree);
    expect(screen.getByTestId("child")).toHaveTextContent("inside");
  });
});
