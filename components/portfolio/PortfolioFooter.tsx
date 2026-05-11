import type { PortfolioT } from "@/components/portfolio/translator";

type PortfolioFooterProps = { t: PortfolioT };

export function PortfolioFooter({ t }: PortfolioFooterProps) {
  return (
    <footer className="border-t border-gray-200 px-6 py-8">
      <div className="mx-auto max-w-6xl text-center text-gray-600">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}

