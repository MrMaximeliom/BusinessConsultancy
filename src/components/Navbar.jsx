import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  // manage navbar's visibility
  const [nav, setNav] = useState(false);

  // toggle function to handle the navbar's display
  const handleNavbar = () => {
    setNav(!nav);
  };
  // array containing navigation items
  const navItems = [
    { id: 2, text: "Services", href: "/services" },
    { id: 3, text: "About US", href: "/about-us" },
    { id: 4, text: "Contact US", href: "contact-us" },
  ];
  const border = `1px solid #1E67C6`;
  const boxShadow = `0px 4px 24px #1E67C6`;

  return (
    <div
      className="
        bg-gray-950
        flex 
        justify-between
        items-center
        h-24
        max-w-[12024px] 
        mx-1uto
        px-4
        text-white
        border-b-gray-300
        "
    >
      {/* logo */}
      <h1 className="w-full text-3xl font-bold text-gray-50">
        Business 4 Business
      </h1>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link to={item.href} key={item.id}>
            <motion.li
              className="p-4 rounded-xl m-3 cursor-pointer  whitespace-nowrap border-r-gray-300"
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
            >
              {item.text}
            </motion.li>
          </Link>
        ))}
      </ul>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNavbar} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "absolute z-40 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-300 ease-in-out duration-500 mt-4 pt-14"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className=" p-4 border-b border-b-[#1E67C6] rounded-xl duration-300 cursor-pointer"
          >
            <Link to={item.href}> {item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
