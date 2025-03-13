import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      setActiveSection(id);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        setActiveSection(id);
      }, 600);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-[#058789] shadow-md fixed top-0 left-0 right-0 z-50 p-4 lg:px-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          AR <span className="text-gray-200">BABU</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li
              onClick={() => scrollToSection(link.id)}
              className="relative text-white font-semibold cursor-pointer hover:text-gray-200 transition"
              key={link.name}
            >
              {link.name}
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1t03OG_nBW4ZOo1YyFh33ppT6CUeOV6qv/view?usp=sharing"
          download
          target="_blank"
          className="hidden lg:block bg-white text-[#058789] px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
        >
          View Resume
        </a>

        <button onClick={toggleMenu} className="lg:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#058789] p-4 absolute top-16 left-0 w-full shadow-md">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="relative text-white font-semibold cursor-pointer p-2 hover:bg-black rounded-sm transition"
                key={link.name}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
