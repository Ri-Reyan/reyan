import { useLenis } from "lenis/react";
import { useNav } from "../../context/NavContext";

const pages = [
  { id: 1, label: "HOME", section: "home" },
  { id: 2, label: "ABOUT", section: "about" },
  { id: 3, label: "PROJECTS", section: "projects" },
  { id: 4, label: "SKILLS", section: "skills" },
  { id: 5, label: "CERTIFICATE", section: "certificate" },
  { id: 6, label: "CONTACT", section: "contact" },
];

type MenubarProps = {
  mobile?: boolean;
};

const Menubar = ({ mobile = false }: MenubarProps) => {
  const lenis = useLenis();
  const { setIsMenuOpen, activeSection, setActiveSection } = useNav();

  const handleClick = (section: string) => {
    setActiveSection(section);

    if (mobile) {
      setIsMenuOpen(false);
    }

    if (section === "home") {
      lenis?.scrollTo(0);
    } else {
      lenis?.scrollTo(`#${section}`);
    }
  };

  return (
    <div
      className={
        mobile
          ? "rounded-2xl bg-zinc-900 p-4 shadow-xl"
          : "flex items-center gap-2"
      }
    >
      {pages.map((page) => (
        <button
          key={page.id}
          onClick={() => handleClick(page.section)}
          className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium tracking-wider transition-all duration-300 md:w-auto md:text-center md:text-base md:px-2
            ${
              activeSection === page.section
                ? "bg-zinc-800 text-white"
                : "text-secondary hover:bg-zinc-800 hover:text-white"
            }`}
        >
          {page.label}
        </button>
      ))}
    </div>
  );
};

export default Menubar;
