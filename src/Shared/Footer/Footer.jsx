import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#058789] dark:bg-gray-900 dark:text-white dark:shadow-md dark:shadow-white text-neutral-content items-center p-4 px-20">
      <aside className="grid-flow-col items-center flex flex-col">
        <Link to="/" className="text-2xl font-bold text-white">
          AR <span className="text-gray-200">BABU</span>
        </Link>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="flex items-center gap-2 my-5">
                  <i className="border-2 p-1 rounded-lg">
                    <a href="https://github.com/abdur-rhaman-babu">
                      {" "}
                      <FaGithubSquare size={35} />
                    </a>
                  </i>
                  <i className="border-2  p-1 rounded-lg">
                    <a href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/">
                      <FaLinkedin size={35} />
                    </a>
                  </i>
                  <i className="border-2 p-1 rounded-lg">
                    <a href="https://x.com/?lang=en">
                      <FaSquareXTwitter size={35} />
                    </a>
                  </i>
                  <i className="border-2 p-1 rounded-lg">
                    <a href="https://www.facebook.com/mdarahman.babu/">
                      <FaFacebookSquare size={35} />
                    </a>
                  </i>
                </div>
      </nav>
    </footer>
  );
};

export default Footer;
