import hero_rifat from "../assets/bottom_faded-removebg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLenis } from "lenis/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const lenis = useLenis();

  const wordRef = useRef<HTMLHeadingElement | null>(null);
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".word", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(heroImgRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  });

  return (
    <section className="mt-14 flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div>
        <h1
          ref={wordRef}
          className="word text-5xl font-bold tracking-tight text-blue-400 sm:text-6xl md:text-7xl lg:text-7xl"
        >
          FULLSTACK
        </h1>

        <h1 className="word ml-4 -mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl">
          DEVELOPER
        </h1>
      </div>

      {/* Image */}
      <div className="mt-8 flex justify-center md:justify-end">
        <img
          ref={heroImgRef}
          src={hero_rifat}
          alt="Reyan"
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl"
        />
      </div>

      {/* Subtitle */}
      <div className="mt-8 text-center md:text-right">
        <h2 className="text-2xl font-medium tracking-wide text-secondary sm:text-3xl md:text-4xl lg:text-5xl">
          Hey There, I'm <span className="text-white">Reyan</span>
        </h2>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-end">
        <button
          onClick={() => lenis?.scrollTo("#contact")}
          className="rounded-lg bg-white px-6 py-3 text-lg font-semibold text-background transition hover:scale-105"
        >
          Contact
        </button>

        <a
          href={import.meta.env.VITE_RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition hover:scale-105"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
