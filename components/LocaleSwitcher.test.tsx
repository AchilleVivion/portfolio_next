import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import en from "@/messages/en.json";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { renderWithIntl } from "@/test/render-with-intl";

describe("LocaleSwitcher", () => {
  it("renders locale labels from messages", () => {
    renderWithIntl(<LocaleSwitcher />);
    expect(screen.getByRole("link", { name: en.portfolio.locale.en })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: en.portfolio.locale.fr })).toHaveAttribute("href", "/fr");
  });
});
