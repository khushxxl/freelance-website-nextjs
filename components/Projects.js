import { GitHub, Public, Web } from "@material-ui/icons";
import React from "react";
import { projectData } from "../data";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" max-w-sm flex flex-col items-center justify-center   md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl rounded-lg  w-full p-12 min-w-max  bg-purple-300 bg-opacity-25 mt-10"
    >
      <p className="text-2xl font-bold">My Projects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-10">
        {projectData.map((data) => {
          return (
            <div key={data.id}>
              <div className="mt-10 text-center flex flex-col space-y-5 items-center w-full justify-center">
                <Link href={data.deployedLink}>
                  <img
                    src={data.image}
                    alt=""
                    className="h-48  p-1 border-2 border-yellow-600 rounded-xl"
                  />
                </Link>

                <p className="text-lg font-semibold">{data.name + "⚡️"}</p>
                <div className="space-x-10 p-3 border-2 border-red-300 hover:bg-gray-300 rounded-lg">
                  <Link href={data.gitRepoLink}>
                    <GitHub className="cursor-pointer" />
                  </Link>
                  <Link href={data.deployedLink}>
                    <Public className="cursor-pointer" />
                  </Link>
                </div>
                <div className="max-w-sm">
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
