"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("portfolio.locale");
  const tNav = useTranslations("portfolio.nav");

  return (
    <div
      role="group"
      aria-label={tNav("switchLang")}
      className="flex w-fit max-w-full shrink-0 items-center gap-1 self-center rounded-full border border-gray-200 bg-white/90 px-1 py-1 text-sm shadow-sm"
    >
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={`rounded-full px-3 py-1 transition-colors ${
            locale === loc
              ? "bg-black text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          prefetch={false}
        >
          {t(loc)}
        </Link>
      ))}
    </div>
  );
}
