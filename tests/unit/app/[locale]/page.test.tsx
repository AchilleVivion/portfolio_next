import { NextIntlClientProvider } from "next-intl";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HomePage, { generateMetadata } from "@/app/[locale]/page";
import en from "@/messages/en.json";

vi.mock("@/components/PortfolioLanding", () => ({
  PortfolioLanding: () => (
    <main data-testid="landing">
      <h1>{en.portfolio.hero.title}</h1>
    </main>
  ),
}));

describe("HomePage", () => {
  it("renders navbar and landing content", async () => {
    const tree = await HomePage({ params: Promise.resolve({ locale: "en" }) });
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        {tree}
      </NextIntlClientProvider>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(en.portfolio.hero.title);
  });
});

describe("generateMetadata", () => {
  it("returns translated meta fields", async () => {
    const meta = await generateMetadata({ params: Promise.resolve({ locale: "en" }) });
    expect(meta.title).toBe("Meta Title");
    expect(meta.description).toBe("Meta Desc");
  });
});
