import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

  return (
    <nav className="w-full h-28 bg-[#232345] flex justify-between items-center px-7">
      <h2 className="text-white">LOGO</h2>
      <div className="links w-4/12 flex justify-between">

      <NavLink
        exact
        to="/"
        className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
        Home
      </NavLink>
      <NavLink
        exact
        to="/aboutus"
        className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
        About Us
      </NavLink>
      <NavLink
        exact
        to="/faq"
        className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
        FAQ
      </NavLink>
      <NavLink
        exact
        to="/contactus"
        className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
        Contact Us
      </NavLink>
        </div>
      <Button addClass={"bg-[#0055FF] w-[148px] h-[40px]"}> Login</Button>
    </nav>
  );
}

export default Navbar