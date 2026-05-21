import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Heading } from "../components/OtherCommon";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";

import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const contactData = {
  name: "Dr. Qurat ul Ain",

  emails: ["aineenwz@gmail.com", "dr.ain.psychresearch@proton.me"],

  phone: "+1 (505) 398-5375",

  address: "2312 Bay Laurel Lane, Forney, TX 75126",

  social: {
    linkedIn: "https://www.linkedin.com/in/dr-qurat-ul-ain-4aa8a2165/",

    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=2T7GuFUAAAAJ",

    orcid: "https://orcid.org/0009-0003-2060-7678",

    youtube: "https://www.youtube.com/@DrQurat_research",

    twitter: "https://x.com/DrQuratulain01",

    facebook: "https://www.facebook.com/profile.php?id=61589971090780",
  },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Admin Email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // Auto Reply Email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-white text-primary sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
      id="contact"
    >
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center sm:mb-16 mb-5">
          <h4 className="text-secondary uppercase tracking-[4px] text-sm font-medium">
            Get In Touch
          </h4>

          <Heading name="Contact" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div className="bg-black/5 border border-black/10 sm:p-8 p-4 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {success ? (
              <div className="h-105 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-6 border border-green-400/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h2 className="text-3xl font-bold text-primary mb-3">
                    Message Sent Successfully!
                  </h2>

                  <p className="text-primary/70 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Dr. Qurat ul Ain. Your message
                    has been delivered successfully and a confirmation email has
                    been sent to your inbox.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 text-primary"
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    className="w-full p-4 rounded bg-white border border-black/10 outline-none focus:border-secondary"
                  />

                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full p-4 rounded bg-white border border-black/10 outline-none focus:border-secondary"
                  />

                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full p-4 rounded bg-white border border-black/10 outline-none focus:border-secondary"
                  ></textarea>

                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl bg-secondary hover:bg-primary hover:text-white text-white font-semibold transition disabled:opacity-50 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="sm:space-y-6 space-y-4">
            <div>
              <p className="text-primary leading-relaxed text-[15px]">
                If you are interested in collaboration, mentorship, or attending
                future seminars, I would be delighted to connect with you.
              </p>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-secondary text-2xl" />
                <h3 className="text-lg font-semibold">Address</h3>
              </div>

              <p className="text-primary sm:mt-3">{contactData.address}</p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-secondary text-2xl" />
                <h3 className="text-lg font-semibold">Email</h3>
              </div>

              <p className="text-primary sm:mt-3">{contactData.email}</p>
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-secondary text-2xl" />
                <h3 className="text-lg font-semibold">Phone</h3>
              </div>

              <p className="text-primary sm:mt-3">{contactData.phone}</p>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">
              <a
                href={contactData.social.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="p-3 cursor-pointer rounded-full bg-black/10 hover:bg-secondary hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={contactData.social.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="p-3 cursor-pointer rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
              >
                <FaGoogleScholar />
              </a>

              <a
                href={contactData.social.orcid}
                target="_blank"
                rel="noreferrer"
                className="p-3 cursor-pointer rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
              >
                <HiAcademicCap />
              </a>
              <a
                href={contactData.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-3 cursor-pointer rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
              >
                <FaYoutube />
              </a>
              <a
                href={contactData.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-3 cursor-pointer rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
              >
                <FaXTwitter />
              </a>
              <a
                href={contactData.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-3 cursor-pointer rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
