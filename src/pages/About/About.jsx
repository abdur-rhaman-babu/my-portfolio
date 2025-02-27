import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import banner1 from "../../assets/image/banner1.png";
const About = () => {
  return (
    <section id="about" className="mb-12">
      <div className="text-center">
        <h1 className="font-bold text-4xl border-[#058789] border-t-4 border-b-4 p-2 my-5 inline-block">
          About <span className="text-[#058789]">Me</span>
        </h1>
      </div>
      <div className="md:flex items-center md:gap-20 lg:gap-64 justify-between">
        <div className="bg-gradient-to-r from-[#058789] to-[#05696B] rounded-t-full md:w-7/12">
          <img src={banner1} alt="" />
        </div>

        <div className="flex flex-col gap-2 md:w-full">
          <h2 className="font-bold text-3xl">I'm 👋</h2>
          <h1 className="font-bold text-4xl">Abdur Rhaman Babu</h1>

          <h2 className="font-bold text-3xl">
            I'm a{" "}
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

          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">
              {" "}
              My Journey as a Frontend Web Developer{" "}
            </p>
            <p>
              <span className="font-bold">I am Abdur Rahman Babu,</span> a
              passionate frontend developer. I build interactive and
              user-friendly websites using HTML, CSS, JavaScript, Tailwind CSS,
              and other technologies. My programming journey began in March
              2023, and I have been learning and improving ever since. I
              completed my first frontend development course from As Sunnah
              Foundation, which lasted six months. Later, I joined Programming
              Hero Batch 10 for another six-month course, where I gained deeper
              knowledge of modern frontend technologies. These courses have
              helped me understand how to create dynamic and responsive
              websites.
            </p>
            <p>
              {" "}
              Besides coding, I love playing cricket and football, which keep me
              active and refreshed. My goal is to keep learning, enhance my
              problem-solving skills, and build amazing web projects. I am
              excited about my journey in web development and look forward to
              growing as a professional frontend developer.
            </p>
          </div>

          <div className="flex gap-2 my-5">
            <button>
              {" "}
              <a
                href="https://drive.google.com/file/d/1LFuWI93B67g_jyavfsX6m2GTS0rUhbiy/view?usp=sharing"
                download
                target="_blank"
                className="text-white bg-gradient-to-r from-[#058789] to-[#05696B] hover:from-[#05696B] hover:to-[#058789] px-4 py-2 rounded-md font-semibold"
              >
                View Resume
              </a>
            </button>
            <button>
              {" "}
              <a
                href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/"
                download
                target="_blank"
                className="bg-gradient-to-r px-4 py-2 rounded-md font-semibold border border-[#058789]"
              >
                Hire Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
