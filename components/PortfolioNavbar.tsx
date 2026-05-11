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

type T = (key: string) => string;

function NavItems({
  t,
  className,
  onClick,
}: { t: T; className: string; onClick?: () => void }) {
  return NAV_LINKS.map(({ href, msg }) => (
    <a key={href} href={href} className={className} onClick={onClick}>
      {t(msg)}
    </a>
  ));
}

function DesktopNav({ t }: { t: T }) {
  return (
    <div className="hidden items-center gap-8 md:flex">
      <div className="flex gap-8">
        <NavItems t={t} className="transition-colors hover:text-gray-600" />
      </div>
      <LocaleSwitcher />
    </div>
  );
}

function MobileNav({
  t,
  menuId,
  open,
  onClose,
}: { t: T; menuId: string; open: boolean; onClose: () => void }) {
  return (
    <div
      id={menuId}
      className={`md:hidden border-t border-gray-200 bg-white/95 px-6 py-4 shadow-sm ${
        open ? "flex flex-col gap-4" : "hidden"
      }`}
    >
      <NavItems t={t} className="py-1 text-lg transition-colors hover:text-gray-600" onClick={onClose} />
      <div className="pt-2">
        <LocaleSwitcher />
      </div>
    </div>
  );
}

export function PortfolioNavbar() {
  const t = useTranslations("portfolio.nav");
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useEffect(() => { if (!open) return; const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && close(); const prev = document.body.style.overflow; document.body.style.overflow = "hidden"; window.addEventListener("keydown", onKeyDown); return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = prev; }; }, [open, close]);
  useEffect(() => { const mq = window.matchMedia("(min-width: 768px)"); const onChange = () => mq.matches && setOpen(false); mq.addEventListener("change", onChange); onChange(); return () => mq.removeEventListener("change", onChange); }, []);
  return (<nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"><a href="#" className="text-xl font-semibold">{t("brand")}</a><DesktopNav t={t} /><button type="button" className="rounded-lg p-2 text-gray-800 transition-colors hover:bg-gray-100 md:hidden" aria-expanded={open} aria-controls={menuId} aria-label={open ? t("menuClose") : t("menuOpen")} onClick={() => setOpen((v) => !v)}>{open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}</button></div><MobileNav t={t} menuId={menuId} open={open} onClose={close} /></nav>);
}
