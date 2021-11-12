import { GitHub, Public, Web } from "@material-ui/icons";
import React from "react";
import { projectData } from "../data";
import Link from "next/link";

const VideosPart = () => {
  return (
    <div
      id="projects"
      className=" max-w-sm flex flex-col items-center justify-center   md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl rounded-lg  w-full p-12 min-w-max  bg-purple-300 bg-opacity-25 mt-10"
    >
      <p className="text-2xl font-bold">Awesome Projects I have built...</p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-10"></div>
    </div>
  );
};

export default VideosPart;
