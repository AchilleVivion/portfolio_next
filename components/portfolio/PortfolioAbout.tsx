import type { PortfolioT } from "@/components/portfolio/translator";

type PortfolioAboutProps = { t: PortfolioT };

export function PortfolioAbout({ t }: Readonly<PortfolioAboutProps>) {
  const cards = [
    { title: t("about.cards.experience.title"), value: t("about.cards.experience.value") },
    { title: t("about.cards.location.title"), value: t("about.cards.location.value") },
    { title: t("about.cards.availability.title"), value: t("about.cards.availability.value") },
  ];
  return (
    <section id="about" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-4xl font-bold">{t("about.heading")}</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-gray-600">{t("about.p1")}</p>
            <p className="text-lg text-gray-600">{t("about.p2")}</p>
          </div>
          <div className="space-y-4">
            {cards.map((c) => (
              <div key={c.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">{c.title}</h3>
                <p className="text-gray-600">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

