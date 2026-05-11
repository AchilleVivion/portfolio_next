import { Mail } from "lucide-react";
import type { PortfolioT } from "@/components/portfolio/translator";

type PortfolioContactProps = { t: PortfolioT };

export function PortfolioContact({ t }: PortfolioContactProps) {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-4xl font-bold">{t("contact.heading")}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          {t("contact.body")}
        </p>
        <a
          href="mailto:hello@johndoe.com"
          className="inline-flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-white transition-colors hover:bg-gray-800"
        >
          <Mail size={20} />
          {t("contact.cta")}
        </a>
      </div>
    </section>
  );
}

