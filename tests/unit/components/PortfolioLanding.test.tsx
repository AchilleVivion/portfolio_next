import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import en from "@/messages/en.json";
import { PortfolioLanding } from "@/components/PortfolioLanding";

describe("PortfolioLanding", () => {
  it("composes portfolio sections", async () => {
    const ui = await PortfolioLanding();
    render(ui);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      en.portfolio.hero.title,
    );
    expect(screen.getByRole("heading", { name: en.portfolio.projects.heading })).toBeInTheDocument();
  });
});
