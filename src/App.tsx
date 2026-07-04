// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { StarsBackground } from "./components/ui/starrySpaceBg";
import Cursor from "./components/ui/Cursor";
// import Loader from "./components/ui/Loader";
import Home from "./pages/Home";
import Navbar from "./components/nav/Navbar";
import { useNav } from "./context/NavContext";
import Menubar from "./components/nav/Menubar";

const App = () => {
  // const [loading, setLoading] = useState(true);
  const { isMenuOpen } = useNav();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      {/* {loading && <Loader />} */}

      <StarsBackground>
        <div className="text-tertiary min-h-screen">
          <Cursor />
          <Navbar />
          <div className="pt-16">
            {isMenuOpen && <Menubar />}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
            </Routes>
          </div>
        </div>
      </StarsBackground>
    </>
  );
};

export default App;
