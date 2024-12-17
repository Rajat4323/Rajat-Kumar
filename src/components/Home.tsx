import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

import image from "../assets/Rajat_Kumar.jpg";
import { Bio, email, github, linkedin } from "../constants/data";
import "../styles/Home.css";
import Tilt from "./Tilt";
import Typewriter from "./Typewriter";

const Home: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const options = {
    speed: 400,
    max: 15,
    gyroscope: false,
  };

  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const darkThemeText = `${darkMode ? "text-white" : "text-black"}`;

  return (
    <div ref={ref} className={`${darkMode ? "bg-black" : "bg-white"}`}>
      {/* Desktop Section */}
      <div
        className={`relative m-0 mt-[max(8vh,75px)] min-h-[max(90vh,700px)] w-screen overflow-hidden max-lg:hidden max-md:hidden`}
      >
        {inView && (
          <>
            <img
              className="image absolute right-[10vw] top-[12vh] h-auto w-[27vw]"
              src={image}
              alt="Rajat"
            />
            <div className="bio absolute top-[15vh] flex h-auto w-[60vw] flex-col gap-[2vh] overflow-hidden pl-[10vw]">
              <div
                className={`intro overflow-hidden ${darkThemeText} text-[1.22rem]`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name overflow-hidden ${darkThemeText} -mt-[3vh] pb-[1vh] pr-[1vw] text-[3.9rem] font-semibold`}
              >
                {Bio.Name}
              </div>
              <div className="pro -mt-[1.5vh] flex gap-[1vw] overflow-hidden border-b-[0.005vh] border-b-purple-500 pb-[1vh] text-[2.8vw]">
                <div className={`${darkThemeText} overflow-hidden`}>I'm a</div>
                <div className="type overflow-hidden text-purple-500">
                  <Typewriter />
                </div>
              </div>
              <div
                className={`desc overflow-hidden ${darkThemeText} mt-[1vh] text-pretty pb-[1.5vh]`}
              >
                {Bio.desc}
              </div>
              <div className="profile-all flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[3.9rem] duration-500 hover:text-[4.4rem]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[3.9rem] duration-500 hover:text-[4.4rem] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[4.9rem] duration-500 hover:text-[5.4rem] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        className={`relative m-0 mt-[max(8vh,75px)] h-[max(90vh,700px)] w-screen overflow-hidden max-md:hidden lg:hidden`}
      >
        {inView && (
          <>
            <img
              className="image absolute right-0 top-0 mr-[7vw] mt-[12vh] h-auto w-[30vw]"
              src={image}
              alt="Rajat"
            />
            <div className="bio absolute top-[12vh] flex h-auto w-[60vw] flex-col gap-[2vh] overflow-hidden pl-[7vw]">
              <div
                className={`intro ${darkMode ? "text-white" : "text-black"} overflow-hidden text-[1.25rem]`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name ${darkMode ? "text-white" : "text-black"} -mt-[3vh] overflow-hidden pb-[1vh] pr-[1vw] text-[4rem] font-semibold`}
              >
                {Bio.Name}
              </div>
              <div className="pro -mt-[1.5vh] flex gap-[1vw] border-b-[0.004vh] border-purple-500 pb-[1vh] text-[3vw]">
                <div
                  className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
                >
                  I'm a
                </div>
                <div className="type overflow-hidden text-purple-500">
                  <Typewriter />
                </div>
              </div>
              <div
                className={`desc ${darkMode ? "text-white" : "text-black"} mt-[1vh] overflow-hidden text-pretty`}
              >
                {Bio.desc}
              </div>
              <div className="profile-all flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[4rem] duration-500 hover:text-[4.5rem]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[4rem] duration-500 hover:text-[4.5rem] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[5rem] duration-500 hover:text-[5.5rem] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        className={`md:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"} relative m-0 mt-[max(10vh,75px)] flex h-[max(90vh,700px)] w-screen flex-col items-center gap-[3vh] overflow-hidden`}
      >
        {inView && (
          <>
            <img
              className="imagem mt-[1vh] h-auto w-[40vw]"
              src={image}
              alt="Rajat"
            />
            <div className="biom flex h-auto w-[90vw] flex-col gap-[0.5vh] overflow-hidden">
              <div
                className={`intro ${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Hello, My Name is
              </div>
              <div
                className={`Name ${darkMode ? "text-white" : "text-black"} -mt-[2.4vh] overflow-hidden text-nowrap pb-[1vh] pr-[1vw] pt-[1vh] text-[3.5rem] font-semibold`}
              >
                {Bio.Name}
              </div>
              <div className="pro -mt-[0.5vh] flex gap-[1.6vw] overflow-hidden border-b-[0.004vh] border-purple-500 pb-[1vh] text-[6vw]">
                <div
                  className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
                >
                  I'm a
                </div>
                <div className="type overflow-hidden text-purple-700">
                  <Typewriter />
                </div>
              </div>
              <div
                className={`desc mt-[1vh] ${darkMode ? "text-white" : "text-black"} overflow-hidden text-pretty pb-[2vh]`}
              >
                {Bio.desc}
              </div>
              <div className="mt-[1.5vh] flex items-center gap-[2vw] overflow-hidden pl-[0.5vw]">
                <div className="profile-allm flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
                  <a
                    href={github}
                    target="_blank"
                    className={`gitm ${darkMode ? "hover:text-white" : "hover:text-black"} text-[3.5rem] duration-500 hover:text-[3.8rem]`}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    className="linkedm text-[3.5rem] duration-500 hover:text-[3.8rem] hover:text-blue-700"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    className="emailm text-[4.5rem] duration-500 hover:text-[4.8rem] hover:text-teal-500"
                  >
                    <MdEmail />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Tilt cls="image" options={options} />
      <Tilt cls="imagem" options={options} />
    </div>
  );
};

export default Home;
