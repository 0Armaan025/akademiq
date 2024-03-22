import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#faeee7] border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span
              className="self-center text-2xl  whitespace-nowrap text-[#33272a] font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Akademiq
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:bg-gray-200"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#faeee7]">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#33272a] rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-[#33272a]"
                  aria-current="page"
                >
                  Mission / About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#33272a] rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-[#33272a]"
                  aria-current="page"
                >
                  Operations
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-[#33272a] rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-[#33272a]"
                  aria-current="page"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
                    alt="profile picture"
                    height="30px"
                    // className="mb-1"
                    width="35px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
