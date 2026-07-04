import {
  backend,
  database,
  frontend,
  languages,
  systems,
} from "../assets/stack_assets/doc_assests";

const skillCategories = [
  { title: "Programming Languages", data: languages },
  { title: "Frontend Weapons", data: frontend },
  { title: "Backend", data: backend },
  { title: "Databases", data: database },
  { title: "Systems, Security & Tools", data: systems },
];

const Skills = () => {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        Skills & Expertise
      </h1>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {category.data.map((tech) => (
                <div
                  key={tech.id}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
                >
                  {tech.link && (
                    <img
                      src={tech.link}
                      alt={tech.name}
                      className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                    />
                  )}

                  <span className="text-sm font-medium text-white transition-colors group-hover:text-blue-400 sm:text-base">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
