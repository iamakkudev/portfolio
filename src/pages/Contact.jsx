import { motion } from "framer-motion";
import FAQBar from "../components/FAQBar";
import ContactForm from "../components/ContactForm";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

import CopyEmail from "../components/CopyEmail";

const Contact = () => {
  return (
    <>
      <motion.header
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="flex flex-col items-center header_prop"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-xl font-bold mb-8 text-shadow-Light_Dark"
        >
          <span className="text-primary-100">Frequently</span> Asked Question
        </motion.h2>
        <FAQBar
          no={1}
          question={"What kind of roles or projects are you open to?"}
          ans={
            "Open to full-time roles, internships, and freelance projects focused on full-stack or backend development."
          }
        />
        <FAQBar
          no={2}
          question={"What tech stack do you work with the most?"}
          ans={
            "“MERN stack (React, Node.js, Express, MongoDB) or Nextjs, with experience in authentication, REST APIs, and modern UI using Tailwind."
          }
        />
        <FAQBar
          no={3}
          question={"How do you approach building a project from scratch?"}
          ans={
            "I start by understanding the problem, design data models, API flow And Frontend, build the backend first, then integrate frontend and refine UX."
          }
        />
        <FAQBar
          no={4}
          question={"Can I see real projects or source code?"}
          ans={
            "Yes, my GitHub contains complete projects with authentication, backend logic, and clean folder structure."
          }
        />
        <FAQBar
          no={5}
          question={"What makes you different from other junior developers?"}
          ans={
            "I focus on understanding how things work under the hood — auth flows, API security, state management — not just making things look good."
          }
        />
      </motion.header>
      <main className="flex flex-col items-center px-4 gap-6 my-8">
        <div className="px-4 py-4 bottom-0 rounded-2xl bg-white dark:bg-black shadow-outer_light_dark100 sm:hidden">
          <h2 className="text-xl font-semibold dark:text-primary-100 text-black text-center">
            Get In Touch
          </h2>
          <p className="text-center tracking-tight font-light ">
            Have an opportunity, idea, or question? Let’s connect. You can reach
            me through the form below or find me on my social platforms.
          </p>
          <div className="py-2 px-2 text-white mt-2 rounded-2xl dark:bg-white/20 bg-black/10 border dark:border-white/60 border-black/20">
            <div className=" flex items-center gap-1">
              <a
                href="https://www.linkedin.com/in/akash-sahani-5947b6243/"
                target="_blank"
                className="social-badge bg-blue-500"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/localhost.akku?igsh=a3g1ZXJjMXB1OWpk"
                target="_blank"
                className="social-badge bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]"
              >
                <Instagram size={15} /> Instagram
              </a>
              <a
                href="https://github.com/iamakkudev"
                target="_blank"
                className="social-badge bg-black"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://x.com/iamakkudev?t=NUh-ot-iQ5h8sQDB717-zA&s=09"
                target="_blank"
                className="social-badge bg-black"
              >
                <Twitter size={15} /> X
              </a>
            </div>
            <CopyEmail />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-shadow-Light_Dark">
          <span className="text-primary-100">Contact</span> me
        </h2>

        <div className="sm:flex gap-5">
          <ContactForm />

          <div className="relative hidden sm:inline ">
            <img
              src="/sample.jpg"
              alt=""
              className="rounded-2xl h-110 shadow-outer_light_dark100"
            />
            <div className=" absolute w-full h-full inset-0 rounded-2xl">
              <div className="w-full absolute px-4 py-2 bottom-0 rounded-2xl bg-white/40 dark:bg-black/60 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-center">
                  Get In Touch
                </h2>
                <p className="text-center tracking-tight font-light ">
                  Have an opportunity, idea, or question? Let’s connect. You can
                  reach me through the form below or find me on my social
                  platforms.
                </p>
                <div className="py-2 px-2 text-white mt-2 rounded-2xl dark:bg-white/20 bg-black/10 border dark:border-white/60 border-black/20">
                  <div className=" flex items-center gap-1">
                    <a
                      href="https://www.linkedin.com/in/akash-sahani-5947b6243/"
                      target="_blank"
                      className="social-badge bg-blue-600"
                    >
                      <Linkedin size={15} /> LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/localhost.akku?igsh=a3g1ZXJjMXB1OWpk"
                      target="_blank"
                      className="social-badge bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]"
                    >
                      <Instagram size={15} /> Instagram
                    </a>
                    <a
                      href="https://github.com/iamakkudev"
                      target="_blank"
                      className="social-badge bg-black"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a
                      href="https://x.com/iamakkudev?t=NUh-ot-iQ5h8sQDB717-zA&s=09"
                      target="_blank"
                      className="social-badge bg-black"
                    >
                      <Twitter size={15} /> X
                    </a>
                  </div>
                  <CopyEmail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
