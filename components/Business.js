/* eslint-disable no-unused-vars */
import React from "react";
import { businessData } from "../data";
import Image from "next/image";

const Business = () => {
  return (
    <div
      id="services"
      className="max-w-sm flex flex-col items-center justify-center   md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl rounded-lg  w-full p-12 min-w-max  bg-purple-300 bg-opacity-25 mt-10"
    >
      <div>
        <p className="text-center font-bold text-xl md:text-2xl">
          How can I help your business grow?
        </p>
      </div>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:space-x-4 items-center place-content-center place-items-center">
        {businessData.map((data) => {
          return (
            <div key={data.id}>
              <div className="m-7 flex items-center justify-center flex-col text-center ">
                <Image
                  src={data.image}
                  height={130}
                  width={130}
                  layout="fixed"
                />
                <p className="font-semibold text-lg mt-2">{data.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Business;

// {businessData.map((data) => {
//   return (
//     <div
//       key={data.id}
//       className="grid grid-cols-2 items-center justify-center"
//     >
//       <div className=" flex flex-col items-center justify-center ">
//         {data.title}
//         <Image
//           src={data.image}
//           height={100}
//           width={100}
//           layout="fixed"
//         />
//       </div>
//     </div>
//   )
// })}
