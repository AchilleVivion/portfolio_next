export type PortfolioT = {
  (key: string, values?: Record<string, unknown>): string;
  raw: (key: string) => unknown;
};

