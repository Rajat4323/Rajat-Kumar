import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

import { Bio } from "../constants/data.ts";
import "../styles/About.css";
import Tilt from "./Tilt.tsx";

const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const options = {
    glare: true,
    "max-glare": 0.2,
    gyroscope: false,
  };

  return (
    <>
      <div
        ref={ref}
        className={`relative min-h-[max(90vh,700px)] w-screen overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {/* Desktop Section */}
        {inView && (
          <>
            <div className="absolute top-[10vh] flex gap-[8vw] pl-[10vw] max-lg:hidden max-md:hidden">
              <div className="about-icon mt-[10vh] flex h-[170px] w-[300px] items-center justify-center border-[0.5vh] border-purple-300 text-[2.5rem] text-purple-300 shadow-lg shadow-purple-500">
                About me
              </div>
              <div className="flex h-auto w-[50vw] flex-col gap-[2vh]">
                <div className="aboutme flex gap-[1vw] border-b-[0.2vh] border-purple-500 pb-[1vh] text-[3.4rem]">
                  <div className={`${darkMode ? "text-white" : "text-black"}`}>
                    About
                  </div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div
                  className={`description ${darkMode ? "text-white" : "text-black"} flex flex-col gap-[2vh] text-pretty`}
                >
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className="tag flex w-[50vw] justify-center overflow-hidden pt-[2vh] text-[1.95rem] text-purple-500">{`"${Bio.tag}"`}</div>
                <div className="-ml-4 h-auto overflow-hidden p-5">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-78}
                  >
                    <button className="read-btn h-auto w-[160px] rounded-full border-[0.3vh] border-purple-700 py-3 text-[1.2rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.3rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Tablet Section */}
        {inView && (
          <>
            <div className="absolute top-[7vh] flex gap-[8vw] pl-[8vw] max-md:hidden lg:hidden">
              <div className="about-icon mt-[10vh] flex h-[150px] w-[260px] items-center justify-center border-[0.5vh] border-purple-300 text-[2.3rem] text-purple-300 shadow-lg shadow-purple-500">
                About me
              </div>
              <div className="flex h-auto w-[50vw] flex-col gap-[2vh]">
                <div className="aboutme flex gap-[1vw] border-b-[0.2vh] border-purple-500 pb-[1vh] text-[3.4rem]">
                  <div className={`${darkMode ? "text-white" : "text-black"}`}>
                    About
                  </div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div
                  className={`description ${darkMode ? "text-white" : "text-black"} flex flex-col gap-[2vh] text-pretty text-[0.95rem]`}
                >
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className="tag flex w-[50vw] justify-center overflow-hidden pt-[2vh] text-[2.1rem] text-purple-500">{`"${Bio.tag}"`}</div>
                <div className="-ml-4 h-auto overflow-hidden p-5">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-78}
                  >
                    <button className="read-btn h-auto w-[150px] overflow-hidden rounded-full border-[0.3vh] border-purple-700 py-2 text-[1.4rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.5rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Mobile Section */}
        {inView && (
          <>
            <div className="relative -mt-[3vh] flex flex-col items-center justify-center gap-[5vh] md:hidden">
              <div className="about-icon mt-[10vh] flex h-[150px] w-[250px] items-center justify-center border-[0.5vh] border-purple-300 text-[2.25rem] text-purple-300 shadow-lg shadow-purple-500">
                About me
              </div>
              <div className="flex h-auto w-[80vw] flex-col gap-[1.5vh]">
                <div className="aboutme flex gap-[1vw] border-b-[0.2vh] border-purple-500 pb-[1vh] text-[2.8rem]">
                  <div className={`${darkMode ? "text-white" : "text-black"}`}>
                    About
                  </div>
                  <div className="text-purple-500">Me</div>
                </div>
                <div
                  className={`description ${darkMode ? "text-white" : "text-black"} flex flex-col gap-[1.2vh] text-pretty text-[0.8rem]`}
                >
                  <div>{Bio.description}</div>
                  <div>{Bio.description2}</div>
                </div>
                <div className="tag flex justify-center overflow-hidden text-[1.72rem] text-purple-500">{`"${Bio.tag}"`}</div>
                <div className="-ml-4 -mt-[2vh] h-auto overflow-hidden p-5">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-78}
                  >
                    <button className="read-btn h-auto w-[130px] overflow-hidden rounded-full border-[0.3vh] border-purple-700 py-[0.4rem] text-[1.3rem] text-purple-600 shadow-md shadow-purple-400 duration-300 hover:translate-x-[0.2vw] hover:translate-y-[0.2vw] hover:text-[1.4rem] hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Tilt cls="about-icon" options={options} />
    </>
  );
};

export default About;
