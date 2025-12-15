import { motion } from "framer-motion";
import { Download } from "lucide-react";
const Home = () => {
  return (
    <>
      <motion.header
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="flex flex-wrap justify-between items-center gap-5 sm:gap-x-60 header_prop"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="sm:w-md"
        >
          <h3 className="text-3xl sm:text-5xl font-sans font-extralight">
            Hii, I'm
          </h3>

          <h1 className="my-2 text-4xl sm:text-7xl font-bold text-shadow-Light_Dark">
            <span className=" text-primary-100">FULL</span> STACK <br />{" "}
            Developer
          </h1>

          <p className="font-light font-sans leading-4.5 sm:leading-5 tracking-wide pr-12">
            Aspiring full-stack developer focused on building clean, fast, and
            user-centered digital experiences.
          </p>
          <a
            href="./resume.pdf"
            className="px-4 py-2 inline-flex gap-2 items-center rounded-xl text-black font-semibold bg-primary-100 shadow-[0_0_8px] shadow-black/30 mt-4 active:opacity-40 sm:hover:bg-amber-300 "
            download={true}
          >
            <Download size={20} />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="sm:w-[380px] border border-primary-100 rounded-2xl py-4 px-18 sm:px-10 sm:py-10 sm:rounded-full"
        >
          <img
            src="./profile_img.webp"
            className="opacity-95 z-0 rounded-2xl sm:rounded-full border border-white dark:border-black "
          />
        </motion.div>
      </motion.header>

      <main className="flex gap-10 flex-col sm:flex-row justify-center px-10 py-4 my-4 sm:px-10">
        <div className="sm:w-sm text-center py-2 px-4 rounded-2xl bg-light_100_dark_100 shadow-outer_light_dark100">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary-100 text-shadow-Light_Dark mb-4">
            Qualification
          </h1>
          <div className="w-full my-6 trans-pannel-min-shadow">
            <div className="border-b p-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-start">
                  Bachelor of Computer Applications (BCA)
                </h2>
                <h2 className="text-sm ">2023 - 2026</h2>
              </div>
              <p className="font-light text-sm text-start">
                JS University, Shikohabad
              </p>
            </div>
            <p className="text-start opacity-90 font-light p-2">
              Built a strong foundation in computer science, learning
              programming, frontend and backend development, databases,
              authentication, and data structures while strengthening
              problem-solving and logical thinking skills.
            </p>
          </div>
          <div className="w-full my-2 trans-pannel-min-shadow">
            <div className="border-b p-2">
              <h2 className="font-semibold text-start">
                Intermediate(12<sup>th</sup>)
              </h2>
              <p className="font-light text-sm text-start">
                Bapu Inter College , pipipganj , Gorakhpur , UP
              </p>
            </div>
            <p className="text-start opacity-90 font-light p-2">
              Gained core academic knowledge while developing discipline,
              analytical thinking, and problem-solving skills that formed the
              base for my technical and programming journey.
            </p>
          </div>
        </div>
        <div className="sm:w-3xl text-center py-2 px-6 rounded-2xl bg-light_100_dark_100 shadow-outer_light_dark100">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-shadow-Light_Dark">
            <span className="text-primary-100 ">About</span> me
          </h1>
          <p className="font-light leading-7 sm:leading-6 tracking-wide sm:tracking-wider">
            I’m a self-driven full stack developer who enjoys turning ideas into
            fast, functional, and scalable web applications. I learn by
            building, breaking, and fixing things — and that approach has shaped
            the way I solve problems and design systems. I started with the
            basics of programming in C, C++, and Java, and gradually shifted
            into full-stack development, where I found what I enjoy most:
            creating complete products from scratch. I like
            <br /> <br />
            understanding how everything fits together — from the UI
            interactions to the backend architecture and the data flow behind
            it. I’m not chasing shortcuts or trendy tools. I care about writing
            code that’s clean, maintainable, and built with intention. What
            really motivates me is improvement — becoming a better engineer
            today than I was yesterday. Right now, I’m focused on building
            real-world applications, experimenting with new ideas, and refining
            my thinking as a developer. My goal is simple: keep learning, keep
            shipping, and keep becoming someone who can solve meaningful
            problems with technology.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
