import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen">
      <motion.header
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="h-120 flex flex-col justify-center items-center header_prop"
      >
        <h1 className=" text-4xl font-bold">404</h1>
        <h1 className=" text-2xl font-bold">Page Not Found</h1>
        <h1 className=" text-xl ">Something Went Wrong</h1>
        <Link
          to={'/'}
          className="px-4 py-2 inline-flex gap-2 items-center rounded-md text-black font-semibold bg-primary-100 shadow-[0_0_8px] shadow-black/30 mt-4 active:opacity-40 sm:hover:bg-amber-300 "

        >
          GO to Home
        </Link>
      </motion.header>
    </div>
  );
};

export default NotFoundPage;
