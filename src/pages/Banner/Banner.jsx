import {
  FaDownload,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/image/banner1.png";
import { motion } from "framer-motion";
import fadeIn from "../../variants";

const Banner = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center text-center md:text-left justify-between gap-5 pt-32 pb-20 px-4"
    >
      {/* Text Content with Motion Animation */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col gap-3 max-w-xl"
      >
        <h2 className="font-bold text-2xl sm:text-3xl dark:text-gray-200">
          Hello 👋 It's Me
        </h2>
        <h1 className="font-bold text-3xl sm:text-4xl dark:text-white">
          Abdur Rahman Babu
        </h1>

        <h2 className="font-bold text-xl sm:text-2xl">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "React.js Developer",
              1000,
              "UI Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#058789] dark:text-[#06b6d4]"
          />
        </h2>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          I am a passionate frontend web developer. I build interactive and
          user-friendly websites using modern technologies like React, Tailwind
          CSS, and JavaScript.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start items-center gap-3 my-4">
          <a
            href="https://github.com/abdur-rhaman-babu"
            className="border-2 border-[#058789] dark:border-gray-300 p-2 rounded-lg hover:bg-[#058789] dark:hover:bg-gray-300 hover:text-white dark:hover:text-black transition"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/"
            className="border-2 border-[#058789] dark:border-gray-300 p-2 rounded-lg text-blue-500 dark:text-gray-300 hover:bg-blue-500 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://x.com/?lang=en"
            className="border-2 border-[#058789] dark:border-gray-300 p-2 rounded-lg hover:bg-[#058789] dark:hover:bg-gray-300 hover:text-white dark:hover:text-black transition"
          >
            <FaSquareXTwitter size={30} />
          </a>
          <a
            href="https://www.facebook.com/mdarahman.babu/"
            className="border-2 border-[#058789] dark:border-gray-300 p-2 rounded-lg text-blue-700 dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black transition"
          >
            <FaFacebookSquare size={30} />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/Front_End_Developer.pdf"
            download="Front_End_Developer.pdf"
            className="text-white flex justify-center items-center gap-2 bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] px-4 py-2 rounded-md font-semibold dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-700"
          >
            Resume <FaDownload />
          </a>
          <a
            href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/"
            target="_blank"
            className="bg-transparent text-[#058789] border border-[#058789] hover:bg-[#058789] hover:text-white px-4 py-2 rounded-md font-semibold transition dark:text-gray-300 dark:border-gray-400 dark:hover:bg-gray-700"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* Image with Motion Animation */}

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative flex items-center justify-center"
      >
        {/* Glowing Light Effect */}
        <div className="absolute w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-[#058789] dark:bg-gray-600 opacity-40 blur-3xl rounded-full"></div>

        {/* Image Container */}
        <div className="relative bg-gradient-to-r from-[#058789] to-[#05696B] dark:from-gray-700 dark:to-gray-800 rounded-full p-2 shadow-[0_0_50px_#058789] dark:shadow-gray-500">
          <img
            src={banner}
            alt="Profile Banner"
            className="w-52 sm:w-64 md:w-80 lg:w-96 rounded-full scale-x-[-1]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
