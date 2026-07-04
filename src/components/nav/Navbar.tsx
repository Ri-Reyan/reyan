import { TextAlignJustify, X } from "lucide-react";
import { useNav } from "../../context/NavContext";
import { useNavigate } from "react-router-dom";
import Menubar from "./Menubar";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useNav();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 w-full z-50 bg-zinc-800 flex mt-6 p-4 rounded-4xl align-middle justify-between">
      <h1
        onClick={() => navigate("/")}
        className="font-bold text-2xl md:text-4xl"
      >
        REYAN.
      </h1>
      <button
        className="md:hidden lg:hidden xl:hidden"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      >
        {isMenuOpen ? <X /> : <TextAlignJustify />}
      </button>
      <div className="hidden md:block lg:block xl:block md:absolute">
        <Menubar />
      </div>
    </div>
  );
};

export default Navbar;
