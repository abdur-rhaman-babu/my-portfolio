import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import Banner from "../../pages/Banner/Banner";


const Main = () => {

  return (
    <div>
      <Navbar />
      <div className="container mx-auto bg-zinc-50 lg:px-10 p-3 md:p-5 -z-50 min-h-[73vh]">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
