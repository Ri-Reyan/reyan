import hero_rifat from "../assets/bottom_faded-removebg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLenis } from "lenis/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const lenis = useLenis();

  const wordRef = useRef<HTMLHeadingElement | null>(null);
  const hero_imgRef = useRef<HTMLImageElement | null>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(wordRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
    });

    tl.from(hero_imgRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.4,
      ease: "sine.out",
    });
  });
  return (
    <div>
      <div className="">
        <h1
          ref={wordRef}
          className="word text-5xl md:text-6xl font-bold tracking-tighter text-blue-400 mt-10 m-1"
        >
          FULLSTACK
        </h1>
        <h1
          ref={wordRef}
          className="word text-5xl md:text-6xl font-bold tracking-tighter ml-4 relative bottom-2"
        >
          DEVELOPER
        </h1>
      </div>
      <div className="md:flex place-content-end pr-4">
        <img ref={hero_imgRef} className="hero_img" src={hero_rifat} alt="" />
      </div>
      <div className="mt-10 md:flex place-content-end pr-4">
        <h1 className="wordTwo text-4xl md:text-5xl font-medium tracking-wider ml-4 relative bottom-2 text-secondary">
          Hey There, I'm {""}
          <span className="text-white">Reyan</span>
        </h1>
      </div>
      <div className="flex flex-row mt-10 place-content-center gap-x-10 p-4 pl-6">
        <button
          onClick={() => {
            lenis?.scrollTo("#contact");
          }}
          className="bg-white text-background p-3 text-lg font-semibold rounded-md hover:scale-105 md:text-2xl"
        >
          contact
        </button>
        <button className="bg-blue-400 text-white p-3 text-lg font-semibold rounded-md hover:scale-105 md:text-2xl">
          <a
            href={`${import.meta.env.VITE_RESUME_LINK}`}
            target="_blank"
            rel="noopener, noreferer"
          >
            resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
