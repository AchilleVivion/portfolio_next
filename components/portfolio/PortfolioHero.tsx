import { Github, Linkedin, Mail } from "lucide-react";
import RiveAvatar from "@/components/RiveAvatar";
import type { PortfolioT } from "@/components/portfolio/translator";

type PortfolioHeroProps = { t: PortfolioT };

export function PortfolioHero({ t }: Readonly<PortfolioHeroProps>) {
  return (
    <section className="px-6 pb-20 pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:gap-x-12 lg:gap-y-6 lg:items-center">
        <h1 className="text-5xl font-bold sm:text-6xl lg:col-start-1 lg:row-start-1">{t("hero.title")}</h1>
        <p className="text-2xl text-gray-600 lg:col-start-1 lg:row-start-2">{t("hero.subtitle")}</p>
        <div className="relative mx-auto my-6 h-[min(44vh,400px)] w-[min(100%,240px)] justify-self-center sm:my-8 sm:h-[min(48vh,440px)] sm:w-[260px] lg:col-start-2 lg:row-start-1 lg:row-span-5 lg:mx-0 lg:my-0 lg:h-[min(62vh,560px)] lg:w-[300px] lg:justify-self-end">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.42] sm:scale-[0.46] lg:scale-[0.54]">
            <RiveAvatar />
          </div>
        </div>
        <p className="max-w-2xl text-lg text-gray-500 lg:col-start-1 lg:row-start-3">{t("hero.intro")}</p>
        <div className="flex flex-wrap gap-4 lg:col-start-1 lg:row-start-4">
          <a href="#contact" className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800">{t("hero.ctaPrimary")}</a>
          <a href="#projects" className="rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:border-gray-400">{t("hero.ctaSecondary")}</a>
        </div>
        <div className="flex gap-4 lg:col-start-1 lg:row-start-5">
          <a href="#" className="text-gray-600 transition-colors hover:text-black" aria-label={t("hero.ariaGithub")}><Github size={24} /></a>
          <a href="#" className="text-gray-600 transition-colors hover:text-black" aria-label={t("hero.ariaLinkedin")}><Linkedin size={24} /></a>
          <a href="mailto:hello@johndoe.com" className="text-gray-600 transition-colors hover:text-black" aria-label={t("hero.ariaEmail")}><Mail size={24} /></a>
        </div>
      </div>
    </section>
  );
}

