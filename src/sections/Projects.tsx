import { projects } from "../assets/stack_assets/doc_assests";

const Projects = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center font-semibold">Things I've Built</h1>
      <div className="flex flex-col gap-y-4 mt-4">
        {projects.map((data) => (
          <div
            className="bg-[#2A2A2A]/50 border border-[#7B7B7B]/20 px-4 py-2 rounded-xl hover:border-[#FFFFFF]/40 transition-colors flex flex-col gap-y-2 place-content-center m-2"
            key={data.id}
          >
            <h1 className="text-xl font-semibold">{data.title}</h1>
            <p className="text-sm text-gray-400">{data.description}</p>
            <div>
              {data.techStack.map((elem) => (
                <div className="inline-table space-x-2 space-y-2" key={elem}>
                  <p
                    className="bg-[#2A2A2A]/50 border border-[#7B7B7B]/20 px-2 py-1 rounded-xl hover:border-[#FFFFFF]/40 transition-colors place-content-center text-sm"
                    key={elem}
                  >
                    {elem}
                  </p>
                </div>
              ))}
              <div className="mt-4 flex flex-row gap-x-4">
                <button className="bg-white text-background p-3 text-lg font-semibold rounded-md hover:scale-105">
                  <a
                    href={`${data.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
                <button className="bg-blue-400 text-white p-3 text-lg font-semibold rounded-md hover:scale-105">
                  <a
                    href={`${data.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
