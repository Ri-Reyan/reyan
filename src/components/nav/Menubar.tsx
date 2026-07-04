import { useNav } from "../../context/NavContext";
import { useLenis } from "lenis/react";

const pages = [
  { id: 1, label: "HOME", section: "home" },
  { id: 2, label: "ABOUT", section: "about" },
  { id: 3, label: "PROJECTS", section: "projects" },
  { id: 4, label: "SKILLS", section: "skills" },
  { id: 5, label: "CERTIFICATE", section: "certificate" },
  { id: 6, label: "CONTACT", section: "contact" },
];

const Menubar = () => {
  const lenis = useLenis();
  const { setIsMenuOpen, activeSection, setActiveSection } = useNav();

  return (
    <div className="fixed z-40 w-full mt-10 m-2 p-6 bg-zinc-800 text-xl rounded-md tracking-wider md:relative md:inline-table text-justify">
      {pages.map((page) => {
        return (
          <div
            onClick={() => {
              setActiveSection(page.section);
              setIsMenuOpen(false);

              if (page.section === "home") {
                lenis?.scrollTo(0);
              } else {
                lenis?.scrollTo(`#${page.section}`);
              }
            }}
            className={`p-4 hover:bg-zinc-900 rounded-xl font-medium hover:text-white ${activeSection === page.section ? "bg-zinc-900 text-white" : "text-secondary"}`}
            key={page.id}
          >
            <button>{page.label}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Menubar;
