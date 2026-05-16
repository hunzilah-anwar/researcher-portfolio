import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ListMinus } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  const heroData = {
    name: "QURATULAIN",
    description: `Internationally recognized interdisciplinary researcher specializing in education, addiction science, behavioral health, and school counseling frameworks. Experienced in leading global research collaborations across the USA, Australia, Taiwan, and Pakistan.`,
    contactInfo: {
      location: "College Station, Texas, USA",
      email: "aineenwz@gmail.com",
      phone: "+1 (505) 398-5375",
    },
    socialLinks: {
      facebook:
        "https://www.facebook.com/wix",
      twitter:
        "https://www.twitter.com/wix",
      linkedin: "https://www.linkedin.com/in/drqurat-ul-ain-4aa8a2165/",
      academic: "https://www.iare.com.au/team-3/",
      googleScholar: "https://scholar.google.com/citations?user=2T7GuFUAAAAJ&hl=en"
    },
  };

  return (
    <header className="text-primary bg-white/70 backdrop-blur-md shadow-md fixed w-full z-50">
      <nav className="mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <a href="#home">
          <h1 className="font-syne text-[32px] font-bold">
            <span className="text-secondary">{heroData.name}</span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <ul className="md:flex hidden space-x-6 text-lg font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path} className="relative group py-2">
                <a
                  href={item.path}
                  className={`px-4 py-2 transition-colors duration-300 text-center ${
                    isActive
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {item.name}

                  {/* Top Bar */}
                  <span
                    className={`absolute -top-4.5 left-0 w-full h-0.75 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-secondary"
                        : "bg-transparent group-hover:bg-secondary"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Menu Button */}
        <div>
          <ListMinus
            size={28}
            onClick={() => setIsOpen(true)}
            className="text-primary hover:text-secondary cursor-pointer transition ease-in-out duration-200"
          />
        </div>

        {/* Sidebar Popup */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 h-screen flex justify-end bg-black/80 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <div className="fixed top-0 -right-2 flex justify-end bg-black/40">
              <div className="bg-[#F3F3F3] w-full sm:w-96 h-screen px-6 py-4 relative shadow-lg overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-7 right-4 text-primary cursor-pointer hover:text-secondary transition ease-in-out duration-200"
                >
                  <ListMinus size={24} />
                </button>

                {/* Content */}
                <div className="block">
                  <a
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="inline-block"
                  >
                    <h1 className="font-syne text-[32px] font-bold mb-4">
                      {heroData.name.split("").map((char, index) => (
                        <span
                          key={index}
                          className={index % 2 === 0 ? "text-secondary" : ""}
                        >
                          {char}
                        </span>
                      ))}
                    </h1>
                  </a>

                  <p className="text-primary text-[13px] mb-6">
                    {heroData.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-5 text-gray-600 mb-8">
                    <p className="text-[16px] text-primary font-medium">
                      <strong className="text-[14px] text-secondary font-bold">
                        Address
                      </strong>
                      <br />
                      {heroData.contactInfo.location}
                    </p>

                    <p className="text-[16px] text-primary font-medium">
                      <strong className="text-[14px] text-secondary font-bold">
                        Email
                      </strong>
                      <br />
                      {heroData.contactInfo.email}
                    </p>

                    <p className="text-[16px] text-primary font-medium">
                      <strong className="text-[14px] text-secondary font-bold">
                        Call Now
                      </strong>
                      <br />
                      {heroData.contactInfo.phone}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mb-10 text-white">
                    <a
                      href={heroData.socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>

                    <a
                      href={heroData.socialLinks.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>

                    <a
                      href={heroData.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>
                    <a
                      href={heroData.socialLinks.googleScholar}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGoogleScholar
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>

                    <a
                      href={heroData.socialLinks.academic}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <HiAcademicCap
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>
                  </div>

                  {/* Button */}
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-5 bg-secondary cursor-pointer text-white rounded-md hover:bg-primary transition ease-in-out duration-300 flex items-center justify-center gap-2">
                      <span>Let's Talk</span>
                      <GoArrowUpRight />
                    </button>
                  </a>

                  {/* Mobile Nav */}
                  <ul className="flex md:hidden flex-col gap-4 mt-10 text-lg font-medium">
                    {navItems.map((item) => {
                      const isActive = location.pathname === item.path;

                      return (
                        <li key={item.path} className="relative group py-2">
                          <a
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 transition-colors duration-300 ${
                              isActive
                                ? "text-secondary"
                                : "text-primary hover:text-secondary"
                            }`}
                          >
                            {item.name}

                            {/* Left Bar */}
                            <span
                              className={`absolute left-0 top-0 h-full w-0.75 rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-secondary"
                                  : "bg-transparent group-hover:bg-secondary"
                              }`}
                            ></span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
