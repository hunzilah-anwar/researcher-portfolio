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
      <section>
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
          <div>
            <h4 className="text-xl font-bold">Hey There!</h4>
            <h4 className="text-xl font-bold">I'am Dr. Qurat ul Ain</h4>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary">
              International Researcher | Behavioral Health Specialist |
              Education Expert
            </h1>
            <p className="text-sm text-gray-600 mt-4">
              Ph.D. scholar with 9+ years of international experience in
              education, addiction science, behavioral health, and
              interdisciplinary research.
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
              <ButtonA
                name="Download CV"
                href={Resume}
                bgColor={"bg-primary"}
                textColor={"text-white"}
                HoverClasses={"hover:bg-white hover:text-primary"}
              />
              <ButtonLink
                to="/contact"
                name="Contact Me"
                bgColor={"bg-transparent"}
                textColor={"text-primary"}
                HoverClasses={"hover:bg-primary hover:text-white"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-20 sm:px-10 px-5 pt-12 pb-16 bg-primary text-white">
        <Heading name="About Me" darkColor="#325254" />

        <div className="mt-8">
          <div className="md:mt-0 mt-5">
            <h1 className="md:text-2xl text-xl font-bold text-secondary">
              Internationally Recognized Researcher
            </h1>

            <p className="text-sm md:text-[16px] text-justify">
              I am an interdisciplinary researcher, educator, and behavioral
              health professional with more than nine years of experience
              working in education, mental health, school counseling, and
              addiction research. My work focuses on understanding how parental
              substance use disorders affect children’s academic performance,
              emotional wellbeing, and long-term development.
              <br />
              <br />
              My research journey began during my years as a School Counselor at
              Askari School & College and a Behavior Management Counselor at
              AASRA Drug Addiction & Rehabilitation Center in Islamabad,
              Pakistan. Working closely with students and families affected by
              addiction helped shape my long-term research interest in
              intergenerational behavioral health and addiction-informed
              educational support systems.
              <br />
              <br />
              I completed my Ph.D. in Education at Pir Mehr Ali Shah Arid
              Agriculture University in collaboration with National Taiwan
              Normal University, where my doctoral research explored the needs
              of children of drug-addicted parents and the role of school
              counseling services in supporting vulnerable students. I also hold
              an M.Phil. in Education, an M.A. in Education, and an M.Sc. in
              Economics, giving me a multidisciplinary academic background in
              education, behavioral sciences, and social research.
              <br />
              <br />
              During my doctoral studies, I contributed to cross-cultural
              research projects at Academia Sinica and worked as a Research
              Engineer at National Taiwan Normal University, supporting
              large-scale studies in education and behavioral sciences. These
              experiences strengthened my expertise in quantitative research,
              statistical analysis, and international academic collaboration.
              <br />
              <br />
              In 2019, I presented my research at the NIDA International Forum
              in Texas and received the CPDD Young Scientist International
              Travel Award for my research on how heroin-using parents
              negatively impact children’s academic achievement. My research has
              since been published in peer-reviewed international journals,
              including BMC Psychiatry.
              <br />
              <br />
              My professional experience also includes working as a Psychiatric
              Technician at the New Mexico Behavioral Health Institution in the
              United States, where I provided clinical support to individuals
              with acute and chronic psychiatric conditions. Alongside research
              and clinical practice, I also serve as a Peer Reviewer for PLOS
              ONE, reviewing international research in behavioral science,
              education, and public health.
              <br />
              <br />
              My current interests include addiction-informed school counseling,
              child and adolescent mental health, bullying and depression in
              educational settings, methadone treatment adherence research, and
              behavioral health integration within academic institutions. Beyond
              research, I actively organize seminars and workshops focused on
              child wellbeing, resilience-building, and substance use prevention
              with the goal of creating meaningful impact for vulnerable
              communities.
            </p>

            <ul className="md:text-[18px] text-sm mt-8 space-y-2">
              <li className="flex flex-wrap items-center justify-start gap-2">
                <span className="text-secondary font-bold text-sm md:text-xl">
                  experience:
                </span>
                <p>9+ Years</p>
              </li>

              <li className="flex flex-wrap items-center justify-start gap-2">
                <span className="text-secondary font-bold text-sm md:text-xl">
                  research projects:
                </span>
                <p>20+ International & National Projects</p>
              </li>

              <li className="flex flex-wrap items-center justify-start gap-2">
                <span className="text-secondary font-bold text-sm md:text-xl">
                  publications:
                </span>
                <p>15+ Research Publications</p>
              </li>

              <li className="flex flex-wrap items-center justify-start gap-2">
                <span className="text-secondary font-bold text-sm md:text-xl">
                  expertise:
                </span>
                <p>Education, Mental Health & Addiction Research</p>
              </li>
            </ul>
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
