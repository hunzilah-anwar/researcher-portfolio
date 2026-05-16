import { useEffect, useRef, useState } from "react";
import ProfilePic from "../assets/profile-pic.webp";
import HeroBg from "../assets/hero-bg.jpg";
import { ButtonA, ButtonLink } from "../components/Button";
import { Heading } from "../components/OtherCommon";

const Home = () => {
  const experience = [
    {
      role: "Director of Research Operations",
      company:
        "Institute of Academic Research and Excellence (IARE), Australia",
      duration: "May 2025 - Present",
      type: "Remote | Part-Time",
      responsibilities: [
        "Lead and oversee multidisciplinary international research programs from conceptualization to publication and dissemination.",
        "Design and deliver advanced research training workshops on methodology, statistical analysis, grant writing, and scholarly publishing.",
        "Supervise and mentor graduate and international researchers in proposal development, study design, and academic writing.",
        "Ensure research integrity, ethical compliance, and adherence to international scholarly standards.",
        "Establish global research collaborations and coordinate cross-border academic initiatives.",
        "Guide strategic planning for institutional research growth and academic excellence.",
      ],
    },
    {
      role: "Teaching Faculty",
      company: "Scoot Education, Houston, TX",
      duration: "May 2024 - March 2025",
      responsibilities: [
        "Delivered instruction in education and behavioral health related subjects integrating evidence-based teaching methodologies.",
        "Implemented alternative education strategies to manage diverse classrooms and support differentiated learning needs.",
        "Mentored students in research literacy, critical thinking, and practical life skills development.",
        "Promoted inclusive, student-centered learning environments supporting academic achievement and social-emotional growth.",
      ],
    },
    {
      role: "Psychiatric Technician Operational",
      company: "New Mexico Behavioral Health Institution, Las Vegas, USA",
      duration: "Aug 2019 - June 2021",
      responsibilities: [
        "Provided direct clinical support to individuals with acute and chronic psychiatric conditions within a state behavioral health system.",
        "Implemented behavior management and therapeutic support strategies in multidisciplinary treatment teams.",
        "Monitored patient progress, documented clinical observations, and supported crisis intervention efforts.",
        "Ensured adherence to confidentiality, patient rights, and regulatory compliance standards.",
        "Completed professional training in HIPAA compliance, First Aid, AED, and CPR.",
      ],
    },
    {
      role: "Research Engineer & Collaboration",
      company: "National Taiwan Normal University, Taipei, Taiwan",
      duration: "Dec 2018 - May 2019",
      responsibilities: [
        "Supported the design, data collection, and statistical analysis of large-scale research projects in education and behavioral sciences.",
        "Assisted in manuscript preparation, academic editing, and research dissemination activities.",
        "Contributed to proposal development and research documentation for institutional review and funding processes.",
      ],
    },
    {
      role: "Research Assistant",
      company: "Academia Sinica – Institute of Ethnology, Taipei, Taiwan",
      duration: "Dec 2018 - Apr 2019",
      responsibilities: [
        "Contributed to internationally oriented ethnological and interdisciplinary research projects “Parent–child conflict and filial piety within the contemporary East Asian family system within Taiwan’s premier national research institution.",
        "Assisted postgraduate researchers in study design, data collection, and cross-cultural research implementation.",
        "Conducted statistical analysis and supported interpretation of findings for scholarly dissemination.",
        "Contributed to manuscript preparation and academic publications, supporting rigorous methodological standards.",
        "Participated in research initiatives addressing socially and culturally significant issues with international relevance.",
        "Contributed to a cross-cultural research project examining",
        "Assisted in study design, data collection, and implementation of culturally grounded research methodologies.",
        "Conducted statistical analyses and supported interpretation of findings related to intergenerational relationships and behavioral outcomes.",
        "Contributed to manuscript preparation and scholarly publications, ensuring methodological rigor and academic integrity.",
        "Supported research addressing socially significant issues in family dynamics with implications for education and behavioral health policy.",
      ],
    },
    {
      role: "School Counselor",
      company: "Askari School & College, Islamabad, Pakistan",
      duration: "Apr 2011 - Mar 2017",
      responsibilities: [
        "Delivered comprehensive counseling services addressing academic, behavioral, and mental health needs of diverse student populations.",
        "Designed and implemented school-wide mental health, life skills, and crisis intervention workshops.",
        "Developed preventive and early-intervention strategies to support at-risk students and improve educational outcomes.",
        "Collaborated with families and faculty to create structured support systems promoting student resilience and long-term wellbeing.",
        "Led public awareness seminars promoting community-level understanding of mental health and psychosocial development.",
      ],
    },
    {
      role: "Behavior Management Counselor (BMC)",
      company:
        "AASRA Drug Addiction & Rehabilitation Center, Islamabad, Pakistan",
      duration: "Apr 2011 - Mar 2017",
      responsibilities: [
        "Conducted individualized and group behavioral interventions for individuals affected by substance use disorders.",
        "Performed structured behavioral assessments and developed evidence-informed rehabilitation plans.",
        "Provided family guidance and psychoeducation to address intergenerational impacts of addiction.",
        "Collaborated within multidisciplinary rehabilitation teams to strengthen treatment and prevention strategies.",
        "Contributed to public awareness seminars advancing community-based addiction prevention initiatives.",
      ],
    },
  ];

  const education = [
    {
      title:
        "PHD, Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi, Pakistan Research Collaboration with National Taiwan Normal University",
      duration: "02/2015 – 06/2023",
      grade: "95% overall Passing Marks (3.79/4.0.GPA)",
      description: `Graduated with 95% overall Passing Marks (3.79/4.0.GPA) which was held in collaboration with National Taiwan Normal University evaluated by External Examiners: Prof. Dr. Valentin Martínez Otero Perez (Spain): Prof. Dr. Carolyn M. Shields (USA) & Publications in Peer Reviewed Internationally Reputed Journals.
      Dissertation: "Need Assessment for the Children of Drug-Addicted Parents in Rawalpindi and Role of School Guidance and Counseling Services".
      Advisor: Prof. Dr. Muhammad Arshad Dahar, Co-Supervisor/Mentor: Prof. Tony Lee, NTNU, Taipei, Taiwan.
      External Examiners: Prof. Dr. Valentin Martinez Otero Perez (Complutense University, Spain), Prof. Dr. Carolyn M. Shields (Wayne State University, USA).`,
    },

    {
      title:
        "MPHIL, Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi, Pakistan",
      duration: "01/2012 – 06/2014",
      grade: "91.25% overall Passing Marks (3.65/4 C.GPA)",
      description: `Master of Philosophy (MPhil) in Education, graduated securing 91.25% overall Passing Marks (3.65/4 C.GPA) with Publications in Peer reviewed well reputed Journals.`,
    },

    {
      title:
        "Master of Arts (M.A.) in Education University of the Punjab, Lahore, Pakistan",
      duration: "01/2007 – 12/2009",
      grade: "62% overall marks",
      description: `Graduated securing 62% overall marks in Annual Examination. Successfully completed teaching training in the Government school Islamabad.`,
    },

    {
      title:
        "Master of Science (M.Sc.) in Economics, Allama Iqbal Open University, Islamabad, Pakistan",
      duration: "01/2008 – 2010",
      grade: "57% marks",
      description: `Department of Economics
      Specialization in project management, business research, economic & finance of education and public finance. Successfully attained overall 57% marks in the annual examination system`,
    },

    {
      title: "Bachelor of Arts, University of Punjab, Pakistan",
      duration: "08/2004 – 08/2006",
      grade: "Overall good Marks",
      description: `Secured overall good Marks in final Examination and completed the bachelor level education.`,
    },

    {
      title: "FSC-HSSC Federal Board of Intermediate & Secondary Education",
      duration: "04/2001 – 04/2003",
      grade: "535 Passing Marks",
      description: `Successfully attained overall 535 Passing Marks in Faculty of Science Final Exams to complete the College education.`,
    },

    {
      title:
        "Matriculation, Federal board of Intermediate &Secondary Education Islamabad, Pakistan",
      duration: "05/1999 – 05/2002",
      grade: "Passed overall",
      description: `Passed overall in final Examination and completed the Secondary school Certificate education.`,
    },

    {
      title:
        "Graduate Coursework in Guidance & Counseling (Clinical Mental Health), Department of Counseling, New Mexico Highlands University, Las Vegas, NM, USA",
      duration: "Fall semester 2019 – 2020",
      grade: "CGPA = 4 out of 4.0",
      description: `Successfully attained Cumulative Grade Point Average (CGPA) = 4 out of 4.0 in Faculty of Science Final Exams to complete the course work.
      ● PSYC 6010 – Data Analysis and Statistics (A), COUN 6030 – Career Development (A) | GPA: 4.0`,
    },

    {
      title:
        "Diploma in Education, Federal board of Intermediate &Secondary Education Islamabad, Pakistan",
      duration: "Duration 2004 – 2006 (12+1.1/2 Year)",
      grade: "1007 out of 1500",
      description: `Successfully attained Cumulative Grade Point Average total 1007 out of 1500 in Annual examination system, Faculty of teaching in H-9 College of Education, Islamabad, Pakistan.
      Major in Teacher Education: Curriculum & Instruction, Leadership & Planning, change implementation, HRM, Children growth & development, Educational Psychology, Instructional methods & Lesson Planning, Teaching of English, Teaching Practice (Practical)`,
    },

    {
      title:
        "Diploma in Information Technology Ministry of Education, Islamabad, Pakistan",
      duration: "1 Month",
      grade: "",
      description: `Major in MS Word, Power point, MS Excel`,
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
      <section className="py-16 px-4" id="education">
        <div className="max-w-5xl mx-auto">
          <Heading name="Education" />

          <div className="relative border-l-2 border-black/40 pl-8 space-y-10 my-10 cursor-default">
            {education.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <span className="absolute -left-10.25 top-0 w-4 h-4 bg-white rounded-full inset-ring-2 inset-ring-white group-hover:bg-secondary transition ease-in-out duration-300 border-2 border-primary"></span>

                {/* Content */}
                <div className="-translate-y-1 group-hover:-translate-y-2 transition ease-in-out duration-300 border-b border-white/20 pb-4">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold text-secondary">
                      {item.title}
                    </h3>
                    {item.grade && (
                      <p className="text-secondary font-medium">{item.grade}</p>
                    )}
                    <p className="text-gray-400">{item.duration}</p>
                    <p className="text-primary mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={sectionRef} className="bg-primary text-white py-16 px-4" id="skills">
        <div className="max-w-5xl mx-auto">
          <Heading name="Skills" darkColor='#325254' />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
            {skills.map((skill, index) => (
              <div key={index}>
                {/* Label */}
                <div className="flex justify-between mb-1">
                  <span className="font-medium">
                    {skill.name}
                  </span>
                  <span className="text-sm">{skill.value}%</span>
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
      <section className="py-16 px-4 max-w-6xl mx-auto" id="experience">
        <Heading name="Experience" />
        <div className="space-y-8 my-10">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.role}
                  </h3>
                  <p className="text-gray-600">{item.company}</p>
                </div>

                <div className="text-sm text-gray-500 mt-2 md:mt-0">
                  <p>{item.duration}</p>
                  {item.type && (
                    <p className="text-secondary font-medium"> {item.type}</p>
                  )}
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
    </>
  );
};

export default Home;
