import { Heading } from "../components/OtherCommon";
import { ButtonLink } from "../components/Button";
import {
  FaAward,
  FaBookOpen,
  FaGlobeAsia,
  FaUserGraduate,
} from "react-icons/fa";
import ProfilePic from "../assets/profile-pic.jpg";


const aboutCards = [
  {
    id: 1,
    title: "9+ Years Experience",
    desc: "Working across education, counseling, mental health & addiction research.",
    icon: <FaUserGraduate />,
  },
  {
    id: 2,
    title: "International Research",
    desc: "Presented and collaborated with institutions in Taiwan & the United States.",
    icon: <FaGlobeAsia />,
  },
  {
    id: 3,
    title: "Published Scholar",
    desc: "Research published in peer-reviewed international journals including BMC Psychiatry.",
    icon: <FaBookOpen />,
  },
  {
    id: 4,
    title: "Award Recognition",
    desc: "Recipient of the CPDD Young Scientist International Travel Award.",
    icon: <FaAward />,
  },
];

const About = () => {
  return (
    <section className="lg:px-20 sm:px-10 px-5 py-20 bg-[#f8fbfb] overflow-hidden">
      <div className="max-w-375 mx-auto">
        {/* Heading */}
        <Heading name="About Me" darkColor="#325254" />

        {/* Top Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-16">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-secondary rounded-[30px]"></div>

            <img
              src={ProfilePic}
              alt="About"
              className="relative z-10 w-full h-187.5 object-cover object-top rounded-[30px] shadow-2xl"
            />

            {/* Experience Box */}
            <div className="absolute bottom-8 -right-5 z-20 bg-primary text-white p-6 rounded-3xl shadow-2xl max-w-62.5">
              <h1 className="text-5xl font-bold">9+</h1>

              <p className="mt-2 leading-7 text-white/90">
                Years of experience in education, counseling & behavioral health
                research.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>

            <h1 className="md:text-3xl text-3xl font-bold text-primary leading-tight">
              Bridging Education,
              <span className="text-secondary">
                {" "}
                Behavioral Health
              </span>{" "}
              & Addiction Research
            </h1>

            <div className="w-28 h-1 bg-secondary rounded-full mt-6 mb-8"></div>

            <div className="space-y-6 text-gray-700 leading-8.5 md:text-[17px] text-[15px] text-justify">
              <p>
                I am an interdisciplinary researcher, educator, and behavioral
                health professional with more than nine years of experience
                working in education, mental health, school counseling, and
                addiction research. My work focuses on understanding how
                parental substance use disorders affect children’s academic
                performance, emotional wellbeing, and long-term development.
              </p>

              <p>
                My research journey began during my years as a School Counselor
                at Askari School & College and a Behavior Management Counselor
                at AASRA Drug Addiction & Rehabilitation Center in Islamabad,
                Pakistan. Working closely with students and families affected by
                addiction helped shape my long-term research interest in
                intergenerational behavioral health and addiction-informed
                educational support systems.
              </p>

              <p>
                I completed my Ph.D. in Education at Pir Mehr Ali Shah Arid
                Agriculture University in collaboration with National Taiwan
                Normal University, where my doctoral research explored the needs
                of children of drug-addicted parents and the role of school
                counseling services in supporting vulnerable students.
              </p>

              <p>
                During my doctoral studies, I contributed to cross-cultural
                research projects at Academia Sinica and worked as a Research
                Engineer at National Taiwan Normal University, supporting
                large-scale studies in education and behavioral sciences.
              </p>

              <p>
                In 2019, I presented my research at the NIDA International
                Forum in Texas and received the CPDD Young Scientist
                International Travel Award for my research on how heroin-using
                parents negatively impact children’s academic achievement.
              </p>

              <p>
                My current interests include addiction-informed school
                counseling, child and adolescent mental health, bullying and
                depression in educational settings, methadone treatment
                adherence research, and behavioral health integration within
                academic institutions.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <ButtonLink
                to="/contact"
                name="Contact Me"
                bgColor="bg-primary"
                textColor="text-white"
                HoverClasses="hover:bg-transparent hover:text-primary"
              />

              <ButtonLink
                to="/publications"
                name="View Publications"
                bgColor="bg-secondary"
                textColor="text-white"
                HoverClasses="hover:bg-primary hover:text-white"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-24">
          {aboutCards.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-[30px] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary text-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h1 className="text-2xl font-bold text-primary mt-6">
                {item.title}
              </h1>

              <p className="text-gray-600 leading-8 mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;