import { describe, expect, it, vi } from "vitest";

vi.mock("next-intl/middleware", () => ({
  default: () => () => undefined,
}));

import middleware, { config } from "@/proxy";

describe("proxy (next-intl middleware)", () => {
  it("exports matcher for non-static routes", () => {
    expect(config.matcher).toEqual(["/((?!api|_next|_vercel|.*\\..*).*)"]);
  });

  it("exports middleware factory", () => {
    expect(typeof middleware).toBe("function");
  });
});
