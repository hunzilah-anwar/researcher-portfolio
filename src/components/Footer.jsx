import { Link } from "react-router-dom";

import {
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import { FaGoogleScholar } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About Me",
      path: "/about",
    },

    {
      name: "Research",
      path: "/research",
    },

    {
      name: "Publications",
      path: "/publications",
    },

    {
      name: "Selected Work",
      path: "/selectedWork",
    },

    {
      name: "Resources",
      path: "/resources",
    },
  ];

  const moreLinks = [
    {
      name: "Free Seminars",
      path: "/seminars",
    },

    {
      name: "Collaboration",
      path: "/collaboration",
    },

    {
      name: "Mentorship",
      path: "/mentorship",
    },

    {
      name: "Academic Consulting",
      path: "/academic-consulting",
    },

    {
      name: "Research Insights",
      path: "/research-insights",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = {
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=2T7GuFUAAAAJ",

    orcid: "https://orcid.org/0009-0003-2060-7678",

    linkedIn: "https://www.linkedin.com/in/dr-qurat-ul-ain-4aa8a2165/",

    youtube: "https://www.youtube.com/@DrQurat_research",

    twitter: "https://x.com/DrQuratulain01",

    facebook: "https://www.facebook.com/profile.php?id=61589971090780",
  };

  return (
    <footer className="bg-primary text-white lg:px-20 sm:px-10 px-5 pt-20 pb-8 overflow-hidden">
      <div className="max-w-375 mx-auto">
        {/* Top */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 border-b border-white/10 pb-16">
          {/* About */}
          <div className="lg:col-span-2">
            <Link to={"/"} className="md:text-4xl text-3xl font-bold leading-tight">Dr. Qurat-ul-Ain</Link>

            <div className="w-24 h-1 bg-secondary rounded-full mt-2"></div>

            <p className="text-white/70 leading-8 mt-4 max-w-2xl">
              Interdisciplinary researcher specializing in education, behavioral
              health, addiction science, and public health. Dedicated to
              advancing evidence-based research, mentorship, academic
              collaboration, and student development across international
              academic communities.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-5">
              {/* LinkedIn */}
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedin size={18} />
              </a>

              {/* Google Scholar */}
              <a
                href={socialLinks.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 flex items-center justify-center"
              >
                <FaGoogleScholar size={18} />
              </a>

              {/* ORCID */}
              <a
                href={socialLinks.orcid}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 flex items-center justify-center"
              >
                <HiAcademicCap size={20} />
              </a>

              {/* YouTube */}
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 flex items-center justify-center"
              >
                <FaYoutube size={18} />
              </a>

              {/* Twitter */}
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 flex items-center justify-center"
              >
                <FaXTwitter size={18} />
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-2xl font-bold">Quick Links</h1>

            <div className="w-16 h-1 bg-secondary rounded-full mt-2 mb-8"></div>

            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-secondary transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Pages */}
          <div>
            <h1 className="text-2xl font-bold">More Pages</h1>

            <div className="w-16 h-1 bg-secondary rounded-full mt-2 mb-8"></div>

            <ul className="space-y-4">
              {moreLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-secondary transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-center items-center pt-8">
          <p className="text-white/60 text-center md:text-left leading-7">
            © {new Date().getFullYear()} Dr. Qurat ul Ain. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
