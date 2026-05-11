import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export async function PortfolioNavbar() {
  const t = await getTranslations("portfolio.nav");

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="text-xl font-semibold">
          {t("brand")}
        </a>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <div className="flex flex-wrap gap-6 md:gap-8">
            <a
              href="#about"
              className="transition-colors hover:text-gray-600"
            >
              {t("about")}
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-gray-600"
            >
              {t("projects")}
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-gray-600"
            >
              {t("skills")}
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-gray-600"
            >
              {t("contact")}
            </a>
          </div>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
