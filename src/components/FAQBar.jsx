import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
const FAQBar = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const count = props.no / 10;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.15 + count,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`sm:w-4xl rounded-2xl mb-3 active:bg-black/30 bg-black/20 ${
        open ? "bg-white/70 dark:bg-black/80" : ""
      } shadow shadow-outer_light_dark100`}
    >
      {/* Header */}
      <div
        className="flex items-center py-1 pr-4 pl-2 sm:py-4 sm:px-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-xl sm:text-3xl font-mono">
          Q{props.no}.
        </span>
        <div className="sm:text-2xl mx-2">{props.question}</div>
        <ChevronRight
          className={`text-xl transition-transform duration-300 ml-auto ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {/* Animated Content (only this part expands/collapses) */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden px-4 border-t dark:border-white/20 border-black/40"
          >
            <div className="py-2 font-light sm:text-xl font-mono pl-2">{props.ans}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQBar;
