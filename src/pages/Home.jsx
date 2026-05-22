import { useEffect, useRef, useState } from "react";
import ProfilePic from "../assets/profile-pic.jpg";
// import HeroBg from "../assets/hero-bg.jpg";
import { ButtonA, ButtonLink } from "../components/Button";
import { Heading } from "../components/OtherCommon";
import ExpertiesImg from "../assets/experties-img.jpg";
// import HomeBanner from "../assets/home-banner.png";
import HomeBanner from "../assets/home-banner-1.png";
import Resume from "../assets/Resume.pdf";
import Contact from "./Contact";
import CoursesSlider from "../components/CoursesSlider";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { Mail } from "lucide-react";

const Home = () => {
  const education = [
    {
      title:
        "PHD, Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi, Pakistan Research Collaboration with National Taiwan Normal University",
    },

    {
      title:
        "MPHIL, Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi, Pakistan",
    },

    {
      title:
        "Master of Arts (M.A.) in Education University of the Punjab, Lahore, Pakistan",
    },

    {
      title:
        "Master of Science (M.Sc.) in Economics, Allama Iqbal Open University, Islamabad, Pakistan",
    },

    {
      title: "Bachelor of Arts, University of Punjab, Pakistan",
    },

    {
      title: "FSC-HSSC Federal Board of Intermediate & Secondary Education",
    },

    {
      title:
        "Matriculation, Federal board of Intermediate &Secondary Education Islamabad, Pakistan",
    },

    {
      title:
        "Graduate Coursework in Guidance & Counseling (Clinical Mental Health), Department of Counseling, New Mexico Highlands University, Las Vegas, NM, USA",
    },

    {
      title:
        "Diploma in Education, Federal board of Intermediate &Secondary Education Islamabad, Pakistan",
      duration: "Duration 2004 – 2006 (12+1.1/2 Year)",
    },

    {
      title:
        "Diploma in Information Technology Ministry of Education, Islamabad, Pakistan",
    },
  ];

  //   Skill Related Code
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    const current = sectionRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);
  const skills = [
    { name: "Teamwork", value: 100 },
    { name: "Microsoft Excel", value: 100 },
    { name: "Leadership Skills", value: 80 },
    { name: "Communication Skills", value: 100 },
    { name: "Multitasking", value: 100 },
    { name: "Dedicated Team Player", value: 100 },
    { name: "Behavioral Health Research", value: 100 },
    { name: "Addiction Epidemiology & Public Health", value: 80 },
    { name: "Microsoft Office & LMS", value: 80 },
    { name: "Public Speaking", value: 100 },
  ];

  //   Awards and Recognitions
  const awards = [
    {
      title:
        "Young Scientist Travel Award – CPDD 81st Annual Scientific Meeting",
      organization:
        "National Institute on Drug Abuse (NIDA) International Forum",
      location: "San Antonio, Texas, USA",
      year: "June 2019",
      description:
        '"The Hidden Harm: Child Academic Performance Negatively Impacted by Heroin Use" — Recognized for academic merit and research contribution in behavioral and public health.',
    },

    {
      title:
        "National Award for Excellence in Research Supporting Children and Families Affected by Substance Use",
      organization: "Anti-Narcotic Force (ANF)",
      description:
        "Recognized for strengthening preventive and rehabilitative strategies, supporting vulnerable populations, and advancing institutional and national frameworks aligned with the ANF mission.",
    },

    {
      title: "Best Teacher of the Year Award",
      organization: "Pakistan Askari School & College",
    },

    {
      title: "Best Speaker of the Year Award",
      organization: "Iqra University, Islamabad, Pakistan",
    },
  ];

  //   Expertises
  const expertise = [
    "Intergenerational impact of substance use disorders on academic achievement",
    "Addiction-informed school counseling frameworks",
    "Methadone treatment adherence research",
    "Bullying, depression, and educational performance outcomes",
    "Behavioral health integration in academic institutions",
    "Quantitative research design & statistical analysis",
  ];
  const social = {
    linkedin: "https://www.linkedin.com/in/drqurat-ul-ain-4aa8a2165/",
    academic: "https://www.iare.com.au/team-3/",
    googleScholar:
      "https://scholar.google.com/citations?user=2T7GuFUAAAAJ&hl=en",
  };

  return (
    <>
      <section className="border-b border-black/20">
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
              href={social.linkedin}
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
              href={social.academic}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-secondary hover:text-white transition"
            >
              <HiAcademicCap />
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-black">Stay Updated</h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              Subscribe to receive updates on free seminars, downloadable
              resources, scholarships, and research opportunities.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-sm p-6 sm:p-8">
            <form className="flex flex-col sm:flex-row items-center gap-4">
              {/* Input */}
              <div className="flex items-center w-full border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-black transition-all">
                <Mail className="text-gray-500 mr-2" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-black/20">
        <CoursesSlider />
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Heading name="Education" />

          <div className="relative border-l-2 border-black/40 pl-8 md:space-y-10 space-y-4 my-10 cursor-default">
            {education.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <span className="absolute -left-10.25 top-0 w-4 h-4 bg-white rounded-full inset-ring-2 inset-ring-white group-hover:bg-secondary transition ease-in-out duration-300 border-2 border-primary"></span>

                {/* Content */}
                <div className="-translate-y-1 group-hover:-translate-y-2 transition ease-in-out duration-300 border-b border-black/20">
                  <h3 className="md:text-xl text-sm font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={sectionRef} className="bg-primary text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Heading name="Skills" darkColor="#325254" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 sm:py-10">
            {skills.map((skill, index) => (
              <div key={index}>
                {/* Label */}
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm">{skill.value}%</span>
                </div>

                {/* Bar */}
                <div className="w-full bg-gray-200 rounded-full sm:h-3 h-2 overflow-hidden">
                  <div
                    className="sm:h-3 h-2 bg-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${skill.value}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white text-primary sm:py-16 py-10 lg:px-20 sm:px-10 px-5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="sm:mb-16 mb-5">
            <h4 className="text-secondary text-center uppercase tracking-[4px] text-sm font-medium">
              Recognition & Excellence
            </h4>

            <Heading name="Awards & Achievements" />
          </div>

          {/* Awards Grid */}
          <div className="grid lg:grid-cols-2 sm:gap-8 gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative border border-black/10 rounded-xl sm:p-8 p-4 bg-black/5 hover:bg-black/10 transition duration-500 overflow-hidden"
              >
                {/* Number */}
                <div className="absolute -top-8 -right-4 text-[120px] font-bold text-black/5 select-none">
                  {String(index + 1).padStart(1, "0")}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-2xl font-semibold leading-snug transition duration-300">
                  {award.title}
                </h3>

                <div className="sm:mt-5 mt-2 space-y-2">
                  <p className="text-black/80 sm:text-lg text-sm">
                    {award.organization}
                  </p>

                  {award.location && (
                    <p className="text-black/60 sm:text-lg text-sm">
                      {award.location}
                    </p>
                  )}

                  {award.year && (
                    <p className="inline-flex px-4 py-1 rounded-full border border-secondary text-secondary text-sm sm:mt-3 mt-1">
                      {award.year}
                    </p>
                  )}
                </div>

                {award.description && (
                  <p className="text-black/70 sm:text-[16px] text-sm leading-relaxed sm:mt-8 mt-4">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary text-white sm:py-16 py-10 lg:px-20 sm:px-10 px-5 border-b border-white/20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="sm:mb-14 mb-8 text-center">
            <h4 className="text-secondary text-center uppercase tracking-[4px] text-sm font-medium">
              Core Strengths
            </h4>

            <Heading name="Areas of Expertise" darkColor="#325254" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-4">
                  <div className="min-w-11.25 h-11.25 rounded-full border border-white text-white flex items-center justify-center font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Text */}
                  <p className="text-white leading-relaxed group-hover:text-primary transition duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <img
                src={ExpertiesImg}
                alt="Experties"
                className="w-full h-fit rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
