import { motion } from "framer-motion";
import CircularProgress from "../components/CircularProgress";

const Skills = () => {
  return (
    <>
      <motion.header
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className=" "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="skill-bar"
        >
          <h2 className=" font-semibold sm:text-2xl">FRONTEND</h2>
          <p className="font-extralight text-sm sm:text-xl tracking-wide border-l pl-4">
            HTML , CSS , Javascript , React.js , Next.js , React Router ,
            Tailwind CSS, ShadCN UI, DaisyUI, Framer Motion, Figma
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          iv
          className="skill-bar"
        >
          <h2 className=" font-semibold sm:text-2xl">BACKEND</h2>
          <p className="font-extralight text-sm sm:text-xl tracking-wide border-l pl-4">
            Node.js , Express.js , REST APIs , MVC Architecture ,
            Websockets(Socket.io), JWT , Bcrypt , Multer , Cloudinary
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="skill-bar"
        >
          <h2 className=" font-semibold sm:text-2xl">TOOLS & OTHERS</h2>
          <p className="font-extralight text-sm sm:text-xl tracking-wide border-l pl-4">
            Git , GitHub , Render , Vercel , Typescript, Basic Email Services ,
            AI Integration(OpenRouter), Postman
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex gap-6 flex-col sm:flex-row"
        >
          <div className=" sm:w-1/2 skill-bar">
            <h2 className=" font-semibold sm:text-2xl">DATABASE</h2>
            <p className="font-extralight text-sm sm:text-xl tracking-wide border-l pl-4">
              MySQL , MongoDB , Mongoose , MongoDB Atlas
            </p>
          </div>
          <div className="sm:w-1/2 skill-bar ">
            <h2 className=" font-semibold sm:text-2xl">LANGUAGE</h2>
            <p className="font-extralight text-sm sm:text-xl tracking-wide border-l pl-4">
              C , C++ , Java(DSA)
            </p>
          </div>
        </motion.div>
      </motion.header>
      <main className="flex flex-col items-center px-4 gap-6 my-8">
        <h2 className="text-3xl font-bold text-shadow-Light_Dark">
          <span className="text-primary-100">Skill</span> Knowledge
        </h2>

        <div className="w-full flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Frontend */}
          <div className="w-64 flex flex-col items-center gap-3 p-4 trans-pannel-min-shadow">
            <h2 className="text-2xl font-semibold">Frontend</h2>
            <CircularProgress value={80} />
          </div>

          {/* Backend */}
          <div className="w-64 flex flex-col items-center gap-3 p-4 trans-pannel-min-shadow">
            <h2 className="text-2xl font-semibold">Backend</h2>
            <CircularProgress value={90} />
          </div>

          {/* DSA */}
          <div className="w-64 flex flex-col items-center gap-3 p-4 trans-pannel-min-shadow">
            <h2 className="text-2xl font-semibold">DSA</h2>
            <CircularProgress value={40} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
