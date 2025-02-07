import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import banner from "../../assets/image/banner.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <section id="home" className="md:flex items-center mb-12 pt-20 gap-5 justify-between flex flex-col-reverse md:flex-row">
      <div className="flex flex-col gap-2 max-w-2xl">
        <h2 className="font-bold text-3xl">Hello 👋 It's Me</h2>
        <h1 className="font-bold text-4xl">Abdur Rhaman Babu</h1>

        <h2 className="font-bold text-3xl">
          I'm a {' '}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "React.Js Developer",
              1000,
              "UI Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#058789]"
          />
        </h2>

        <p>
          I am a frontend web developer specializing in creating responsive,
          interactive, and user-friendly websites. Passionate about design and
          seamless user experiences.
        </p>
        <div className="flex items-center gap-2 my-5">
          <i className="border-2 border-[#058789] p-1 rounded-lg">
            <a href="https://github.com/abdur-rhaman-babu">
              {" "}
              <FaGithubSquare size={35} />
            </a>
          </i>
          <i className="border-2 border-[#058789] p-1 rounded-lg text-blue-500">
            <a href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/">
              <FaLinkedin size={35} />
            </a>
          </i>
          <i className="border-2 border-[#058789] p-1 rounded-lg">
            <a href="https://x.com/?lang=en">
              <FaSquareXTwitter size={35} />
            </a>
          </i>
          <i className="border-2 border-[#058789]  p-1 rounded-lg text-blue-700">
            <a href="https://www.facebook.com/mdarahman.babu/">
              <FaFacebookSquare size={35} />
            </a>
          </i>
        </div>
        <div className="flex gap-2 mb-5">
          <button>
            {" "}
            <a
              href="https://drive.google.com/file/d/1LFuWI93B67g_jyavfsX6m2GTS0rUhbiy/view?usp=sharing"
              download
              className="text-white bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] px-4 py-2 rounded-md font-semibold"
            >
              Download CV
            </a>
          </button>
          <button>
            {" "}
            <a
              href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/"
              download
              className="bg-gradient-to-r px-4 py-2 rounded-md font-semibold border border-[#058789]"
            >
              Hire Me
            </a>
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#058789] to-[#05696B] rounded-t-full">
        <img src={banner} alt="" />
      </div>
    </section>
  );
};

export default Banner;
