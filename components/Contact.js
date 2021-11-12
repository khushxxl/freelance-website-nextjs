import { CallRounded } from "@material-ui/icons";
import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-xs text-center flex flex-col items-center mb-20 justify-center    md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl rounded-lg  w-full p-12 min-w-max  bg-purple-300 bg-opacity-25 mt-10"
    >
      <div>
        <p className="text-2xl font-bold">Contact Me Now</p>
        <p className="text-gray-400 font-semibold">Get the best Quote</p>
      </div>
      {/* <div className="mt-10 flex items-center justify-center space-x-3">
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full p-2 rounded-xl"
        />
        <a href="MFKE">
          <div className="bg-blue-500 text-center p-2  w-24 rounded-lg text-white">
            Submit
          </div>
        </a>
      </div> */}
      <div className="mt-5 flex flex-col items-start">
        <Footer />
        <div className="flex items-center justify-center mt-4">
          <CallRounded />
          <a href="tel:+91 77385-52061">
            <div className=" text-center p-2  w-24 rounded-lg text-black">
              Call Now
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
