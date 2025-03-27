import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoIosGitBranch } from "react-icons/io";

const Technologies = () => {
  return (
    <div>
      <div className="text-4xl justify-self-center font-thin py-10">
        Technology
      </div>
      <div className="flex justify-center gap-6 text-5xl py-5">
        {[FaReact, FaNodeJs, SiExpress, DiMongodb, FaJava, DiJavascript1, FaPython, FaHtml5, DiCss3, IoIosGitBranch].map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -10 - index * 2, 0], // Each icon moves differently based on index
              transition: {
                duration: 2 + index * 0.2, // Different speeds for variation
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            initial={{ scale: 1 }}
            exit={{ scale: 1 }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
