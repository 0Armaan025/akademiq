import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className=" rounded-lg  ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap text-[#33272a]"
                style={{ fontFamily: "Poppins" }}
              >
                Akademiq
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6 text-[#33272a]"
                >
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline text-[#33272a] mr-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <span className="block text-sm text-[#33272a] text-center">
            © 2024{" "}
            <a
              href=""
              className="hover:underline"
              style={{ fontFamily: "Poppins" }}
            >
              Akademiq
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
