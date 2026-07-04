import { projects } from "../assets/stack_assets/doc_assests";

const Projects = () => {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="mb-10 text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
        Things I've Built
      </h1>

      <div className="space-y-6">
        {projects.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 transition-all duration-300 hover:border-white/30"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              {data.title}
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm leading-7 text-secondary sm:text-base">
              {data.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-zinc-800 px-3 py-1 text-xs text-white transition-colors hover:border-white/40 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-5 py-3 text-center font-semibold text-black transition-transform duration-300 hover:scale-105"
              >
                GitHub
              </a>

              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-500 px-5 py-3 text-center font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
