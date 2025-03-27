import React from "react";
import { PROJECTS } from "../assets/constants/index";

const Projects = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-4xl font-thin text-center">Projects</h1>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded "
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
