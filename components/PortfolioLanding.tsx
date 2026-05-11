import { getTranslations } from "next-intl/server";
import { type ProjectItem } from "@/components/portfolio/types";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioAbout } from "@/components/portfolio/PortfolioAbout";
import { PortfolioProjects } from "@/components/portfolio/PortfolioProjects";
import { PortfolioSkills } from "@/components/portfolio/PortfolioSkills";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioFooter } from "@/components/portfolio/PortfolioFooter";

export async function PortfolioLanding() {
  const t = await getTranslations("portfolio");
  const projects = t.raw("projects.items") as ProjectItem[];

  return (
    <div className="min-h-screen bg-white">
      <PortfolioHero t={t} />
      <PortfolioAbout t={t} />
      <PortfolioProjects t={t} projects={projects} />
      <PortfolioSkills t={t} />
      <PortfolioContact t={t} />
      <PortfolioFooter t={t} />
    </div>
  );
}
