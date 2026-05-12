import type { PortfolioT } from "@/components/portfolio/translator";

type PortfolioSkillsProps = { t: PortfolioT };

export function PortfolioSkills({ t }: Readonly<PortfolioSkillsProps>) {
  const cols = [
    { title: t("skills.frontend.title"), items: t.raw?.("skills.frontend.items") as string[] },
    { title: t("skills.backend.title"), items: t.raw?.("skills.backend.items") as string[] },
    { title: t("skills.tools.title"), items: t.raw?.("skills.tools.items") as string[] },
  ];

  return (
    <section id="skills" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold">{t("skills.heading")}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="mb-4 text-xl font-semibold">{c.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {(c.items || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

