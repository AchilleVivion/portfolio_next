import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import RootLayout from "@/app/layout";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans", subsets: ["latin"] }),
  Geist_Mono: () => ({ variable: "--font-geist-mono", subsets: ["latin"] }),
}));

vi.mock("@vercel/analytics/next", () => ({
  Analytics: () => <span data-testid="analytics" />,
}));

vi.mock("@vercel/speed-insights/next", () => ({
  SpeedInsights: () => <span data-testid="speed-insights" />,
}));

describe("RootLayout", () => {
  it("renders children and instrumentation slots", () => {
    render(
      <RootLayout>
        <main>app body</main>
      </RootLayout>,
    );
    expect(screen.getByRole("main")).toHaveTextContent("app body");
    expect(screen.getByTestId("analytics")).toBeInTheDocument();
    expect(screen.getByTestId("speed-insights")).toBeInTheDocument();
  });
});
