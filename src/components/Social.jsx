import { FileText, Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
const Social = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-2 right-4 sm:right-14 sm:bottom-6">
      {open && (
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.01, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom" }}
          className="flex flex-col"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="menu-buttons">
            <FileText />
          </a>
          <a href="https://www.linkedin.com/in/akash-sahani-5947b6243/" target="_blank" className="menu-buttons">
            <Linkedin />
          </a>
          <a href="https://github.com/iamakkudev" target="_blank" className="menu-buttons">
            <Github />
          </a>
        </motion.div>
      )}
      <div
        className="menu-buttons flex justify-center transition ease-linear"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu className="" size={20} />}
      </div>
      
    </div>
  );
};

export default Social;
