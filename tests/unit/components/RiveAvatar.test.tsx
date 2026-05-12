import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import RiveAvatar from "@/components/RiveAvatar";

vi.mock("@rive-app/react-webgl2", () => ({
  useRive: () => ({
    RiveComponent: () => <div data-testid="rive-canvas" />,
    rive: { cleanup: vi.fn() },
  }),
  useStateMachineInput: () => ({ fire: vi.fn() }),
  RuntimeLoader: { setWasmUrl: vi.fn() },
}));

vi.mock("next/dynamic", () => ({
  default: (importFn: () => Promise<{ default: React.ComponentType<object> }>) => {
    const Lazy = React.lazy(importFn);
    function DynamicWrapper(props: object) {
      return (
        <Suspense fallback={<div data-testid="dynamic-fallback" />}>
          <Lazy {...props} />
        </Suspense>
      );
    }
    return DynamicWrapper;
  },
}));

describe("RiveAvatar", () => {
  it("shows loading placeholder then interactive canvas", async () => {
    render(<RiveAvatar />);
    const user = userEvent.setup();
    const btn = await screen.findByRole("button", { name: /Play avatar greeting animation/i });
    await user.click(btn);
    expect(screen.getByTestId("rive-canvas")).toBeInTheDocument();
  });
});
