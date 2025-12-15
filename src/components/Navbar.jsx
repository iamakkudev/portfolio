import ThemeButton from "./ThemeButton";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const classes = ({ isActive }) =>
    isActive
      ? "bg-primary-100 shadowl dark:shadowd text-black font-bold px-2 py-1 rounded-full outline-none"
      : "outline-none px-2 py-1 sm:mx-1 rounded-full sm:hover:bg-primary-100/20";
  return (
    <div className="fixed z-30 flex gap-2 top-2 left-1/2 -translate-x-1/2 ">
      <nav className="flex items-center px-6 py-3 navbar-prop">
        <div className="hidden sm:inline border-r-2 pr-2 mr-2 ">iamakkudev</div>
        <NavLink to={"/"} className={classes}>
          Home
        </NavLink>
        <NavLink to={"/skills"} className={classes}>
          Skill
        </NavLink>
        <NavLink to={"/projects"} className={classes}>
          Project
        </NavLink>
        <NavLink to={"/contact"} className={classes}>
          Contact
        </NavLink>
      </nav>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
