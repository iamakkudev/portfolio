import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <motion.header
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 header_prop"
      >
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="sm:w-[400px] pb-2 bg-light_200_dark_200 rounded-2xl shadow-outer_light_dark100 dark:active:bg-white/5 active:bg-black/20"
          href="https://careercursor.onrender.com"
          target="_blank"
        >
          <img
            src="/careercursor.png"
            alt="Project1"
            className="rounded-t-2xl border-b-2 border-black/60 dark:border-white/40"
          />
          <h2 className="font-semibold text-2xl py-1 text-center text-shadow-Light_Dark">
            CareerCursor
          </h2>
          <div className="flex flex-wrap justify-start gap-2 px-4 py-2">
            <div className="stack-badge">React.js</div>
            <div className="stack-badge">Node.js</div>
            <div className="stack-badge">Express.js</div>
            <div className="stack-badge">JWT</div>
            <div className="stack-badge">MongoDB</div>
            <div className="stack-badge">AI Api</div>
            <div className="stack-badge">Cloudinary</div>
            <div className="stack-badge">ShadCN</div>
            <div className="stack-badge">Tailwind</div>
          </div>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="sm:w-[400px] pb-2 bg-light_200_dark_200 rounded-2xl shadow-outer_light_dark100 dark:active:bg-white/5 active:bg-black/20"
          href="https://fullstack-chatapp-81nb.onrender.com/"
          target="_blank"
        >
          <img
            src="/chatty.png"
            alt="Project1"
            className="rounded-t-2xl border-b-2 border-black/60 dark:border-white/40"
          />
          <h2 className="font-semibold text-2xl py-1 text-center text-shadow-Light_Dark">
            Full Stack ChatApp
          </h2>
          <div className="flex flex-wrap justify-start gap-2 px-4 py-2">
            <div className="stack-badge">React.js</div>
            <div className="stack-badge">Node.js</div>
            <div className="stack-badge">Express.js</div>
            <div className="stack-badge">JWT</div>
            <div className="stack-badge">MongoDB</div>
            <div className="stack-badge">AI Api</div>
            <div className="stack-badge">Cloudinary</div>
            <div className="stack-badge">ShadCN</div>
            <div className="stack-badge">Tailwind</div>
          </div>
        </motion.a>
      </motion.header>
      <main className="flex flex-col items-center gap-10 my-10 px-10">
        <h1 className=" text-3xl font-bold text-shadow-Light_Dark">
          <span className="text-primary-100 ">Project</span> & Details
        </h1>

        <div className="sm:w-5xl px-4 sm:px-8 py-8 bg-light_100_dark_100 shadow-outer_light_dark100 rounded-2xl ">
          <h1 className=" text-center text-2xl font-bold border-b-2 pb-4">
            CareerCursor
          </h1>
          <p className="font-light my-4">
            Coming from a tier-3 city, one thing that always frustrated me was
            not knowing what jobs actually exist for people like me — or how to
            reach them. Most of us have passions or interests but no roadmap
            that connects them to real careers. <br /> <br />
            That’s why I started CareerCursor, a project that helps people
            discover what jobs they can do based on their context — their
            interests, qualifications, or passions — and gives them a clear
            roadmap to follow. It even has a tracker to keep users accountable
            to their progress
          </p>
          <ul className=" font-light list-disc px-4">
            <li className="my-1">
              Built full authentication system with JWT, cookies, and session
              handling.
            </li>
            <li className="my-1">
              Designed roadmap generation workflow using AI integration through
              OpenRouter.
            </li>
            <li className="my-1">
              Implemented responsive UI using React, Tailwind, ShadCN UI, and
              Framer Motion.
            </li>
            <li className="my-1">
              Structured backend using MVC, Express.js, Node.js, and MongoDB.
            </li>
            <li className="my-1">
              Included role-based flows and scalable architecture for future
              expansion
            </li>
          </ul>
        </div>
        <div className="sm:w-5xl px-4 sm:px-8 py-8 bg-light_100_dark_100 shadow-outer_light_dark100 rounded-2xl">
          <h1 className=" text-center text-2xl font-bold border-b-2 pb-4">
            Full Stack ChatApp
          </h1>
          <p className="font-light my-4">
            This is a full-stack, real-time chat application built with the MERN
            stack (MongoDB, Express, React, Node.js), featuring real-time
            communication via Socket.io, user authentication, profile
            customization, and theme selection.
          </p>
          <ul className=" font-light list-disc px-4">
            <li className="my-1">
              Implemented WebSocket-based real-time messaging using Socket.io.
            </li>
            <li className="my-1">
              Added secure authentication using JWT, bcrypt, sessions, and
              cookies.
            </li>
            <li className="my-1">
              Developed an optimized chat UI with message status, typing
              indicators, and responsive design.
            </li>
            <li className="my-1">
              Built backend with Node.js + Express.js and integrated Cloudinary
              for media uploads.
            </li>
            <li className="my-1">
              Deployed with environment configuration, REST APIs, and clean
              project structure.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
