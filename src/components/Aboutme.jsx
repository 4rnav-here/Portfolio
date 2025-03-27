import React from "react";
import profile_pic from "../assets/assets/profile_pic.jpg";

const Aboutme = () => {
  return (
    <div>
      <div>
        <h2 className="justify-self-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-slate-700 py-30">
          About Me
        </h2>
        <div className="flex justify-center space-x-70">
          <div>
            <img src={profile_pic} className="rounded-lg shadow-lg h-60 w-60" />
          </div>
          <div className="box-border h-80 w-120">
            <p className="justify-center font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, porro corrupti iure asperiores a expedita atque inventore sed labore esse, nisi hic delectus dolore minus repudiandae nihil iste sint enim cupiditate molestiae deleniti voluptatibus debitis. Voluptas optio iste pariaturminus repudiandae nihil iste sint enim cupiditate molestiae deleniti voluptatibus debitis. Voluptas optio iste pariatur ad.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
