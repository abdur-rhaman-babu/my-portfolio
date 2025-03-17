import { useState, useEffect } from "react";
import { FaBars, FaDownload, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-[#058789]/80 dark:bg-gray-900 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 p-4 lg:px-10 transition">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white dark:text-gray-200">
          AR <span className="text-gray-200 dark:text-gray-400">BABU</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li
              onClick={() => scrollToSection(link.id)}
              className={`relative font-semibold cursor-pointer transition ${
                activeSection === link.id
                  ? "text-white border-b-2 border-white"
                  : "text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-gray-400"
              }`}
              key={link.name}
            >
              {link.name}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <a
            href="/Front_End_Developer.pdf"
            download="Front_End_Developer.pdf"
            className="hidden lg:flex items-center gap-2 bg-white text-[#058789] px-4 py-2 rounded-md font-semibold hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Resume <FaDownload />
          </a>

          <button
            onClick={toggleDarkMode}
            className="text-white text-xl dark:text-gray-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button onClick={toggleMenu} className="lg:hidden text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#058789] dark:bg-gray-800 p-4 absolute top-16 left-0 w-full shadow-md">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className={`relative font-semibold cursor-pointer p-2 rounded-sm transition ${
                  activeSection === link.id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-white hover:bg-black dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
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
