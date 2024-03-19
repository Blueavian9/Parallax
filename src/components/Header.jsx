import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-8 flex justify-between items-center z-10">
      <div className="logo text-white font-bold text-2xl uppercase tracking-wide">
        Logo
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
