import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import banner1 from "../../assets/image/banner1.png";
import { motion } from "framer-motion";
import fadeIn from "../../variants";

const About = () => {
  return (
    <section id="about" className="mb-12">
      <div className="text-center">
        <h1 className="font-bold text-4xl border-[#058789] border-t-4 border-b-4 p-2 my-5 inline-block dark:border-gray-400">
          About <span className="text-[#058789] dark:text-gray-300">Me</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-5 px-4">
        {/* Image Section */}
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
          <div className="relative scale-x-[-1] bg-gradient-to-r from-[#058789] to-[#05696B] dark:from-gray-700 dark:to-gray-800 rounded-full p-2 shadow-[0_0_50px_#058789] dark:shadow-gray-500">
            <img
              src={banner1}
              alt="Profile Banner"
              className="w-52 sm:w-64 md:w-80 lg:w-96 rounded-full scale-x-[-1]"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col gap-3 max-w-xl"
        >
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
              className="text-[#058789] dark:text-gray-300"
            />
          </h2>

          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
            Hello, I am
            <span className="font-bold text-xl"> Abdur Rahman Babu</span>. I
            completed my Intermediate studies at Khulna B.L. College under the
            Jessore Board in the academic session 2018-2020. Due to some family
            issues, I couldn’t continue my higher studies. However, for the past
            two years, I have been dedicated to learning Frontend Development.
          </p>
          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
            Recently, I completed a 6-month course from Programming Hero, where
            I gained hands-on experience with HTML, CSS, JavaScript, Tailwind
            CSS, React.js, basic Node.js, Express.js, and MongoDB.
          </p>
          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
            I am passionate about building user-friendly web applications and
            continuously improving my skills. My goal is to secure a remote
            frontend development job and contribute to real-world projects. I am
            always eager to learn new technologies and collaborate with
            developers worldwide.
          </p>

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
      </div>
    </section>
  );
};

export default About;
