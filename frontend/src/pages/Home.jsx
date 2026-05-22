import { useState } from "react";
import toast from "react-hot-toast";
import ProfilePic from "../assets/profile-pic.jpg";
// import HeroBg from "../assets/hero-bg.jpg";
import { ButtonA, ButtonLink } from "../components/Button";
// import HomeBanner from "../assets/home-banner.png";
import HomeBanner from "../assets/home-banner-1.png";
import Resume from "../assets/Resume.pdf";
import Contact from "./Contact";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import StatsBar from "../components/StatsBar";
import { GoArrowUpRight } from "react-icons/go";
import { FaBrain, FaGlobeAsia, FaChartLine } from "react-icons/fa";
import {
  FaGlobe,
  FaHeartbeat,
  FaUsers,
  FaBookMedical,
  FaUserGraduate,
} from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineScience } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaBookOpen, FaBriefcase } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

const Home = () => {
  const researchCards = [
    {
      icon: <FaBrain />,
      title: "Core Focus",
      description:
        "Intergenerational impact of parental substance use disorders on children's academic performance, behavioral outcomes, and mental health at school level.",
    },

    {
      icon: <FaGlobeAsia />,
      title: "Cross-Cultural Reach",
      description:
        "Research conducted across Pakistan, Taiwan, and the USA — including collaborative work at National Taiwan Normal University and Academia Sinica, Taipei.",
    },

    {
      icon: <FaChartLine />,
      title: "Applied Impact",
      description:
        "From NIDA-presented findings to peer-reviewed publications in BMC Psychiatry — research designed to inform counselors, schools, and policymakers.",
    },
  ];

  const organizations = [
    {
      name: "NIH – National Institutes of Health",
      icon: <FaHeartbeat />,
      link: "https://www.nih.gov/events",
    },

    {
      name: "CDC – Centers for Disease Control",
      icon: <FaBookMedical />,
      link: "https://www.cdc.gov/training",
    },

    {
      name: "SAMHSA",
      icon: <FaBrain />,
      link: "https://www.samhsa.gov",
    },

    {
      name: "WHO – World Health Organization",
      icon: <FaGlobe />,
      link: "https://www.who.int/news-room/events",
    },

    {
      name: "APA – American Psychological Association",
      icon: <FaUserGraduate />,
      link: "https://www.apa.org/convention",
    },

    {
      name: "UNICEF",
      icon: <FaUsers />,
      link: "https://www.unicef.org",
    },
  ];

  const courses = [
    {
      name: "Harvard Online",
      link: "https://pll.harvard.edu",
    },

    {
      name: "MIT OpenCourseWare",
      link: "https://ocw.mit.edu",
    },

    {
      name: "Stanford Online",
      link: "https://online.stanford.edu",
    },

    {
      name: "Yale Open Courses",
      link: "https://oyc.yale.edu",
    },

    {
      name: "edX",
      link: "https://www.edx.org",
    },

    {
      name: "Coursera",
      link: "https://www.coursera.org",
    },

    {
      name: "FutureLearn",
      link: "https://www.futurelearn.com",
    },
  ];

  const collaborationAreas = [
    {
      title: "Intergenerational Impact of Substance Use on Children",

      icon: FaUsers,

      description:
        "Research examining how parental substance use disorders affect children's academic, emotional, and behavioral development.",
    },

    {
      title: "Addiction-Informed Educational Intervention Design",

      icon: GiTeacher,

      description:
        "Designing evidence-based school interventions and counseling frameworks for drug-affected family environments.",
    },

    {
      title: "School Mental Health & Counseling Evaluation",

      icon: FaSchool,

      description:
        "Evaluating school-based counseling systems, mental health programs, and psychosocial support strategies.",
    },

    {
      title: "Cross-Cultural Behavioral Health Research",

      icon: FaGlobeAsia,

      description:
        "International collaborative research across Pakistan, Taiwan, the USA, and broader Asian contexts.",
    },

    {
      title: "Public Health & Epidemiology in Low-Resource Settings",

      icon: MdHealthAndSafety,

      description:
        "Behavioral health and epidemiological research focused on underserved and vulnerable populations.",
    },

    {
      title: "Systematic Reviews in Behavioral & Educational Sciences",

      icon: MdOutlineScience,

      description:
        "Collaborative evidence synthesis projects including systematic reviews and meta-analytic research.",
    },
  ];

  const expertiseTags = [
    "Addiction & Education",
    "Intergenerational Harm",
    "School Counseling",
    "Methadone Adherence",
    "Bullying & Depression",
    "Quantitative Methods",
    "Behavioral Health",
    "Public Health",
  ];

  const mentorshipCards = [
    {
      title: "Graduate Students (M.Phil., M.Sc., Ph.D.)",

      icon: FaUserGraduate,

      description:
        "Research guidance for students needing support with proposal development, methodology, thesis writing, and academic direction.",
    },

    {
      title: "Early-Career Researchers",

      icon: FaBookOpen,

      description:
        "Mentorship for researchers preparing their first journal publications, conference papers, and research manuscripts.",
    },

    {
      title: "International Scholars",

      icon: FaGlobeAsia,

      description:
        "Support for scholars developing cross-cultural and international behavioral health or educational research designs.",
    },

    {
      title: "Professionals Transitioning into Research",

      icon: FaBriefcase,

      description:
        "Guidance for professionals moving toward academic careers, research-based roles, and graduate-level scholarship.",
    },
  ];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Subscription failed.");
      }

      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const social = {
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=2T7GuFUAAAAJ",

    orcid: "https://orcid.org/0009-0003-2060-7678",

    linkedIn: "https://www.linkedin.com/in/dr-qurat-ul-ain-4aa8a2165/",

    youtube: "https://www.youtube.com/@DrQurat_research",

    twitter: "https://x.com/DrQuratulain01",

    facebook: "https://www.facebook.com/profile.php?id=61589971090780",
  };

  return (
    <>
      <section className="bg-white">
        <div className="relative flex items-center justify-center flex-col lg:mt-5">
          <img
            src={HomeBanner}
            alt="Profile Banner"
            className="w-full h-40 object-cover object-top"
          />
          <img
            src={ProfilePic}
            alt="Profile"
            className="absolute bottom-0 object-cover object-top left-[50%] translate-x-[-50%] translate-y-20 w-40 h-40 border-4 border-white"
          />
        </div>
        <div className="lg:px-20 sm:px-10 px-5 pt-25 pb-12">
          <h4 className="text-xl font-bold">Hey There!</h4>
          <h4 className="text-xl font-bold">I'am Dr. Qurat-Ul-Ain</h4>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary">
            Researcher | Educator | Mentor
          </h1>
          <p className="text-md text-primary">
            Advancing research and evidence-based solutions in behavioral
            health, education, and child mental health.
          </p>
          <p className="text-sm text-gray-600 mt-4">
            I am an interdisciplinary researcher specializing in education,
            behavioral health, and public health. My work focuses on developing
            evidence-based strategies to improve educational and mental health
            outcomes for children and families affected by substance use
            disorders. Through this platform, I share my research, offer free
            seminars, provide mentorship, and collaborate with students,
            researchers, and professionals committed to creating meaningful
            social impact.
          </p>
          {/* Social */}
          <div className="flex gap-4 pt-4">
            <a
              href={social.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-black/10 hover:bg-secondary hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={social.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
            >
              <FaGoogleScholar />
            </a>

            <a
              href={social.orcid}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
            >
              <HiAcademicCap />
            </a>

            <a
              href={social.youtube}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
            >
              <FaYoutube />
            </a>

            <a
              href={social.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <ButtonLink
              to="/contact"
              name="Contact Me"
              bgColor={"bg-transparent"}
              textColor={"text-primary"}
              HoverClasses={"hover:text-white"}
              HoverClasses={"hover:text-white"}
              effectColor={"#000000"}
            />
            <ButtonA
              name="Download CV"
              href={Resume}
              bgColor={"bg-primary"}
              textColor={"text-white"}
              HoverClasses={"hover:text-primary"}
              effectColor={"#ffffff"}
              download
            />
          </div>
        </div>
      </section>
      <StatsBar />
      <section className="bg-white py-16 lg:px-20 sm:px-10 px-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <p className="uppercase tracking-[4px] text-secondary font-semibold text-sm">
                My Research
              </p>

              <h1 className="md:text-4xl text-3xl font-bold text-primary leading-tight mt-5">
                Understanding the Hidden Harm —
                <span className="text-secondary">
                  {" "}
                  Where Education Meets Addiction Science
                </span>
              </h1>
              <p className="text-gray-600 leading-8 text-[15px]">
                My research explores how parental substance use disorders affect
                children’s emotional wellbeing, educational development, and
                behavioral health outcomes — while designing evidence-based
                intervention frameworks for schools, counselors, and
                policymakers.
              </p>
            </div>

            {/* Right */}
            <div className="">
              <div className="max-w-3xl">
                <h1 className="text-xl font-bold text-primary">
                  Research Domains &
                  <span className="text-secondary"> Specializations</span>
                </h1>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-start gap-4 mt-4">
                {expertiseTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 rounded-full border border-primary/10 bg-primary/5 hover:bg-secondary hover:text-white hover:border-secondary text-primary font-medium transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {researchCards.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#FAFAFA] border border-black/10 rounded-xl p-6"
              >
                {/* Hover BG */}
                <div className="absolute inset-0 bg-linear-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 sm:w-18 w-16 sm:h-18 h-16 rounded-2xl bg-primary text-white flex items-center justify-center sm:text-3xl text-2xl group-hover:bg-secondary transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h1 className="relative z-10 text-xl font-bold text-primary mt-4">
                  {item.title}
                </h1>

                {/* Desc */}
                <p className="relative z-10 text-gray-600 leading-8 mt-2 text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <ButtonLink
              to={"/research"}
              name={"Explore My Research"}
              bgColor="bg-primary"
              textColor="text-white"
              HoverClasses="hover:bg-transparent hover:text-primary"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 lg:px-20 sm:px-10 px-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top */}
          <div className="max-w-4xl">
            <p className="uppercase tracking-[4px] text-secondary font-semibold text-sm">
              Free Seminars & Webinars
            </p>

            <h1 className="md:text-4xl text-3xl font-bold text-primary leading-tight mt-1">
              Stay Connected with
              <span className="text-secondary">
                {" "}
                Global Research & Professional Development
              </span>
            </h1>

            <p className="text-gray-600 leading-8 mt-4 text-[15px]">
              Access free upcoming seminars, webinars, and conferences from the
              world's leading health and research organizations — curated and
              updated regularly.
            </p>
          </div>

          {/* Organization Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
            {organizations.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-xl border border-black/10 p-4"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl group-hover:bg-secondary transition-all duration-300">
                  {item.icon}
                </div>

                {/* Name */}
                <h1 className="text-xl font-bold text-primary mt-2 leading-snug">
                  {item.name}
                </h1>

                {/* Link */}
                <div className="inline-flex items-center gap-2 mt-4 text-secondary font-medium">
                  Visit Website
                  <GoArrowUpRight />
                </div>
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center">
            <ButtonLink
              to={"/seminars"}
              name={"View More Seminars"}
              bgColor="bg-primary"
              textColor="text-white"
              HoverClasses="hover:bg-transparent hover:text-primary"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 lg:px-20 sm:px-10 px-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="max-w-4xl">
            <p className="uppercase tracking-[5px] text-secondary font-semibold text-sm">
              Download Free Resources
            </p>

            <h1 className="md:text-4xl text-3xl font-bold text-primary mt-1 leading-tight">
              Free Resources for
              <span className="text-secondary"> Researchers & Students</span>
            </h1>

            <p className="text-gray-600 leading-8 mt-2">
              Practical, ready-to-use academic resources designed to help
              students, early-career researchers, and graduate scholars
              strengthen their research and writing skills.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">
            {courses.map((course, index) => (
              <a
                key={index}
                href={course.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-100 px-5 py-4 hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <span className="font-medium">{course.name}</span>

                <span className="group-hover:translate-x-1 transition-all duration-300">
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center">
            <ButtonLink
              to={"/resources"}
              name={"Explore Resources"}
              bgColor="bg-primary"
              textColor="text-white"
              HoverClasses="hover:bg-transparent hover:text-primary"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F8F9FB] py-16 lg:px-20 sm:px-10 px-5 overflow-hidden">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="uppercase tracking-[5px] text-secondary font-semibold text-sm">
            Collaborate With Me
          </p>

          <h1 className="md:text-4xl text-3xl font-bold text-primary mt-1 leading-tight">
            Research
            <span className="text-secondary"> Collaboration</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-primary/80 mt-2">
            Open to International Research Partnerships
          </h2>

          <p className="text-gray-600 leading-8 mt-2">
            Dr. Quratulain welcomes collaborations with scholars, universities,
            NGOs, and health organizations working in aligned research areas. If
            your work touches on any of the areas below, let&apos;s connect.
          </p>
        </div>

        {/* Collaboration Cards */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-8">
          {collaborationAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-300 p-4 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Icon />
                </div>

                <h1 className="text-xl font-bold text-primary mt-2 leading-snug">
                  {item.title}
                </h1>

                <p className="text-gray-600 leading-8 mt-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center">
          <ButtonLink
            to={"/collaboration"}
            name={"Collaborate With Me"}
            bgColor="bg-primary"
            textColor="text-white"
            HoverClasses="hover:bg-transparent hover:text-primary"
          />
        </div>
      </section>
      <section className="bg-white py-16 lg:px-20 sm:px-10 px-5 overflow-hidden">
        {/* Heading */}
        <div className="max-w-4xl">
          <p className="uppercase tracking-[5px] text-secondary font-semibold text-sm">
            Request Mentorship
          </p>

          <h1 className="md:text-4xl text-3xl font-bold text-primary mt-1 leading-tight">
            Research
            <span className="text-secondary"> Mentorship</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-primary/80 mt-2">
            Guiding Researchers Across India, China, USA & Pakistan
          </h2>

          <p className="text-gray-600 leading-8 mt-2">
            Dr. Quratulain has successfully mentored graduate students and
            early-career researchers across four countries — helping them
            develop strong proposals, publish their work, and grow their
            academic careers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {mentorshipCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-300 p-4 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Icon />
                </div>

                <h1 className="text-2xl font-bold text-primary mt-4 leading-snug">
                  {item.title}
                </h1>

                <p className="text-gray-600 leading-8 mt-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="mt-12 flex justify-center">
          <ButtonLink
            to={"/mentorship"}
            name={"View More Detail"}
            bgColor="bg-primary"
            textColor="text-white"
            HoverClasses="hover:bg-transparent hover:text-primary"
          />
        </div>
      </section>
      <section className="bg-gray-100 py-16 lg:px-20 sm:px-10 px-5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Main Card */}
          <div className="relative rounded-xl overflow-hidden bg-primary text-white">
            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start sm:p-14 p-7">
              {/* Left Content */}
              <div>
                <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center text-4xl shadow-lg">
                  <FaEnvelopeOpenText />
                </div>

                <h2 className="sm:text-4xl text-2xl font-bold leading-tight mt-2">
                  Join Our <span className="text-secondary">Mailing List</span>
                </h2>

                <p className="text-gray-300 leading-8 mt-2 max-w-xl">
                  Stay updated with the latest seminars, scholarships, research
                  opportunities, publications, and free academic resources
                  directly in your inbox.
                </p>
              </div>

              {/* Right Form */}
              <div className="bg-white rounded-xl p-8 sm:p-10 shadow-2xl">
                <h3 className="text-primary text-3xl font-bold">
                  Subscribe Now
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-15 px-6 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-secondary focus:bg-white transition-all duration-300 text-primary"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex sm:flex-row flex-col gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`flex-1 bg-secondary hover:bg-primary text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:scale-[1.02] disabled:opacity-50 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      {loading ? "Subscribing..." : "Subscribe Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
