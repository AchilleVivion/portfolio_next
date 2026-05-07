import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

export function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-semibold">
            Portfolio
          </a>
          <div className="flex gap-8">
            <a
              href="#about"
              className="transition-colors hover:text-gray-600"
            >
              About
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-gray-600"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-gray-600"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-6xl font-bold">Hi, I&apos;m Achille</h1>
          <p className="mb-8 text-2xl text-gray-600">
            Full Stack Developer &amp; Designer
          </p>
          <p className="mb-8 max-w-2xl text-lg text-gray-500">
            I build beautiful, functional web applications that solve real
            problems. Passionate about clean code, intuitive design, and
            creating exceptional user experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:border-gray-400"
            >
              View my work
            </a>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@johndoe.com"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-bold">About Me</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-lg text-gray-600">
                I&apos;m a passionate developer with 5+ years of experience
                building modern web applications. I specialize in React,
                TypeScript, and Node.js, with a keen eye for design and user
                experience.
              </p>
              <p className="text-lg text-gray-600">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open source, or sharing knowledge
                through technical writing and mentorship.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">Experience</h3>
                <p className="text-gray-600">5+ years in web development</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">Availability</h3>
                <p className="text-gray-600">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A full-featured online store with payment integration, inventory management, and admin dashboard.",
                tags: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative project management tool with real-time updates and team collaboration features.",
                tags: ["TypeScript", "React", "Firebase"],
              },
              {
                title: "Weather Dashboard",
                description:
                  "Beautiful weather app with forecasts, interactive maps, and location-based alerts.",
                tags: ["React", "API Integration", "Charts"],
              },
            ].map((project) => (
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
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">Skills &amp; Technologies</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React &amp; Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML/CSS/JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js &amp; Express</li>
                <li>PostgreSQL &amp; MongoDB</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Tools &amp; Others</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git &amp; GitHub</li>
                <li>Docker</li>
                <li>AWS &amp; Vercel</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-4xl font-bold">Let&apos;s Work Together</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
          <a
            href="mailto:hello@johndoe.com"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-white transition-colors hover:bg-gray-800"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-gray-600">
          <p>&copy; 2026 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
