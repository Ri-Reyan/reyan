import {
  backend,
  database,
  frontend,
  languages,
  systems,
} from "../assets/stack_assets/doc_assests";

const Skills = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center font-bold">Skills & Expertise</h1>
      <div className="space-y-12">
        {/* Category 1: Programming language */}
        <div className="mt-6 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-[#FFFFFF] mb-4">
            Programming languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((tech) => (
              <div
                className=" bg-[#2A2A2A]/50 border border-[#7B7B7B]/20 px-4 py-2 rounded-xl hover:border-[#FFFFFF]/40 transition-colors flex flex-row gap-x-1.5 place-content-center"
                key={tech.id}
              >
                {tech.link && (
                  <img className="h-5 w-5" src={tech.link} alt={tech.name} />
                )}
                <span className="text-sm md:text-sm font-medium text-[#FFFFFF] hover:text-blue-400 hover:scale-105">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Category 2: Frontend */}
        <div>
          <h3 className="text-lg md:text-xl text-center font-semibold text-[#FFFFFF] mb-4">
            Frontend Weapons
          </h3>
          <div className="flex flex-wrap gap-3">
            {frontend.map((tech) => (
              <div
                className=" bg-[#2A2A2A]/50 border border-[#7B7B7B]/20 px-4 py-2 rounded-xl hover:border-[#FFFFFF]/40 transition-colors flex flex-row gap-x-1.5 place-content-center"
                key={tech.id}
              >
                {tech.link && (
                  <img className="h-5 w-5" src={tech.link} alt={tech.name} />
                )}
                <span className="text-sm md:text-sm font-medium text-[#FFFFFF] hover:text-blue-400 hover:scale-105">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Backend */}
        <div>
          <h3 className="text-lg md:text-xl text-center font-semibold text-[#FFFFFF] mb-4">
            Backend
          </h3>
          <div className="flex flex-wrap gap-3">
            {backend.map((tech) => (
              <div
                className=" bg-[#2A2A2A]/50 border border-[#7B7B7B]/20 px-4 py-2 rounded-xl hover:border-[#FFFFFF]/40 transition-colors flex flex-row gap-x-1.5 place-content-center"
                key={tech.id}
              >
                {tech.link && (
                  <img className="h-5 w-5" src={tech.link} alt={tech.name} />
                )}
                <span className="text-sm md:text-sm font-medium text-[#FFFFFF] hover:text-blue-400 hover:scale-105">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Category 4: Database */}
        <div>
          <h3 className="text-lg md:text-xl text-center font-semibold text-[#FFFFFF] mb-4">
            Databases
          </h3>
          <div className="flex flex-wrap gap-3">
            {database.map((tech) => (
              <div
                className=" bg-[#2A2A2A]/50 border border-[#7B7B7B]/20 px-4 py-2 rounded-xl hover:border-[#FFFFFF]/40 transition-colors flex flex-row gap-x-1.5 place-content-center"
                key={tech.id}
              >
                {tech.link && (
                  <img className="h-5 w-5" src={tech.link} alt={tech.name} />
                )}
                <span className="text-sm md:text-sm font-medium text-[#FFFFFF] hover:text-blue-400 hover:scale-105">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category 5: Tools & Systems */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#FFFFFF] mb-4">
            Systems, Security & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {systems.map((tech) => (
              <div
                className=" bg-[#2A2A2A]/50 border border-[#7B7B7B]/20 px-4 py-2 rounded-xl hover:border-[#FFFFFF]/40 transition-colors flex flex-row gap-x-1.5 place-content-center"
                key={tech.id}
              >
                {tech.link && (
                  <img className="h-5 w-5" src={tech.link} alt={tech.name} />
                )}
                <span className="text-sm md:text-sm font-medium text-[#FFFFFF] hover:text-blue-400 hover:scale-105">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
