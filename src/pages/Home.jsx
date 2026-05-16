import { useEffect, useRef, useState } from "react";
import ProfilePic from "../assets/profile-pic.webp";
import HeroBg from "../assets/hero-bg.jpg";
import { ButtonA, ButtonLink } from "../components/Button";
import { Heading } from "../components/OtherCommon";

const Home = () => {
  const experience = [
    {
      company:
        "Institute of Academic Research and Excellence (IARE), Australia",
      role: "Director of Research Operations",
      duration: "May 2025 - Present",
      type: "Remote | Part-Time",
      responsibilities: [
        "Leading international multidisciplinary research programs",
        "Delivering research methodology and statistical analysis workshops",
        "Mentoring graduate researchers and scholars",
        "Managing academic publishing and global collaborations",
      ],
    },
    {
      company: "Scoot Education, Houston, Texas",
      role: "Teaching Faculty",
      duration: "May 2024 - March 2025",
      responsibilities: [
        "Delivered education and behavioral health instruction",
        "Implemented student-centered teaching strategies",
        "Mentored students in research literacy and critical thinking",
      ],
    },
    {
      company: "New Mexico Behavioral Health Institution, USA",
      role: "Psychiatric Technician",
      duration: "2019 - 2021",
      responsibilities: [
        "Provided psychiatric and behavioral support",
        "Managed crisis interventions and clinical documentation",
        "Worked with multidisciplinary healthcare teams",
      ],
    },
    {
      company: "National Taiwan Normal University, Taiwan",
      role: "Research Engineer & Collaboration",
      duration: "2018 - 2019",
      responsibilities: [
        "Supported large-scale educational research projects",
        "Conducted statistical analysis and manuscript preparation",
        "Contributed to international research collaborations",
      ],
    },
    {
      company: "Askari School & College, Islamabad",
      role: "School Counselor",
      duration: "2011 - 2017",
      responsibilities: [
        "Provided counseling and behavioral support services",
        "Organized mental health workshops and seminars",
        "Developed intervention strategies for at-risk students",
      ],
    },
  ];

  const education = [
    {
      degree: "Ph.D. in Education",
      institute: "Pir Mehr Ali Shah Arid Agriculture University, Pakistan",
      duration: "2015 - 2023",
      grade: "3.79 / 4.0 GPA",
    },
    {
      degree: "M.Phil. in Education",
      institute: "Pir Mehr Ali Shah Arid Agriculture University, Pakistan",
      duration: "2012 - 2014",
      grade: "3.65 / 4.0 GPA",
    },
    {
      degree: "M.A. in Education",
      institute: "University of Punjab, Pakistan",
      duration: "2007 - 2009",
    },
    {
      degree: "M.Sc. in Economics",
      institute: "Allama Iqbal Open University, Pakistan",
      duration: "2008 - 2010",
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


  
  return (
    <>
      <section
        className="px-20 py-12"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold">Hey There!</h4>
            <h1 className="text-2xl md:text-3xl font-bold max-w-150 text-secondary">
              International Researcher | Behavioral Health Specialist |
              Education Expert
            </h1>
            <p className="text-sm text-gray-600 max-w-102.5 mt-4">
              Ph.D. scholar with 9+ years of international experience in
              education, addiction science, behavioral health, and
              interdisciplinary research.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <ButtonA
                name="Download CV"
                href="#"
                bgColor={"bg-primary"}
                textColor={"text-white"}
                HoverClasses={"hover:bg-white hover:text-primary"}
              />
              <ButtonLink
                name="Contact Me"
                to="/contact"
                bgColor={"bg-transparent"}
                textColor={"text-primary"}
                HoverClasses={"hover:bg-primary hover:text-white"}
              />
            </div>
          </div>
          <div className="p-4 overflow-hidden">
            <img src={ProfilePic} alt="Profile" className="max-w-200 h-fit" />
          </div>
        </div>
      </section>
      <section className="px-20 pt-12 pb-30 bg-primary text-white" id="about">
        <Heading name="About Me" darkColor="#325254" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="px-8 overflow-hidden">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full h-fit rounded-2xl border-2 border-secondary"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-secondary max-w-120">
              Internationally Recognized Interdisciplinary Researcher
            </h1>
            <p className="text-[16px] max-w-120 text-justify">
              I am an experienced Researcher and Academic passionate about
              public health, social and behavioral research, and data-driven
              insights. I lead and mentor students and junior researchers,
              design workshops and seminars, and translate complex research
              findings into actionable knowledge. My focus is on global
              collaboration, research innovation, and fostering learning and
              impact across communities.
              <br />
              Internationally recognized interdisciplinary researcher
              specializing in education, addiction science, behavioral health,
              and school counseling frameworks. Experienced in leading global
              research collaborations across the USA, Australia, Taiwan, and
              Pakistan.
            </p>
            <ul className="text-[18px] mt-8 space-y-2">
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-xl">
                  experience:
                </span>{" "}
                <p>9+ Years,</p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-xl">
                  projects:
                </span>{" "}
                <p>20+ Research Projects,</p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-xl">
                  publications:
                </span>{" "}
                <p>15+ Publications,</p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-xl">
                  countries:
                </span>{" "}
                <p>4 Countries Worked</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto" id="experience">
        <Heading name="Experience" />
        <div className="space-y-8 my-10">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.role}
                  </h3>
                  <p className="text-gray-600">{item.company}</p>
                </div>

                <div className="text-sm text-gray-500 mt-2 md:mt-0">
                  <p>{item.duration}</p>
                  {item.type && <p>{item.type}</p>}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {item.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary text-white py-16 px-4" id="education">
        <div className="max-w-5xl mx-auto">
          <Heading name="Education" darkColor="#325254" />

          <div className="relative border-l-2 border-secondary/40 pl-8 space-y-10 my-10 cursor-default">
            {education.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <span className="absolute -left-10.5 top-0 w-4 h-4 bg-primary rounded-full inset-ring-2 inset-ring-primary group-hover:bg-secondary transition ease-in-out duration-300 border-2 border-white"></span>

                {/* Content */}
                <div className="-translate-y-1 group-hover:-translate-y-2 transition ease-in-out duration-300 border-b border-white/20 pb-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">
                        {item.degree}
                      </h3>
                      <p className="text-gray-300 mt-1">{item.institute}</p>
                    </div>

                    <div className="text-sm text-gray-400 mt-2 md:mt-0 text-right">
                      <p>{item.duration}</p>
                      {item.grade && (
                        <p className="text-secondary font-medium">
                          {item.grade}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={sectionRef} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Heading name="Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
            {skills.map((skill, index) => (
              <div key={index}>
                {/* Label */}
                <div className="flex justify-between mb-1">
                  <span className="text-gray-800 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 text-sm">{skill.value}%</span>
                </div>

                {/* Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 bg-secondary rounded-full transition-all duration-1000 ease-out"
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
    </>
  );
};

export default Home;
