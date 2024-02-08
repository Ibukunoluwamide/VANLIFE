import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logog.svg'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const toggleBtn = (link) => {
    // console.log(link);
    setActiveLink(link);
  };

  return (
    <>
      <nav className="sticky top-0 bg-white border-gray-200 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className={`flex items-center space-x-3 rtl:space-x-reverse ${
              activeLink === "h" ? "" : ""
            }`}
            onClick={() => toggleBtn("h")}
          >
            <img src={Logo} alt="" srcset="" className="w-44" />
        
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  to="#"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    activeLink === "host" ? "underline" : ""
                  }`}
                  aria-current="page"
                  onClick={() => toggleBtn("host")}
                >
                  Host
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 text-gray-900 rounded md:border-0 hover:underline md:p-0 ${
                    activeLink === "about" ? "underline" : ""
                  }`}
                  onClick={() => toggleBtn("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/vans"
                  className={`block py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 hover:underline ${
                    activeLink === "vans" ? "underline" : ""
                  }`}
                  onClick={() => toggleBtn("vans")}
                >
                  Vans
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
