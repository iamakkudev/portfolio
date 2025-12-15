import { Clipboard,ClipboardCheckIcon } from "lucide-react";
import { useState } from "react";

const CopyEmail = () => {
  const email = "akashsahani9795@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="py-1 px-2 w-full flex justify-between items-center rounded-md mt-2 text-sm border dark:border-white/60 border-black/20 bg-gray-700 cursor-pointer"
    >
      {email}
      {
      copied ? <ClipboardCheckIcon />:<Clipboard />
      }
    </button>
  );
};

export default CopyEmail;
