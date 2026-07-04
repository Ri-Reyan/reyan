import { TextAlignJustify, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useNav } from "../../context/NavContext";
import Menubar from "./Menubar";

// type MenubarProps = {
//   mobile?: boolean;
// };

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useNav();
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-4 left-1/2 z-50 flex w-[95%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-zinc-900/80 px-6 py-4 backdrop-blur-xl">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold md:text-3xl"
        >
          REYAN.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <Menubar mobile={false} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <TextAlignJustify size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="fixed left-4 right-4 top-24 z-40 md:hidden">
          <Menubar mobile />
        </div>
      )}
    </>
  );
};

export default Navbar;
