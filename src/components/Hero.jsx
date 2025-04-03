import React from "react";
import profile_pic from "../assets/assets/new_pfp.jpg";
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
          Hey there! I’m Arnav, a passionate developer with expertise in web development, data science, and machine learning. I love building scalable applications, exploring new technologies, and solving real-world problems through code. With experience in frameworks like Next.js, Express, and MongoDB, I create efficient, user-friendly solutions. Whether it’s developing innovative web apps or diving into data-driven insights, I’m always eager to learn and grow. Let’s create something amazing together!
          </p>
        </motion.div>
        <motion.div className="px-30"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={profile_pic} className="rounded-lg shadow-lg h-100 w-140" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
