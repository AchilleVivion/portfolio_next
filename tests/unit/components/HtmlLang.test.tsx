import { waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HtmlLang } from "@/components/HtmlLang";
import { renderWithIntl } from "@/tests/support/render-with-intl";

describe("HtmlLang", () => {
  it("sets document.documentElement.lang from locale", async () => {
    const prev = document.documentElement.lang;
    renderWithIntl(<HtmlLang />, "fr");
    await waitFor(() => {
      expect(document.documentElement.lang).toBe("fr");
    });
    document.documentElement.lang = prev;
  });
});
