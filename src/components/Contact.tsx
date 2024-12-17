import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { useInView } from "react-intersection-observer";

import { email, github, linkedin, phone } from "../constants/data";

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
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

  const user = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          user.current,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (result) => {
            toast.success("Message Sent Successfully");
            console.log(result.text);
          },
          (error) => {
            toast.error("Something went wrong");
            console.log(error.text);
          },
        );
    }
  };

  return (
    <>
      {/* Desktop Section */}
      <div
        ref={ref}
        className={`flex min-h-[690px] w-screen gap-[10vw] pb-[10vh] pt-[5vh] max-lg:hidden max-md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inView && (
          <>
            <div className="flex flex-col pl-[10vw] pt-[10vh]">
              <div className="pro flex gap-[1vw] text-[3vw]">
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                  Connect With
                </div>
                <div className="text-purple-500">Me</div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <a
                  href={`mailto:${email}`}
                  className="mt-[5vh] p-[1vh] text-6xl text-purple-500 duration-500 hover:scale-110"
                >
                  <SiMinutemailer />
                </a>
                <div className="mt-[5vh] py-[1vh] text-xl lowercase text-purple-500">
                  {email}
                </div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <a
                  href={`tel:+91-${phone.slice(4)}`}
                  className="mt-[2vh] p-[1vh] text-5xl text-purple-500 duration-500 hover:scale-110"
                >
                  <FaPhoneAlt />
                </a>
                <div className="ml-[1vw] mt-[2vh] py-[1vh] text-xl lowercase text-purple-500">
                  {phone}
                </div>
              </div>
              <div className="profile-all ml-[0.5vw] mt-[2vh] flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[3.9rem] duration-500 hover:text-[4.2rem]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[3.9rem] duration-500 hover:text-[4.2rem] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[4.9rem] duration-500 hover:text-[5.2rem] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
            <form
              ref={user}
              onSubmit={handleSubmit}
              className="col2 ptitle mt-[12vh] flex w-[42vw] flex-col gap-[1vh] overflow-hidden"
            >
              <div className="flex h-[8vh] w-[42vw] gap-[2vw] p-[1vh]">
                <input
                  className={`inp ${darkMode ? "bg-black text-white" : "bg-white text-black"} w-[15vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
                <input
                  className={`inp ${darkMode ? "bg-black text-white" : "bg-white text-black"} w-[26vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
              </div>
              <div className="w-[42vw] p-[1vh]">
                <input
                  className={`inp ${darkMode ? "bg-black text-white" : "bg-white text-black"} h-[6vh] w-[41vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Enter the Subject"
                  autoComplete="subject"
                />
              </div>
              <div className="w-[42vw] p-[1vh]">
                <textarea
                  className={`inp ${darkMode ? "bg-black text-white" : "bg-white text-black"} h-[35vh] w-[41vw] rounded-lg border-[0.1vh] border-purple-500 p-[1vh] placeholder-purple-300 shadow-sm shadow-purple-500`}
                  name="message"
                  id="message"
                  cols={20}
                  rows={10}
                  required
                  placeholder="Write your Message"
                  autoComplete="message"
                />
              </div>
              <button
                className="btn ml-[0.8vw] w-[9vw] rounded-full border-[0.4vh] border-purple-500 shadow-sm shadow-purple-500 duration-500 hover:-translate-y-1 hover:translate-x-1 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500"
                type="submit"
              >
                <div className="flex items-center justify-center gap-[1vw] text-[1.8vw] text-purple-600 duration-500 hover:text-[1.9vw] hover:text-blue-500">
                  <div>Send</div>
                  <MdSend />
                </div>
              </button>
            </form>
          </>
        )}
      </div>

      {/* Tablet Section */}
      <div
        ref={tabRef}
        className={`flex min-h-[685px] w-screen gap-[7vw] pb-[10vh] pt-[5vh] max-md:hidden lg:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inTabView && (
          <>
            <div className="flex flex-col pl-[8vw] pt-[10vh]">
              <div className="pro flex gap-[1vw] text-[3.5vw]">
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                  Connect With
                </div>
                <div className="text-purple-500">Me</div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <a
                  href={`mailto:${email}`}
                  className="mt-[5vh] p-[1vh] text-5xl text-purple-500 duration-500 hover:scale-110"
                >
                  <SiMinutemailer />
                </a>
                <div className="mt-[5vh] py-[1vh] text-xl lowercase text-purple-500">
                  {email}
                </div>
              </div>
              <div className="Name flex items-center gap-[1vw] overflow-hidden">
                <a
                  href={`tel:+91-${phone.slice(4)}`}
                  className="mt-[2vh] p-[1vh] text-4xl text-purple-500 duration-500 hover:scale-110"
                >
                  <FaPhoneAlt />
                </a>
                <div className="ml-[1vw] mt-[2vh] py-[1vh] text-xl lowercase text-purple-500">
                  {phone}
                </div>
              </div>
              <div className="profile-all ml-[0.5vw] mt-[2vh] flex h-auto items-center gap-[2vw] overflow-hidden text-gray-500">
                <a
                  href={github}
                  target="_blank"
                  className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[3.9rem] duration-500 hover:text-[4.2rem]`}
                >
                  <FaGithub />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  className="linked text-[3.9rem] duration-500 hover:text-[4.2rem] hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="email text-[4.9rem] duration-500 hover:text-[5.2rem] hover:text-teal-500"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
            <form
              ref={user}
              onSubmit={handleSubmit}
              className="col2 ptitle mt-[12vh] flex w-[50vw] flex-col gap-[1vh] overflow-hidden"
            >
              <div className="flex h-[8vh] w-[50vw] gap-[2vw] p-[1vh]">
                <input
                  className={`inp w-[16vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
                <input
                  className={`inp w-[25vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
              </div>
              <div className="w-[50vw] p-[1vh]">
                <input
                  className={`inp h-[6vh] w-[43vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Enter the Subject"
                  autoComplete="subject"
                />
              </div>
              <div className="w-[50vw] p-[1vh]">
                <textarea
                  className={`inp h-[35vh] w-[43vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  name="message"
                  id="message"
                  cols={20}
                  rows={10}
                  required
                  placeholder="Write your Message"
                  autoComplete="message"
                />
              </div>
              <button
                className="btn ml-[0.8vw] w-[10vw] rounded-full border-[0.4vh] border-purple-500 shadow-sm shadow-purple-500 duration-500 hover:-translate-y-1 hover:translate-x-1 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500"
                type="submit"
              >
                <div className="flex items-center justify-center gap-[1vw] p-1 text-[1.8vw] text-purple-600 duration-500 hover:text-[1.9vw] hover:text-blue-500">
                  <div>Send</div>
                  <MdSend />
                </div>
              </button>
            </form>
          </>
        )}
      </div>

      {/* Mobile Section */}
      <div
        ref={mobRef}
        className={`flex min-h-[1061px] w-screen flex-col items-center pb-[10vh] pt-[5vh] md:hidden ${darkMode ? "bg-black" : "bg-white"}`}
      >
        {inMobView && (
          <>
            <div className="mt-[5vh] flex w-screen flex-col items-center pb-[2vh]">
              <div className="pro flex gap-[1vw] text-[2.2rem]">
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                  Connect With
                </div>
                <div className="text-purple-500">Me</div>
              </div>
            </div>
            <form
              ref={user}
              onSubmit={handleSubmit}
              className="col2 ptitle mt-[4vh] flex w-screen flex-col items-center gap-[1vh] overflow-hidden"
            >
              <div className="w-[75vw] p-[1vh]">
                <input
                  className={`inp w-[72vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
              </div>
              <div className="w-[75vw] p-[1vh]">
                <input
                  className={`inp w-[72vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
              </div>
              <div className="w-[75vw] p-[1vh]">
                <input
                  className={`inp h-[6vh] w-[72vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Enter the Subject"
                  autoComplete="subject"
                />
              </div>
              <div className="w-[75vw] p-[1vh]">
                <textarea
                  className={`inp h-[35vh] w-[72vw] rounded-lg shadow-sm shadow-purple-500 ${darkMode ? "bg-black text-white" : "bg-white text-black"} border-[0.1vh] border-purple-500 bg-black p-[1vh] placeholder-purple-300`}
                  name="message"
                  id="message"
                  cols={20}
                  rows={10}
                  required
                  placeholder="Write your Message"
                  autoComplete="message"
                />
              </div>
              <div className="flex justify-center p-2">
                <button
                  className="mbtn rounded-full border-[0.4vh] border-purple-500 px-[2.5vw] shadow-sm shadow-purple-500 duration-500 hover:-translate-y-1 hover:translate-x-1 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500"
                  type="submit"
                >
                  <div className="flex items-center justify-center gap-[1vw] p-2 text-[1.2rem] text-purple-600 duration-500 hover:text-[1.35rem] hover:text-blue-500">
                    <div>Send</div>
                    <MdSend />
                  </div>
                </button>
              </div>
            </form>
            <div className="Name flex items-center gap-[1vw] overflow-hidden">
              <a
                href={`mailto:${email}`}
                className="mt-[5vh] p-[1vh] text-4xl text-purple-500 duration-500 hover:scale-110"
              >
                <SiMinutemailer />
              </a>
              <div className="mt-[5vh] py-[1vh] text-lg lowercase text-purple-500">
                {email}
              </div>
            </div>
            <div className="Name flex items-center gap-[1vw] overflow-hidden">
              <a
                href={`tel:+91-${phone.slice(4)}`}
                className="mt-[2vh] p-[1vh] text-3xl text-purple-500 duration-500 hover:scale-110"
              >
                <FaPhoneAlt />
              </a>
              <div className="ml-[1vw] mt-[2vh] py-[1vh] text-lg lowercase text-purple-500">
                {phone}
              </div>
            </div>
            <div className="profile-all ml-[0.5vw] mt-[2vh] flex h-auto w-full items-center justify-center gap-[2vw] overflow-hidden text-gray-500">
              <a
                href={github}
                target="_blank"
                className={`git ${darkMode ? "hover:text-white" : "hover:text-black"} text-[3.9rem] duration-500 hover:text-[4.2rem]`}
              >
                <FaGithub />
              </a>
              <a
                href={linkedin}
                target="_blank"
                className="linked text-[3.9rem] duration-500 hover:text-[4.2rem] hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${email}`}
                target="_blank"
                className="email text-[4.9rem] duration-500 hover:text-[5.2rem] hover:text-teal-500"
              >
                <MdEmail />
              </a>
            </div>
          </>
        )}
      </div>

      <Toaster position="top-center" reverseOrder={false} />

      <div
        className={`ptitle flex min-h-[80px] items-center justify-center gap-[1vw] bg-gradient-to-r py-[2vh] sm:text-lg md:text-xl lg:text-2xl ${darkMode ? "bg-black from-purple-950 via-gray-900 to-black" : "bg-white from-purple-700 via-gray-400 to-white"} border-t-[0.1px] border-t-purple-400 shadow-md shadow-purple-500`}
      >
        <div
          className={`${darkMode ? "text-gray-400" : "text-gray-600"} overflow-hidden py-1`}
        >
          Made by
        </div>
        <a className="flex gap-[0.5vw] overflow-hidden py-1" href={github}>
          <div
            className={`${darkMode ? "text-white" : "text-black"} overflow-hidden py-1`}
          >
            Rajat
          </div>
          <div
            className={`${darkMode ? "text-purple-500" : "text-purple-600"} overflow-hidden py-1`}
          >
            Kumar
          </div>
        </a>
      </div>
    </>
  );
};

export default Contact;
