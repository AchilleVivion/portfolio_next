"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useId, useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

const NAV_LINKS = [
  { href: "#about", msg: "about" as const },
  { href: "#projects", msg: "projects" as const },
  { href: "#skills", msg: "skills" as const },
  { href: "#contact", msg: "contact" as const },
];

export function PortfolioNavbar() {
  const t = useTranslations("portfolio.nav");
  const menuId = useId();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    onChange();
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="text-xl font-semibold">
          {t("brand")}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-8">
            {NAV_LINKS.map(({ href, msg }) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-gray-600"
              >
                {t(msg)}
              </a>
            ))}
          </div>
          <LocaleSwitcher />
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? t("menuClose") : t("menuOpen")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      <div
        id={menuId}
        className={`md:hidden border-t border-gray-200 bg-white/95 px-6 py-4 shadow-sm ${
          open ? "flex flex-col gap-4" : "hidden"
        }`}
      >
        {NAV_LINKS.map(({ href, msg }) => (
          <a
            key={href}
            href={href}
            className="py-1 text-lg transition-colors hover:text-gray-600"
            onClick={close}
          >
            {t(msg)}
          </a>
        ))}
        <div className="flex w-full justify-center pt-2">
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
