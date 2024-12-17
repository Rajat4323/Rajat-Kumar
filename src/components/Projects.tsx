import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import { projects } from "../constants/data";
import "../styles/projects.css";
import MultiTilt from "./MultiTilt";

type Project = { [key: string]: string | JSX.Element[] };

const Projects: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selected, setSelected] = useState<Project | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [tabRef, inTabView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [mobRef, inMobView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const options = {
    max: 5,
    gyroscope: false,
  };

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex min-h-[1200px] w-screen flex-col items-center overflow-hidden max-lg:hidden max-md:hidden max-sm:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[3rem]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(0, 3).map((project, idx) => (
                  <motion.div
                    layoutId={`card-${project.id as string}`}
                    transition={{ ease: "linear", duration: 0.2 }}
                    key={idx}
                    onClick={() => setSelected(project)}
                    className={`card h-auto w-[23vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] ${darkMode ? project.style : project.lstyle} pb-[5vh]`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[20vw] rounded-md"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div
                              key={idx}
                              className="h-auto text-nowrap pb-1 text-[0.7vw]"
                            >
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[1.5vw] ${project.tstyle} text-nowrap`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1vw] text-gray-400">
                          {project.date}
                        </div>
                      </div>
                      <ul
                        className={`pdesc mx-[1.9vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"}`}
                      >
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(3).map((project, idx) => (
                  <motion.div
                    layoutId={`card-${project.id as string}`}
                    transition={{ ease: "linear", duration: 0.2 }}
                    key={idx}
                    onClick={() => setSelected(project)}
                    className={`card h-auto w-[23vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] pb-[5vh] ${darkMode ? project.style : project.lstyle}`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[20vw] rounded-md"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div
                              key={idx}
                              className="h-auto text-nowrap pb-1 text-[0.7vw]"
                            >
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[1.5vw] ${project.tstyle} text-nowrap`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1vw] text-gray-400">
                          {project.date}
                        </div>
                      </div>
                      <ul
                        className={`pdesc mx-[2vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"}`}
                      >
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex min-h-[1540px] w-screen flex-col items-center overflow-hidden max-sm:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2.5rem] max-md:text-[2rem]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col justify-center gap-[3vh]">
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(0, 2).map((project, idx) => (
                  <motion.div
                    layoutId={`card-${project.id as string}`}
                    transition={{ ease: "linear", duration: 0.2 }}
                    key={idx}
                    onClick={() => setSelected(project)}
                    className={`card h-auto w-[35vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] max-md:w-[45vw] ${darkMode ? project.style : project.lstyle} pb-[5vh]`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[32vw] rounded-md max-md:w-[40vw]"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px] max-md:grid-cols-[repeat(auto-fill,minmax(6vw,1fr))]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div
                              key={idx}
                              className="h-auto text-nowrap pb-1 text-[0.8vw]"
                            >
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[2vw] ${project.tstyle} text-nowrap max-md:text-[2.5vw]`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1.4vw] text-gray-400 max-md:text-[1.6vw]">
                          {project.date}
                        </div>
                      </div>
                      <ul
                        className={`pdesc mx-[2.7vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1.3vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"} max-md:mx-[3.5vw] max-md:text-[1.5vw]`}
                      >
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="col2 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(2, 4).map((project, idx) => (
                  <motion.div
                    layoutId={`card-${project.id as string}`}
                    transition={{ ease: "linear", duration: 0.2 }}
                    key={idx}
                    onClick={() => setSelected(project)}
                    className={`card h-auto w-[35vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] pb-[5vh] max-md:w-[45vw] ${darkMode ? project.style : project.lstyle}`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[32vw] rounded-md max-md:w-[40vw]"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px] max-md:grid-cols-[repeat(auto-fill,minmax(6vw,1fr))]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div
                              key={idx}
                              className="h-auto text-nowrap pb-1 text-[0.8vw]"
                            >
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[2vw] ${project.tstyle} text-nowrap max-md:text-[2.5vw]`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1.4vw] text-gray-400 max-md:text-[1.6vw]">
                          {project.date}
                        </div>
                      </div>
                      <ul
                        className={`pdesc mx-[2.8vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1.3vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"} max-md:mx-[3.5vw] max-md:text-[1.5vw]`}
                      >
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="col1 flex w-screen justify-center gap-[3vw] py-[2vh]">
                {projects.slice(4).map((project, idx) => (
                  <motion.div
                    layoutId={`card-${project.id as string}`}
                    transition={{ ease: "linear", duration: 0.2 }}
                    key={idx}
                    onClick={() => setSelected(project)}
                    className={`card h-auto w-[35vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] pb-[5vh] max-md:w-[45vw] ${darkMode ? project.style : project.lstyle}`}
                  >
                    <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                      <img
                        className="mt-[3vh] h-[20vh] w-[32vw] rounded-md max-md:w-[40vw]"
                        src={project.img as string}
                        alt={project.title as string}
                      />
                      <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px] max-md:grid-cols-[repeat(auto-fill,minmax(6vw,1fr))]">
                        {Array.isArray(project.techStack) &&
                          project.techStack.map((tStack, idx) => (
                            <div
                              key={idx}
                              className="h-auto text-nowrap pb-1 text-[0.8vw]"
                            >
                              {tStack}
                            </div>
                          ))}
                      </div>
                      <div className="ptitle flex w-full flex-col items-center">
                        <div
                          className={`w-[83%] overflow-hidden text-[2vw] ${project.tstyle} text-nowrap max-md:text-[2.5vw]`}
                        >
                          {project.title}
                        </div>
                        <div className="w-[83%] overflow-hidden text-[1.4vw] text-gray-400 max-md:text-[1.6vw]">
                          {project.date}
                        </div>
                      </div>
                      <ul
                        className={`pdesc mx-[2.8vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1.3vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"} max-md:mx-[3.5vw] max-md:text-[1.5vw]`}
                      >
                        <li>{project.a}</li>
                        <li>{project.b}</li>
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex min-h-[2075px] w-screen flex-col items-center overflow-hidden sm:hidden md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="skill mt-[3vh] flex justify-center gap-[1vw] text-[2rem]">
              <div className="overflow-hidden text-purple-500">Recent</div>
              <div
                className={`${darkMode ? "text-white" : "text-black"} overflow-hidden`}
              >
                Projects
              </div>
            </div>
            <div className="mt-[4vh] flex w-screen flex-col items-center justify-center gap-[3vh]">
              {projects.map((project, idx) => (
                <motion.div
                  layoutId={`card-${project.id as string}`}
                  transition={{ ease: "linear", duration: 0.2 }}
                  key={idx}
                  onClick={() => setSelected(project)}
                  className={`card ${idx % 2 ? "col1" : "col2"} mb-[1vh] mt-[1vh] h-auto w-[60vw] cursor-pointer overflow-hidden rounded-lg border-[0.2vh] ${darkMode ? project.style : project.lstyle} pb-[5vh]`}
                >
                  <div className="flex flex-col items-center gap-[1vh] duration-500 hover:scale-105">
                    <img
                      className="mt-[3vh] h-[15vh] w-[53vw] rounded-md"
                      src={project.img as string}
                      alt={project.title as string}
                    />
                    <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(7vw,1fr))] gap-x-[4px] gap-y-[2px] max-sm:grid-cols-[repeat(auto-fill,minmax(9vw,1fr))]">
                      {Array.isArray(project.techStack) &&
                        project.techStack.map((tStack, idx) => (
                          <div
                            key={idx}
                            className="h-auto text-nowrap pb-1 text-[1vw] max-sm:text-[1.2vw]"
                          >
                            {tStack}
                          </div>
                        ))}
                    </div>
                    <div className="ptitle flex w-full flex-col items-center">
                      <div
                        className={`w-[83%] overflow-hidden text-[3.5vw] ${project.tstyle} text-nowrap`}
                      >
                        {project.title}
                      </div>
                      <div className="w-[83%] overflow-hidden text-[2.2vw] text-gray-400">
                        {project.date}
                      </div>
                    </div>
                    <ul
                      className={`pdesc mx-[5vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[2vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"}`}
                    >
                      <li>{project.a}</li>
                      <li>{project.b}</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      <Modal
        selected={selected}
        setSelected={setSelected}
        darkMode={darkMode}
      />
      <MultiTilt cls="card" options={options} />
    </>
  );
};

export default Projects;

const Modal: React.FC<{
  selected: Project | null;
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
  darkMode: boolean;
}> = ({ selected, setSelected, darkMode }) => {
  return (
    <>
      {selected && (
        <>
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-40 flex h-screen w-screen cursor-pointer items-center justify-center overflow-hidden bg-black/50"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-${selected.id}`}
              transition={{ ease: "linear", duration: 0.2 }}
              className={`h-auto w-[40vw] overflow-hidden rounded-lg border-[0.2vh] max-lg:w-[50vw] max-md:w-[65vw] max-sm:w-[75vw] ${darkMode ? selected.style : selected.lstyle} cursor-default pb-[5vh] filter-none`}
            >
              <div className="flex flex-col items-center gap-[1vh]">
                <img
                  className="mt-[3vh] h-[30vh] w-[35vw] rounded-md max-lg:h-[33vh] max-lg:w-[45vw] max-md:w-[60vw] max-sm:h-[20vh] max-sm:w-[70vw]"
                  src={selected.img as string}
                  alt={selected.title as string}
                />
                <div className="grid w-[85%] grid-cols-[repeat(auto-fill,minmax(5vw,1fr))] gap-x-[4px] gap-y-[2px] max-lg:w-[90%] max-lg:grid-cols-[repeat(auto-fill,minmax(6vw,1fr))] max-md:w-[92%] max-md:grid-cols-[repeat(auto-fill,minmax(7vw,1fr))] max-sm:w-[93%] max-sm:grid-cols-[repeat(auto-fill,minmax(11vw,1fr))]">
                  {Array.isArray(selected.techStack) &&
                    selected.techStack.map((tStack, idx) => (
                      <div
                        key={idx}
                        className="h-auto text-nowrap pb-[6px] text-[0.7vw] max-lg:text-[0.8vw] max-md:text-[1vw] max-sm:text-[1.4vw]"
                      >
                        {tStack}
                      </div>
                    ))}
                </div>
                <div className="ptitle flex w-full flex-col items-center">
                  <div
                    className={`w-[83%] overflow-hidden text-[2vw] max-lg:w-[88%] max-lg:text-[2.5vw] max-md:text-[3vw] ${selected.tstyle} text-nowrap max-md:w-[90%] max-sm:w-[92%] max-sm:text-[4vw]`}
                  >
                    {selected.title}
                  </div>
                  <div className="w-[83%] overflow-hidden text-[1vw] text-gray-400 max-lg:w-[88%] max-lg:text-[1.5vw] max-md:w-[90%] max-md:text-[2vw] max-sm:w-[92%] max-sm:text-[3vw]">
                    {selected.date}
                  </div>
                </div>
                <ul
                  className={`pdesc mx-[3.5vw] flex list-inside list-disc flex-col gap-1 text-pretty text-[1vw] max-lg:mx-[3vw] max-lg:text-[1.3vw] max-md:text-[1.9vw] max-sm:text-[2.2vw] ${darkMode ? "text-white marker:text-white" : "text-black marker:text-black"}`}
                >
                  <li>{selected.a}</li>
                  <li>{selected.b}</li>
                  {selected.c && <li>{selected.c}</li>}
                </ul>
                <div className="mt-[10vh] flex items-center justify-center gap-[10vw]">
                  <a
                    href={selected.link as string}
                    target="_blank"
                    className={`${selected.bstyle} mx-[1vw] mb-[1vh] rounded-full px-[3vw] py-[1vh] max-md:px-[4vw] max-sm:px-[5vw]`}
                  >
                    Code
                  </a>
                  {selected.site && (
                    <a
                      href={selected.site as string}
                      target="_blank"
                      className={`${selected.bstyle} mx-[1vw] mb-[1vh] rounded-full px-[3vw] py-[1vh] max-md:px-[4vw] max-sm:px-[5vw]`}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};
