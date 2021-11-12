import { Twitter, Mail, Instagram, LinkedIn, GitHub } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="mt-5 flex flex-col justify-start items-start">
      <h1>Get Reply Urgently ⚡️</h1>

      <div className="space-x-6 cursor-pointer flex mt-2">
        <a href="https://github.com/khushxxl">
          <div className="hover:animate-bounce ">
            <GitHub />
          </div>
        </a>
        <a href="https://www.instagram.com/khushxxl_04/">
          <div className="hover:animate-bounce ">
            <Instagram />
          </div>
        </a>
        <a href="https://twitter.com/khushaal_04">
          <div className="hover:animate-bounce ">
            <Twitter />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/khushaal-choithramani-250285208/">
          <div className="hover:animate-bounce ">
            <LinkedIn />
          </div>
        </a>
        <a href="mailto:khushaal.choithramani@gmail.com">
          <div className="hover:animate-bounce ">
            <Mail />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
