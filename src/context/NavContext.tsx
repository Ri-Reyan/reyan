import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
type NavContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

type ChildrenType = {
  children: ReactNode;
};

const NavContext = createContext<NavContextType | null>(null);

const NavProvider = ({ children }: ChildrenType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      activeSection,
      setActiveSection,
    }),
    [isMenuOpen, setIsMenuOpen, activeSection, setActiveSection],
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

const useNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("useNav must use inside NavProvider");
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { NavProvider, useNav };
