import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import en from "@/messages/en.json";
import { PortfolioAbout } from "@/components/portfolio/PortfolioAbout";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioProjects } from "@/components/portfolio/PortfolioProjects";
import { PortfolioSkills } from "@/components/portfolio/PortfolioSkills";
import type { ProjectItem } from "@/components/portfolio/types";
import { portfolioTFromEnMessages } from "@/test/portfolio-t";

vi.mock("@/components/RiveAvatar", () => ({
  default: () => <div data-testid="rive-placeholder" />,
}));

const sampleProjects: ProjectItem[] = [
  {
    title: "P1",
    description: "D1",
    tags: ["A", "B"],
    href: "https://example.com",
  },
];

describe("portfolio sections", () => {
  const t = portfolioTFromEnMessages();

  it("renders PortfolioHero", () => {
    render(<PortfolioHero t={t} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      en.portfolio.hero.title,
    );
    expect(screen.getByTestId("rive-placeholder")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: en.portfolio.hero.ariaGithub })).toHaveAttribute(
      "href",
      en.portfolio.hero.githubUrl,
    );
  });

  it("renders PortfolioAbout with cards", () => {
    render(<PortfolioAbout t={t} />);
    expect(screen.getByRole("heading", { name: en.portfolio.about.heading })).toBeInTheDocument();
    expect(screen.getByText(en.portfolio.about.cards.experience.value)).toBeInTheDocument();
  });

  it("renders PortfolioProjects", () => {
    render(<PortfolioProjects t={t} projects={sampleProjects} />);
    expect(screen.getByText("P1")).toBeInTheDocument();
    expect(screen.getByText("D1")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renders PortfolioSkills", () => {
    render(<PortfolioSkills t={t} />);
    expect(screen.getByRole("heading", { name: en.portfolio.skills.heading })).toBeInTheDocument();
    expect(screen.getByText(en.portfolio.skills.frontend.items[0])).toBeInTheDocument();
  });

  it("renders PortfolioContact", () => {
    render(<PortfolioContact t={t} />);
    expect(screen.getByRole("heading", { name: en.portfolio.contact.heading })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: en.portfolio.contact.cta })).toHaveAttribute(
      "href",
      "mailto:hello@johndoe.com",
    );
  });

  it("renders PortfolioFooter with interpolated year", () => {
    render(<PortfolioFooter t={t} />);
    const y = String(new Date().getFullYear());
    expect(screen.getByText(new RegExp(y))).toBeInTheDocument();
  });
});
