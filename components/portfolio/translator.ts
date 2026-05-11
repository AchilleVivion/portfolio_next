/** Matches next-intl `Translator` rich values (see build type errors for `getTranslations`). */
export type PortfolioT = {
  (key: string, values?: Record<string, string | number | Date>): string;
  raw: (key: string) => unknown;
};

