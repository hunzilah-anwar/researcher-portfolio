import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Heading } from "./OtherCommon";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";

const contactData = {
  name: "Dr. Quratulain",
  email: "aineenwz@gmail.com",
  phone: "+1 (505) 3985375",
  address: "1700 S Parkway, College Station 77840, USA",
  social: {
    linkedin: "https://www.linkedin.com/in/drqurat-ul-ain-4aa8a2165/",
    academic: "https://www.iare.com.au/team-3/",
    googleScholar:
      "https://scholar.google.com/citations?user=2T7GuFUAAAAJ&hl=en",
  },
};

const Contact = () => {
  return (
    <section
      className="bg-primary text-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center sm:mb-16 mb-5">
          <h4 className="text-secondary uppercase tracking-[4px] text-sm font-medium">
            Get In Touch
          </h4>

          <Heading name="Contact" darkColor="#325254" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div className="bg-white/5 border border-white/10 sm:p-8 p-4 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-secondary"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-secondary"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-secondary"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-secondary hover:bg-white hover:text-primary text-white font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="sm:space-y-6 space-y-4">
            {/* Intro Paragraph (NEW) */}
            <div>
              <p className="text-white/70 leading-relaxed text-[15px]">
                I am always open to meaningful academic collaborations, research
                opportunities, and professional consultations in the field of
                education, behavioral health, and interdisciplinary research.
                Feel free to connect for projects, research discussions, or
                professional inquiries.
              </p>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-secondary text-2xl" />
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <p className="text-white/70 sm:mt-3">{contactData.address}</p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-secondary text-2xl" />
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <p className="text-white/70 sm:mt-3">{contactData.email}</p>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-secondary text-2xl" />
                <h3 className="text-lg font-semibold">Phone</h3>
              </div>
              <p className="text-white/70 sm:mt-3">{contactData.phone}</p>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">
              <a
                href={contactData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-secondary transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={contactData.social.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-secondary transition"
              >
                <FaGoogleScholar />
              </a>

              <a
                href={contactData.social.academic}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-secondary transition"
              >
                <HiAcademicCap />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
