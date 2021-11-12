const Navbar = () => {
  return (
    <div className=" h-14 py-5  mx-auto bg-white items-center flex justify-between max-w-6xl min-w-max w-full sticky top-0 z-50">
      <div>
        <a href="#home">
          <p className="ml-5 font-bold text-2xl cursor-pointer">Khushaal</p>
        </a>
      </div>

      <ul className="flex font-semibold">
        <a href="#home">
          <li className="hover:text-red-700 mr-5 cursor-pointer">Home</li>
        </a>

        <a href="#services">
          <li className="hover:text-red-700 mr-5 cursor-pointer">Services</li>
        </a>
        <a href="#projects">
          <li className="hover:text-red-700 mr-5 cursor-pointer">Work</li>
        </a>
        <a href="#contact">
          <li className="hover:text-red-700 mr-5 cursor-pointer">Contact</li>
        </a>
        <a href="https://khushcodez.hashnode.dev">
          <li className="hover:text-red-700 mr-5 cursor-pointer">Blogs❤️</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
