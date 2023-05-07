import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

  return (
    <nav className="w-full h-28 bg-[#232345]">
      <NavLink
        exact
        to="/"
        className={({ isActive }) => (isActive ? "active font-roboto" : "")}
      >
        Home
      </NavLink>
      <Button addClass={"bg-[#0055FF] w-[148px] h-[40px]"}> Login</Button>
    </nav>
  );
}

export default Navbar