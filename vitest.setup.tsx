import "@testing-library/jest-dom/vitest";
import type { ReactNode } from "react";
import { vi } from "vitest";
import { navMockState } from "./test/nav-mock-state";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: (query: string) => ({
    matches: query.includes("min-width: 768px"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

vi.mock("@/i18n/navigation", () => ({
  Link: ({
    children,
    href,
    locale,
    className,
    ...rest
  }: {
    children?: ReactNode;
    href: string;
    locale?: string;
    className?: string;
    [key: string]: unknown;
  }) => {
    const isHash = href.startsWith("#");
    let out: string;
    if (isHash) {
      out = locale && locale !== "en" ? `/fr${href}` : href;
    } else if (href === "/") {
      out = locale && locale !== "en" ? "/fr" : "/";
    } else {
      out = locale && locale !== "en" ? `/fr${href.startsWith("/") ? href : `/${href}`}` : href;
    }
    return (
      <a href={out} className={className} {...(rest as object)}>
        {children}
      </a>
    );
  },
  usePathname: () => navMockState.pathname,
}));

vi.mock("next-intl/server", async () => {
  const [{ portfolioTFromEnMessages }, enMod] = await Promise.all([
    import("./test/portfolio-t"),
    import("./messages/en.json"),
  ]);
  const en = enMod.default;
  return {
    getMessages: async () => en,
    getTranslations: async (arg: unknown) => {
      const ns =
        typeof arg === "string"
          ? arg
          : arg && typeof arg === "object" && arg !== null && "namespace" in arg
            ? (arg as { namespace: string }).namespace
            : undefined;
      if (ns === "meta") {
        return (k: string) => (k === "title" ? "Meta Title" : "Meta Desc");
      }
      if (ns === "portfolio") {
        return portfolioTFromEnMessages();
      }
      return Object.assign((k: string) => k, { raw: () => [] });
    },
    setRequestLocale: () => {},
  };
});
