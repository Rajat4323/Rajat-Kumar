import Cyberbulling from "../assets/Cyberbullying Detection.png";
import Sneakhead from "../assets/SneakHead.png";
import Rbac from "../assets/RBAC-UI.png";
import Gunsmart from "../assets/GunsMart.png";
import Query from "../assets/QueryConnect.png";
import * as tStack from "./tStack";

export const Bio: { [key: string]: string } = {
  Name: "Rajat Kumar",
  desc: "As a driven Frontend Developer and Competitive Coder, I excel in Web Development across various programming languages. My expertise extends to Full Stack development, ensuring holistic project delivery. Beyond this, I'm delving into Machine Learning, eager to harness its power for innovative solutions and enhanced user experiences.",
  description:
    "I have pursuing my B.Tech. program in Information Technology from Rajiv Gandhi Institute of Petroleum Technology, Amethi. With a deep passion for web development, machine learning, and various programming languages, I'm dedicated to crafting innovative solutions and taking on complex challenges.",
  description2:
    "Join me on my journey as I combine my academic achievements with my enthusiasm for web development. Together, we can push the boundaries of what's possible in the ever-evolving tech world.",
  tag: "Let's build the future together.",
};

export const prof: string[] = [
  "Software Engineer",
  "Full Stack Developer",
  "Competitive Coder",
];

export const github: string = "https://github.com/Rajat4323";
export const linkedin: string =
  "https://www.linkedin.com/in/rajat-kumar-837553266";
export const email: string = "rajatkumar020304@gmail.com";
export const phone: string = "+91 6206098175";

export const skills: { [key: string]: string } = {
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  cplus:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  nodeJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongo:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  tensorflow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  reactRedux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  fast: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  openCV:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
};

type Projects = { [key: string]: string | JSX.Element[] }[];

export const projects: Projects = [
  {
    id: "1",
    title: "SneakHead",
    date: "2023 - 2024",
    techStack: [
      tStack.react,
      tStack.tailwind,
      tStack.materialui,
      tStack.contextapi,
      tStack.usereducer
    ],
    img: Sneakhead as string,
    style:
      "border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    lstyle:
      "border-blue-500 bg-gradient-to-br from-blue-300 via-gray-100 to-white shadow-sm shadow-blue-500 grayscale filter hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    tstyle: "text-blue-400",
    bstyle:
      "text-blue-400 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 duration-200 border-2 border-blue-500",
    a: "Developed a sneaker-focused e-commerce platform with a sleek, user-centric design allowing users to discover,filter, and purchase the latest sneakers.",
    b: "Built robust shopping features, including cart, wishlist, and address management, with secure user authentication.",
    c: "Enabled secure payments with Razorpay, ensuring a streamlined checkout.",
    link: "https://github.com/Rajat4323/SneakHead",
    site: "https://sneakhead-rajat4323s-projects.vercel.app"
  },
  {
    id: "2",
    title: "Guns-Mart",
    date: "2023 - 2024",
    techStack: [
      tStack.react,
      tStack.mongoDB,
      tStack.tailwind,
      tStack.nextJS,
      tStack.typescript,
      tStack.axios,
      tStack.daisyUI,
      
    ],
    img: Gunsmart as string,
    style:
      "border-yellow-500 bg-gradient-to-br from-yellow-950 via-gray-950 to-black shadow-sm shadow-yellow-500 grayscale filter hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0",
    lstyle:
      "border-yellow-500 bg-gradient-to-br from-yellow-200 via-gray-100 to-white shadow-sm shadow-yellow-500 grayscale filter hover:shadow-md hover:shadow-yellow-500 hover:grayscale-0",
    tstyle: "text-yellow-400",
    bstyle:
      "text-yellow-400 shadow-sm shadow-yellow-500 hover:shadow-md hover:shadow-yellow-500 duration-200 border-2 border-yellow-500",
    a: "Developed a guns shopping platform where users can browse and add firearms directly to their shopping cart with ease.",
    b: "Integrated a secure payment system using Stripe, allowing for safe and seamless transactions.",
    link: "https://github.com/Rajat4323/GunsMart",
    site: "https://guns-mart.vercel.app",
  },
  {
    id: "3",
    title: "Cyberbullying Detection",
    date: "2023 - 2024",
    techStack: [
      tStack.python,
      tStack.flask,
      tStack.ml,
      tStack.html,
    ],
    img: Cyberbulling as string,
    style:
      "border-emerald-400 bg-gradient-to-br from-emerald-400 via-gray-950 to-black shadow-sm shadow-emerald-400 grayscale filter hover:shadow-md hover:shadow-emerald-400 hover:grayscale-0",
    lstyle:
      "border-emerald-500 bg-gradient-to-br from-emerald-300 via-gray-100 to-white shadow-sm shadow-emerald-500 grayscale filter hover:shadow-md hover:shadow-emerald-500 hover:grayscale-0",
    tstyle: "text-emerald-500",
    bstyle:
      "text-emerald-400 shadow-sm shadow-emerald-500 hover:shadow-md hover:shadow-emerald-500 duration-200 border-2 border-emerald-500",
    a: "Developed a cyberbullying detection system using machine learning algorithms to identify offensive, abusive,and harmful language in social media content.",
    b: "Achieved a 20% improvement in the system’s ability to detect subtle forms of cyberbullying compared to traditional keyword-based approaches.",
    link: "https://github.com/Rajat4323/CyberBullying_Detection",
  },
  {
    id: "4",
    title: "RBAC-UI",
    date: "2023 - 2024",
    techStack: [
      tStack.react,
      tStack.javaScript,
      tStack.bootstrap,
      tStack.aos,
    ],
    img: Rbac as string,
    style:
      "border-blue-500 bg-gradient-to-br from-blue-950 via-gray-950 to-black shadow-sm shadow-blue-500 grayscale filter hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    lstyle:
      "border-blue-500 bg-gradient-to-br from-blue-300 via-gray-100 to-white shadow-sm shadow-blue-500 grayscale filter hover:shadow-md hover:shadow-blue-500 hover:grayscale-0",
    tstyle: "text-blue-500",
    bstyle:
      "text-blue-400 shadow-sm shadow-blue-500 hover:shadow-md hover:shadow-blue-500 duration-200 border-2 border-blue-500",
    a: "Developed an RBAC Dashboard using ReactJS to efficiently manage users, roles, and permissions through intuitive CRUD operations.",
    b: "Designed and implemented features for dynamic role and permission management, supporting custom permissions for users.",
    link: "https://github.com/Rajat4323/RBAC-UI",
    site: "https://rbac-ui-nu.vercel.app",
  },
  {
    id: "5",
    title: "QueryConnect",
    date: "2023 - 2024",
    techStack: [
      tStack.html,
      tStack.css,
      tStack.javascript,
      tStack.express,
      tStack.nodeJS,
      tStack.mongoDB,
    ],
    img: Query as string,
    style:
      "border-violet-500 bg-gradient-to-br from-violet-950 via-gray-950 to-black shadow-sm shadow-violet-500 grayscale filter hover:shadow-md hover:shadow-violet-500 hover:grayscale-0",
    lstyle:
      "border-violet-500 bg-gradient-to-br from-violet-300 via-gray-100 to-white shadow-sm shadow-violet-500 grayscale filter hover:shadow-md hover:shadow-violet-500 hover:grayscale-0",
    tstyle: "text-violet-500",
    bstyle:
      "text-violet-400 shadow-sm shadow-violet-500 hover:shadow-md hover:shadow-violet-500 duration-200 border-2 border-violet-500",
    a: "Built a question-asking platform for 100+ users, enabling interactions between question askers and contributors.",
    b: "Added features for questions, comments, and sharing answers, boosting user engagement by 25%.",
    link: "https://github.com/Rajat4323/QueryConnect2",
    site: "https://queryconnect2.onrender.com",
  },
];
