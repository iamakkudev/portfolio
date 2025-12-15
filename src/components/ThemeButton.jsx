import { MoonStar, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export const ThemeButton = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); // persist
  }, [theme]);

  return <button onClick={toggleTheme}
  className=" px-4.5 navbar-prop focus:outline-none active:opacity-80 cursor-pointer"
  >
    {
    theme === "light" ? <Sun size={20} /> : <MoonStar size={20} />


    }
  </button>;
};

export default ThemeButton;
