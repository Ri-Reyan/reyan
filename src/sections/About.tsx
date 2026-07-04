const About = () => {
  return (
    <div className="mx-auto mt-6 w-full max-w-4xl space-y-6 px-4 sm:px-6 lg:px-0">
      <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-relaxed text-white">
        I design beautifully simple things. Specializing in building secure,
        scalable, and production-ready web applications.
      </p>

      <p className="text-base sm:text-lg leading-8 text-secondary">
        As a MERN Stack Developer, I build responsive, user-friendly web
        applications with React and Tailwind CSS, backed by scalable APIs using
        Node.js, Express, and MongoDB. I enjoy creating clean, performant, and
        secure solutions with a strong focus on authentication, validation, and
        user experience.
      </p>

      <div className="border-t border-secondary/20 pt-8">
        <p className="text-base sm:text-lg leading-8 text-secondary">
          When I’m not debugging code or writing APIs, you’ll likely find me
          diving into{" "}
          <span className="font-medium text-white">Linux environments</span>,
          pushing my logical limits with{" "}
          <span className="font-medium text-white">
            competitive programming and algorithmic problem solving
          </span>
          . In my free time, I also love experimenting with{" "}
          <span className="font-medium text-white">
            C/C++ for IoT automation and hardware microcontrollers
          </span>
          . I believe stepping beyond the traditional web stack helps sharpen my
          engineering mindset for solving complex real-world problems.
        </p>

        <h4 className="mt-10 mb-6 text-xl sm:text-2xl font-semibold text-white">
          ⚡ Check Out My Technical Milestones
        </h4>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Wokwi */}
          <a
            href={import.meta.env.VITE_WOKWI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-lg font-semibold uppercase tracking-wide text-white">
                Wokwi IoT Profile
              </h5>

              <span className="text-sm text-secondary transition-colors group-hover:text-white">
                Explore ↗
              </span>
            </div>

            <p className="text-sm sm:text-base leading-7 text-secondary">
              Explore my IoT simulations, embedded systems projects, and smart
              automation circuits built with C/C++ on Wokwi.
            </p>
          </a>

          {/* HackerRank */}
          <a
            href={import.meta.env.VITE_HACKERRANK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-lg font-semibold uppercase tracking-wide text-white">
                HackerRank
              </h5>

              <span className="text-sm text-secondary transition-colors group-hover:text-white">
                Track ↗
              </span>
            </div>

            <p className="text-sm sm:text-base leading-7 text-secondary">
              Follow my progress in algorithms, data structures, and competitive
              programming through my HackerRank profile.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
