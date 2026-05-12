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
    <fieldset className="m-0 min-w-0 w-fit max-w-full shrink-0 self-center rounded-full border border-gray-200 bg-white/90 p-0 text-sm shadow-sm">
      <legend className="sr-only">{tNav("switchLang")}</legend>
      <div className="flex items-center gap-1 px-1 py-1">
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
    </fieldset>
  );
}
