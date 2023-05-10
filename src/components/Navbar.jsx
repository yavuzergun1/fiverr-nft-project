import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="w-full h-28 bg-[#232345] flex justify-between items-center px-3 sm:px-7">
      <h2 className="text-white">LOGO</h2>
      <div className="links w-5/12 hidden sm:flex justify-between">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) => (isActive ? "active " : "text-white")}
        >
          Contact Us
        </NavLink>
      </div>
      <Link
        to="/account"
        className="text-base text-center pt-2 text-white rounded-xl font-normal bg-[#0055FF] w-[148px] h-[40px] absolute right-16 sm:relative "
      >
        {" "}
        Login
      </Link>

      <div className="hamburger-menu relative sm:hidden inline-block ">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={handleMenuClick}
          className="hidden"
          id="menuToggle"
        />
        <label
          htmlFor="menuToggle"
          className={`block text-sm cursor-pointer ${
            isOpen && "relative z-20 "
          }`}
        >
          <span
            className={`block w-5 h-[3px] mb-[3px] ${
              isOpen
                ? "bg-gray-500 relative z-20 rotate-45 translate-y-[5px] transition-all"
                : "bg-white z-50 transition-all"
            }`}
          ></span>
          <span
            className={`block  w-5 h-[3px] mb-[3px] ${
              isOpen ? "transition-all hidden" : "bg-white z-50 transition-all"
            }`}
          ></span>
          <span
            className={`block  w-5 h-[3px] mb-1 ${
              isOpen
                ? "bg-gray-500 relative z-20 -rotate-45 -translate-y-[1px] transition-all "
                : "bg-white z-50 transition-all"
            }`}
          ></span>
        </label>
        <div
          className={`absolute flex flex-col -top-14 left-0 h-screen z-10 bg-white shadow-lg p-4 transition-all duration-300 ease-in-out ${
            isOpen ? "-translate-x-52 w-screen" : "translate-x-52"
          }`}
        >
          <Link
            to="/"
            onClick={handleMenuClick}
            className="my-2 text-gray-800 mt-16 font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            onClick={handleMenuClick}
            to="/aboutus"
            className="my-2 text-gray-800 font-medium hover:text-primary"
          >
            About Us
          </Link>
          <Link
            onClick={handleMenuClick}
            to="/contactus"
            className="my-2 text-gray-800 font-medium hover:text-primary"
          >
            Contact Us
          </Link>
          <Link
            onClick={handleMenuClick}
            to="/faq"
            className="my-2 text-gray-800 font-medium hover:text-primary"
          >
            FAQs{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
