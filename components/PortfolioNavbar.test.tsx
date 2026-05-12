import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import en from "@/messages/en.json";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { renderWithIntl } from "@/test/render-with-intl";

describe("PortfolioNavbar", () => {
  it("renders brand and desktop nav links", () => {
    renderWithIntl(<PortfolioNavbar />);
    expect(screen.getByRole("link", { name: en.portfolio.nav.brand })).toBeInTheDocument();
    const aboutLinks = screen.getAllByRole("link", { name: en.portfolio.nav.about });
    expect(aboutLinks[0]).toHaveAttribute("href", "#about");
    const projectLinks = screen.getAllByRole("link", { name: en.portfolio.nav.projects });
    expect(projectLinks[0]).toHaveAttribute("href", "#projects");
  });

  it("opens and closes mobile menu", async () => {
    const user = userEvent.setup();
    const mm = vi.spyOn(window, "matchMedia").mockImplementation((query: string) => ({
      matches: !query.includes("min-width: 768px"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    renderWithIntl(<PortfolioNavbar />);
    const openBtn = screen.getAllByRole("button", { name: en.portfolio.nav.menuOpen })[0];
    await user.click(openBtn);
    expect(screen.getByRole("button", { name: en.portfolio.nav.menuClose })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("button", { name: en.portfolio.nav.menuClose })).not.toBeInTheDocument(),
    );
    mm.mockRestore();
  });
});
