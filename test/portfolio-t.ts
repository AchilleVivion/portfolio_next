import type { PortfolioT } from "@/components/portfolio/translator";
import en from "@/messages/en.json";

const portfolio = en.portfolio;

/**
 * Mirrors `getTranslations("portfolio")` enough for presentational component tests.
 */
export function portfolioTFromEnMessages(): PortfolioT {
  const t = ((
    key: string,
    values?: Record<string, string | number | Date>,
  ): string => {
    const path = key.split(".");
    let cur: unknown = portfolio;
    for (const p of path) {
      cur = (cur as Record<string, unknown>)?.[p];
    }
    if (typeof cur !== "string") return key;
    return cur.replaceAll("{year}", String(values?.year ?? new Date().getFullYear()));
  }) as PortfolioT;

  t.raw = (key: string) => {
    const path = key.split(".");
    let cur: unknown = portfolio;
    for (const p of path) {
      cur = (cur as Record<string, unknown>)?.[p];
    }
    return cur;
  };

  return t;
}
