import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./context/NavContext.tsx";
import ReactLenis from "lenis/react";
// import "@fontsource-variable/inter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavProvider>
        <ReactLenis root>
          <App />
        </ReactLenis>
      </NavProvider>
    </BrowserRouter>
  </StrictMode>,
);
