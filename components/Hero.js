import Image from "next/image";
const Hero = () => {
  return (
    <div
      id="hero"
      className="max-w-xs flex flex-col md:flex-row items-center  justify-evenly  md:max-w-3xl  lg:max-w-4xl xl:max-w-6xl rounded-lg  w-full p-12 min-w-max  mr-10 ml-10 bg-purple-300 bg-opacity-25 m-10"
    >
      <div>
        <div className="flex flex-col justify-start items-center sm:items-start">
          <p className="text-black font-bold text-3xl">Khushaal Choithramani</p>
          <p className="mt-7 font-semibold text-center text-lg text-blue-600 max-w-sm sm:max-w-full">
            <span className="text-black">Freelance</span> App Developer , Web
            Developer and UI Designer🚀
          </p>
          <a href="#services">
            <div className="bg-blue-500 text-center p-4 mt-12 w-36 rounded-lg text-white">
              Get Started
            </div>
          </a>

          <a href="#contact">
            <div className="hover:bg-gray-300 text-red-700 text-center p-4 mt-2 w-36 rounded-lg">
              Contact Me
            </div>
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-0">
        <Image
          layout="fixed"
          src={require("../images/Image 2.png")}
          height={210}
          width={210}
        />
      </div>
    </div>
  );
};

export default Hero;
