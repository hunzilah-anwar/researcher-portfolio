import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListMinus } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItemsFirst = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
  ];

  const navItemsSec = [
    { name: "Selected Work", path: "/selectedWork" },
    { name: "Free Seminars", path: "/seminars" },
    { name: "Resources", path: "/resources" },
    { name: "Collaboration", path: "/collaboration" },
    { name: "Opportunities", path: "/opportunities" },
    { name: "Academic", path: "/academic-consulting" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Trainings", path: "/training" },
    { name: "Peer Reviewer", path: "/reviewer" },
    { name: "Insights (Blogs)", path: "/research-insights" },
  ];

  const heroData = {
    name: "Dr. Qurat ul Ain",

    description: `I am an interdisciplinary researcher specializing in education, behavioral health, and public health. My work focuses on developing evidence-based strategies to improve educational and mental health outcomes for children and families affected by substance use disorders. Through this platform, I share my research, offer free seminars, provide mentorship, and collaborate with students, researchers, and professionals committed to creating meaningful social impact.`,

    contactInfo: {
      location: "2312 Bay Laurel Lane, Forney, TX 75126",

      emails: ["aineenwz@gmail.com", "dr.ain.psychresearch@proton.me"],

      phone: "+1 (505) 398-5375",
    },

    socialLinks: {
      googleScholar:
        "https://scholar.google.com/citations?hl=en&user=2T7GuFUAAAAJ",

      orcid: "https://orcid.org/0009-0003-2060-7678",

      linkedIn: "https://www.linkedin.com/in/dr-qurat-ul-ain-4aa8a2165/",

      youtube: "https://www.youtube.com/@DrQurat_research",

      twitter: "https://x.com/DrQuratulain01",

      facebook: "https://www.facebook.com/profile.php?id=61589971090780",
    },
  };

  return (
    <header className="text-primary bg-white/70 backdrop-blur-md shadow-md fixed w-full z-50">
      <nav className="mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-syne sm:text-[32px] text-2xl font-bold">
            <span className="text-secondary">{heroData.name}</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="lg:flex items-center hidden space-x-6 text-lg font-medium">
          {navItemsFirst.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path} className="relative group py-2">
                <Link
                  to={item.path}
                  className={`px-4 py-2 transition-colors duration-300 text-center ${
                    isActive
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -top-6 left-0 w-full h-0.75 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-secondary"
                        : "bg-transparent group-hover:bg-secondary"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}

          {/* More Pages Dropdown */}
          <li className="relative group py-2">
            <button className="px-4 cursor-pointer py-2 text-primary hover:text-secondary transition-colors duration-300">
              More Pages
            </button>

            <div className="absolute left-0 top-full pt-4.5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="w-48 bg-white shadow-lg rounded-md overflow-hidden">
                {navItemsSec.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition ${
                          isActive ? "text-secondary" : "text-primary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>

          {/* Contact */}
          <li className="relative group py-2">
            <Link
              to="/contact"
              className={`px-4 py-2 transition-colors duration-300 ${
                location.pathname === "/contact"
                  ? "text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              Contact
            </Link>

            <span
              className={`absolute -top-4 left-0 w-full h-0.75 rounded-full transition-all duration-300 ${
                location.pathname === "/contact"
                  ? "bg-secondary"
                  : "bg-transparent group-hover:bg-secondary"
              }`}
            ></span>
          </li>
        </ul>

        {/* Menu Button */}
        <div>
          <ListMinus
            size={26}
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
            <div
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 md:-right-2 w-full sm:w-96 flex justify-end bg-black/40"
            >
              <div className="bg-[#F3F3F3] w-full sm:w-96 h-screen px-6 py-4 relative shadow-lg overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-7 right-4 text-primary cursor-pointer hover:text-secondary transition ease-in-out duration-200"
                >
                  <ListMinus size={24} />
                </button>

                <div className="hidden lg:block">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="inline-block"
                  >
                    <h1 className="font-syne text-secondary text-[32px] font-bold mb-2">
                      {heroData.name}
                    </h1>
                  </Link>

                  <p className="text-primary text-[13px] mb-4">
                    {heroData.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 text-gray-600 mb-4">
                    <p className="text-[16px] text-primary font-medium">
                      <strong className="text-[14px] text-secondary font-bold">
                        Address
                      </strong>
                      <br />
                      {heroData.contactInfo.location}
                    </p>

                    <p className="text-[16px] text-primary font-medium">
                      <strong className="text-[14px] text-secondary font-bold">
                        Emails
                      </strong>
                      <br />

                      {heroData.contactInfo.emails.map((email, index) => (
                        <span key={index} className="block">
                          {email}
                        </span>
                      ))}
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
                  <div className="flex flex-wrap gap-4 mb-10 text-white">
                    {/* LinkedIn */}
                    <a
                      href={heroData.socialLinks.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>

                    {/* Google Scholar */}
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

                    {/* ORCID */}
                    <a
                      href={heroData.socialLinks.orcid}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <HiAcademicCap
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>

                    {/* YouTube */}
                    <a
                      href={heroData.socialLinks.youtube}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaYoutube
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>

                    {/* Twitter / X */}
                    <a
                      href={heroData.socialLinks.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaXTwitter
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>

                    {/* Facebook */}
                    <a
                      href={heroData.socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF
                        size={35}
                        className="p-2 bg-secondary rounded-full hover:bg-primary transition ease-in-out duration-200"
                      />
                    </a>
                  </div>

                  {/* Button */}
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 bg-secondary text-white rounded-md hover:bg-primary transition ease-in-out duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Let's Talk</span>
                    <GoArrowUpRight />
                  </Link>
                </div>

                {/* Mobile Nav */}
                <ul className="flex lg:hidden flex-col gap-4 mt-10 text-lg font-medium">
                  {/* First Menu */}
                  {navItemsFirst.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <li key={item.path} className="relative group py-2">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 transition-colors duration-300 ${
                            isActive
                              ? "text-secondary"
                              : "text-primary hover:text-secondary"
                          }`}
                        >
                          {item.name}

                          <span
                            className={`absolute left-0 top-0 h-full w-0.75 rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-secondary"
                                : "bg-transparent group-hover:bg-secondary"
                            }`}
                          ></span>
                        </Link>
                      </li>
                    );
                  })}

                  {/* Second Menu */}
                  {navItemsSec.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <li key={item.path} className="relative group py-2">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 transition-colors duration-300 ${
                            isActive
                              ? "text-secondary"
                              : "text-primary hover:text-secondary"
                          }`}
                        >
                          {item.name}

                          <span
                            className={`absolute left-0 top-0 h-full w-0.75 rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-secondary"
                                : "bg-transparent group-hover:bg-secondary"
                            }`}
                          ></span>
                        </Link>
                      </li>
                    );
                  })}

                  {/* Contact */}
                  <li className="relative group py-2">
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 transition-colors duration-300 ${
                        location.pathname === "/contact"
                          ? "text-secondary"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      Contact
                      <span
                        className={`absolute left-0 top-0 h-full w-0.75 rounded-full transition-all duration-300 ${
                          location.pathname === "/contact"
                            ? "bg-secondary"
                            : "bg-transparent group-hover:bg-secondary"
                        }`}
                      ></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
