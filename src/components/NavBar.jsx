import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mb-5 py-6">
        <div className="flex flex-shrink-0 items-center text-2xl text-white">
        Building Scalable & Efficient Web Apps
        </div>

        <div className="m-8 flex items-center justify-between gap-4 text-2xl">
          <a
            href="https://linkedin.com/in/arnavtrivedi2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-slate-500 transition-colors duration-200" />
          </a>

          <a
            href="https://github.com/4rnav-here"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-slate-500 transition-colors duration-200" />
          </a>

          <a href="mailto:arnavtrivediofficial@gmail.com">
            <FiMail className="hover:text-slate-500 transition-colors duration-200" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
