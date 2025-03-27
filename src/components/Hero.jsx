import React from "react";
import profile_pic from "../assets/assets/profile_pic.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between py-10">
        <motion.div
          className="box-border h-50 w-100"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="antialised text-5xl py-5 font-thin">Arnav Trivedi</h1>
          <span className="text-2xl py-5 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Full Stack Developer
          </span>
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem
            ullam esse non perferendis inventore dignissimos delectus obcaecati
            ipsa sapiente magni quasi cumque accusamus fugiat, nam facilis
            aspernatur repellat incidunt. delectus obcaecati ipsa sapiente magni
            quasi cumque accusamus fugiat, nam facilis aspernatur repellat
            incidunt
          </p>
        </motion.div>
        <motion.div className="px-30"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={profile_pic} className="rounded-lg shadow-lg h-100 w-100" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
