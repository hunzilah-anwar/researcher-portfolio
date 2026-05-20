import {
  Globe,
  BookOpen,
  FileText,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14">
      <div className="container mx-auto px-4">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold">
              Dr. Qurat-Ul-Ain
            </h2>
            <p className="text-gray-400 mt-2">
              Researcher | Educator | Mentor
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              {[
                "Home",
                "About",
                "Research",
                "Free Seminars",
                "Resources",
                "Contact",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white cursor-pointer transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Professional Links
            </h3>

            <div className="space-y-3 text-gray-300">

              <a
                href="https://scholar.google.com/citations?hl=en&user=2T7GuFUAAAAJ"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-all"
              >
                <BookOpen size={18} />
                Google Scholar
              </a>

              <a
                href="https://orcid.org/0009-0003-2060-7678"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-all"
              >
                <Globe size={18} />
                ORCID
              </a>

              <a
                href="https://linkedin.com/in/dr-qurat-ul-ain-4aa8a2165"
                target="_blank"
                className="flex items-center gap-2 hover:text-white transition-all"
              >
                <LiaLinkedin size={18} />
                LinkedIn
              </a>

              <div className="flex items-center gap-2 text-gray-400">
                <FaYoutube size={18} />
                YouTube — Coming Soon
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <FileText size={18} />
                ResearchGate — Add Profile URL
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-5 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">

          <p>
            © 2026 Dr. Qurat-Ul-Ain. All Rights Reserved.
          </p>

          <button className="mt-3 md:mt-0 hover:text-white transition-all">
            Download CV
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;