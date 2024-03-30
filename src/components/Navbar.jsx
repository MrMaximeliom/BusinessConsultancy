import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoHome } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineAccountBalance } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
const Navbar = () => {
  // manage navbar's visibility
  const [nav, setNav] = useState(false);

  // toggle function to handle the navbar's display
  const handleNavbar = () => {
    setNav(!nav);
  };
  // array containing navigation items
  const navItems = [
    { id: 2, text: "About US", href: "/about-us", icon: <FaRegStar /> },
    {
      id: 3,
      text: "Business Setup",
      href: "/business-setup",
      icon: <MdBusinessCenter />,
    },
    {
      id: 4,
      text: "PRO SERVICE",
      href: "/services",
      icon: <BsFillPeopleFill />,
    },
    {
      id: 5,
      text: "Accounting",
      href: "/accounting",
      icon: <MdOutlineAccountBalance />,
    },
    {
      id: 6,
      text: "CORPORATE TAX UAE",
      href: "/corporate-tax-uae",
      icon: <FaFileInvoiceDollar />,
    },
    {
      id: 7,
      text: "OTHER SERVICES",
      href: "/other-services",
      icon: <MdMiscellaneousServices />,
    },
    {
      id: 8,
      text: "NEWS",
      href: "/news",
      icon: <FaNewspaper />,
    },
    {
      id: 9,
      text: "CONTACT",
      href: "/contact",
      icon: <BiSupport />,
    },
  ];
  const border = `1px solid #1E67C6`;
  const boxShadow = `0px 4px 24px #1E67C6`;

  return (
    <div
      className="
        bg-nile-light
        flex 
        justify-between
        items-center
        h-24
        max-w-[12024px] 
        mx-1uto
        px-4
      
        border-b-gray-300
        pt-16
        pb-16
        "
    >
      {/* logo */}
      <div className="lg:max-w-80 md:max-w-72 max-w-60">
        <img src="/images/logo.png" alt="logo" />
      </div>
      {/* <h1>Business 4 Business</h1> */}

      {/* Desktop Navigation */}
      <ul className="hidden 2xl:flex">
        {navItems.map((item) => (
          <Link to={item.href} key={item.id}>
            <motion.li
              className="flex items-center gap-1
               p-4 rounded-xl m-3 cursor-pointer   
               whitespace-nowrap border-r-gray-300 text-nile-400 uppercase hover:bg-nile-100 focus:bg-nile-100"
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
              <span>{item.icon}</span>
              {item.text}
            </motion.li>
          </Link>
        ))}
      </ul>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNavbar} className="block 2xl:hidden ">
        {nav ? (
          <AiOutlineClose size={20} color="black" />
        ) : (
          <AiOutlineMenu size={20} color="black" />
        )}
      </div>
      {/* Mobile Navigation Menu */}

      <ul
        className={
          nav
            ? "absolute z-40 lg:hidden left-0 top-0 w-[60%] h-auto border-r border-r-gray-300 ease-in-out duration-500 mt-32 rounded-xl  bg-nile-light"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.href} key={item.id}>
            <li
              key={item.id}
              className="flex items-center justify-start gap-1 p-4 border-b border-b-[#1E67C6] rounded-xl duration-300 cursor-pointer hover:bg-nile-100 focus:bg-nile-100 "
            >
              <span>{item.icon}</span>
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
