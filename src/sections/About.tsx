const About = () => {
  return (
    <div className="space-y-6 max-w-3xl mt-6">
      <p className="text-xl font-medium text-white tracking-tight leading-relaxed">
        I design beautifully simple things. Specializing in building secure,
        scalable, and production-ready web applications.
      </p>

      <p className="text-lg text-secondary leading-relaxed">
        As a MERN Stack Developer, I build responsive, user-friendly web
        applications with React and Tailwind CSS, backed by scalable APIs using
        Node.js, Express, and MongoDB. I enjoy creating clean, performant, and
        secure solutions with a strong focus on authentication, validation, and
        user experience.
      </p>

      <div className="mt-10 border-t border-secondary/20 pt-8">
        <p className="text-lg md:text-base text-secondary leading-relaxed">
          When I’m not debugging code or writing APIs, you’ll likely find me
          diving into{" "}
          <span className="text-[#FFFFFF] font-medium">Linux environments</span>
          , pushing my logical limits with{" "}
          <span className="text-[#FFFFFF] font-medium">
            competitive programming and algorithmic problem solving
          </span>
          . In my free time, I also love experimenting with{" "}
          <span className="text-[#FFFFFF] font-medium">
            C/C++ for IoT automation, or wires-deep into hardware
            microcontrollers
          </span>
          . I believe that breaking away from the standard web stack to solve
          puzzles or build embedded systems keeps my core engineering gears
          sharp and ready for any complex, production-ready project.
        </p>
        <br />
        <h4 className="text-lg md:text-xl font-semibold text-[#FFFFFF] mb-4">
          ⚡ Check Out My Technical Milestones
        </h4>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Wokwi Profile Card */}
          <a
            href={`${import.meta.env.VITE_WOKWI_LINK}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-[#2A2A2A]/50 border border-[#7B7B7B]/10 hover:border-[#FFFFFF]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-semibold tracking-wider text-[#FFFFFF] uppercase">
                Wokwi IoT Profile
              </span>
              <span className="text-sm text-[#7B7B7B] group-hover:text-[#FFFFFF] transition-colors">
                Explore ↗
              </span>
            </div>
            <p className="text-sm md:text-sm text-[#7B7B7B] leading-relaxed">
              IoT & Embedded Systems — Explore my hardware simulations and smart
              automation circuits built with C/C++ on Wokwi.
            </p>
          </a>

          {/* HackerRank Profile Card */}
          <a
            href={`${import.meta.env.VITE_HACKERRANK_LINK}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-[#2A2A2A]/50 border border-[#7B7B7B]/10 hover:border-[#FFFFFF]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-base font-semibold tracking-wider text-[#FFFFFF] uppercase">
                HackerRank Profile
              </span>
              <span className="text-sm text-[#7B7B7B] group-hover:text-[#FFFFFF] transition-colors">
                Track ↗
              </span>
            </div>
            <p className="text-sm md:text-sm text-[#7B7B7B] leading-relaxed">
              Problem Solving — Track my logical thinking, algorithms, and
              competitive programming badges on HackerRank.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
