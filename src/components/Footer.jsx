import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="flex sm:flex-nowrap flex-wrap justify-center sm:justify-between items-center gap-2 lg:mx-25 sm:mx-12.5 mx-5 py-4 text-sm text-white">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-syne sm:text-[32px] text-2xl font-bold">
            <span className="text-white">Dr. Qurat ul Ain</span>
          </h1>
        </Link>
        <p className="text-white">
          &copy; {new Date().getFullYear()} {"Dr. Qurat ul Ain"}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
