import { ExternalLink } from "lucide-react";
import type { ProjectItem } from "@/components/portfolio/types";
import type { PortfolioT } from "@/components/portfolio/translator";

type PortfolioProjectsProps = {
  t: PortfolioT;
  projects: ProjectItem[];
};

export function PortfolioProjects({ t, projects }: Readonly<PortfolioProjectsProps>) {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-4xl font-bold">{t("projects.heading")}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 h-48 rounded-lg bg-gray-100" />
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="flex items-center gap-2 text-black transition-colors hover:text-gray-600">
                {t("projects.viewProject")} <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

