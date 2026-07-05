import { certificate } from "../assets/stack_assets/doc_assests";
import medal_logo from "../assets/star-medal.png";

const Certificate = () => {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        Certifications
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificate.map((data) => (
          <a
            key={data.title}
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <img
              src={medal_logo}
              alt={data.title}
              className="mb-5 h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            />

            <h2 className="text-lg font-semibold text-white">{data.title}</h2>

            <p className="mt-2 text-sm text-secondary">
              {data.org ? data.org : " "}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">
                ✓ Verified
              </span>

              <span className="text-sm text-blue-400 transition-colors group-hover:text-white">
                View ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
