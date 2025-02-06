import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#058789] shadow-md fixed top-0 left-0 right-0 z-50 p-4 lg:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          AR <span className="text-gray-200">BABU</span>
        </Link>

        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-white font-semibold hover:text-gray-200 transition ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1LFuWI93B67g_jyavfsX6m2GTS0rUhbiy/view?usp=sharing"
          download
          className="hidden lg:block bg-white text-[#058789] px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
        >
          Download CV
        </a>

        <button onClick={toggleMenu} className="lg:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#058789] p-4 absolute top-16 left-0 w-full shadow-md">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white text-lg font-semibold block px-4 py-2 rounded transition hover:bg-gray-700 ${
                      isActive ? "bg-gray-800" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
