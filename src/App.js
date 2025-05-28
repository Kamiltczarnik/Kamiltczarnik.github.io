import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import ProjectsNew from "./Pages/ProjectsNew";
import ContactNew from "./Pages/ContactNew";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
  }, [location]);

  return (
    <div id="wrapper">
      <Navbar />
      <Home />
      <ProjectsNew />
      <ContactNew />
    </div>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import Welcome from "./Pages/Welcome";
// import AboutMe from "./Pages/AboutMe";
// import Technologies from "./Pages/Technologies";
// import Projects from "./Pages/Projects";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div id="wrapper">
//       {/* Pass scrollLocked and setScrollLocked to Navbar */}
//       <Navbar />
//       <Welcome />
//       <Projects />
//       <Technologies />
//       <AboutMe />
//       <Footer />
//     </div>
//   );
// }

// export default App;
