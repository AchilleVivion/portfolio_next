import dynamic from 'next/dynamic'
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

const RiveAvatar = dynamic(
    () => import('@/components/RiveAvatar'),
    { ssr: false } 
);

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export async function PortfolioLanding() {
  const t = await getTranslations("portfolio");
  const projects = t.raw("projects.items") as ProjectItem[];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#" className="text-xl font-semibold">
            {t("nav.brand")}
          </a>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <div className="flex flex-wrap gap-6 md:gap-8">
              <a
                href="#about"
                className="transition-colors hover:text-gray-600"
              >
                {t("nav.about")}
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-gray-600"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#skills"
                className="transition-colors hover:text-gray-600"
              >
                {t("nav.skills")}
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-gray-600"
              >
                {t("nav.contact")}
              </a>
            </div>
            <LocaleSwitcher />
          </div>
        </div>
      </nav>

      <section className="px-6 pb-20 pt-32">
        <RiveAvatar />
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-6xl font-bold">{t("hero.title")}</h1>
          <p className="mb-8 text-2xl text-gray-600">{t("hero.subtitle")}</p>
          <p className="mb-8 max-w-2xl text-lg text-gray-500">
            {t("hero.intro")}
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
            >
              {t("hero.ctaPrimary")}
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:border-gray-400"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label={t("hero.ariaGithub")}
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label={t("hero.ariaLinkedin")}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@johndoe.com"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label={t("hero.ariaEmail")}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-bold">{t("about.heading")}</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-lg text-gray-600">{t("about.p1")}</p>
              <p className="text-lg text-gray-600">{t("about.p2")}</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">
                  {t("about.cards.experience.title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.cards.experience.value")}
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">
                  {t("about.cards.location.title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.cards.location.value")}
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">
                  {t("about.cards.availability.title")}
                </h3>
                <p className="text-gray-600">
                  {t("about.cards.availability.value")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">{t("projects.heading")}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 h-48 rounded-lg bg-gray-100" />
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="flex items-center gap-2 text-black transition-colors hover:text-gray-600"
                >
                  {t("projects.viewProject")} <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">{t("skills.heading")}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                {t("skills.frontend.title")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {(t.raw("skills.frontend.items") as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                {t("skills.backend.title")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {(t.raw("skills.backend.items") as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                {t("skills.tools.title")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {(t.raw("skills.tools.items") as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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

      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-gray-600">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
}
