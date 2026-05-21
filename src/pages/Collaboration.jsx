import { ButtonLink } from "../components/Button";

import {
  FaBrain,
  FaGlobeAsia,
  FaHandshake,
  FaHospital,
  FaSchool,
  FaUsers,
} from "react-icons/fa";

const Collaboration = () => {
  const collaborations = [
    {
      icon: <FaUsers />,
      title: "Intergenerational Impact of Substance Use Disorders on Children",
      desc: "Collaborative research exploring how parental addiction affects children's emotional wellbeing, academic achievement, psychosocial development, and long-term behavioral outcomes.",
    },

    {
      icon: <FaSchool />,
      title: "Addiction-Informed Educational Intervention Design",
      desc: "Development and evaluation of evidence-based school counseling and educational intervention frameworks supporting children and families affected by substance use disorders.",
    },

    {
      icon: <FaBrain />,
      title: "School Mental Health and Counseling Program Evaluation",
      desc: "Research partnerships focused on evaluating school-based mental health services, counseling systems, resilience-building programs, and student wellbeing initiatives.",
    },

    {
      icon: <FaGlobeAsia />,
      title: "Cross-Cultural Behavioral Health Research",
      desc: "International collaborative projects across Asia, USA, and Pakistan examining behavioral health, educational systems, trauma, and psychosocial adaptation.",
    },

    {
      icon: <FaHospital />,
      title: "Public Health & Epidemiology Studies",
      desc: "Collaborative epidemiological and behavioral health studies addressing addiction science, mental health, treatment adherence, and public health in underserved populations.",
    },

    {
      icon: <FaHandshake />,
      title: "Systematic Reviews in Behavioral & Educational Sciences",
      desc: "Joint systematic reviews and evidence synthesis projects related to psychology, education, school bullying, trauma, counseling, and mental health research.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-start lg:px-20 sm:px-10 px-5 pt-20 pb-15">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[4px] text-sm text-secondary font-semibold mb-1">
            International Partnerships • Research • Innovation
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight">
            Research
            <span className="text-secondary"> Collaboration</span>
          </h1>

          <div className="w-28 h-1 bg-secondary rounded-full mt-1 mb-3"></div>

          <p className="text-gray-700 md:text-[17px] text-[15px] leading-8.5 text-justify">
            Dr. Quratulain welcomes international research collaborations with
            scholars, institutions, universities, NGOs, and health organizations
            working in areas aligned with her expertise.
            <br />
            <br />
            Through interdisciplinary and cross-cultural collaboration, her work
            focuses on addiction science, behavioral health, school counseling,
            trauma-informed education, and evidence-based intervention
            frameworks aimed at supporting vulnerable populations and improving
            community wellbeing.
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -top-5 -right-5 w-full h-full border-2 border-secondary rounded-[30px]"></div>

          <img
            src="https://plus.unsplash.com/premium_photo-1661629487039-4a09a72dca19?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Research Collaboration"
            className="relative z-10 w-full h-100 object-cover rounded-[30px]"
          />
        </div>
      </div>

      {/* Areas */}
      <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15">
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase text-sm tracking-[4px] text-secondary font-semibold">
            Open Opportunities
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
            Areas Open for
            <span className="text-secondary"> Collaboration</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
          {collaborations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-300 p-4 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h1 className="text-xl font-bold text-primary mt-2 leading-snug">
                {item.title}
              </h1>

              <p className="text-gray-600 leading-8 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="lg:px-20 sm:px-10 px-5 pt-20 pb-15">
        <div className="bg-primary rounded-[40px] lg:p-16 sm:p-12 p-8 text-center text-white relative overflow-hidden">
          {/* BG Shape */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/20"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="uppercase text-xs tracking-[4px] text-white font-semibold">
              Build Meaningful Partnerships
            </p>

            <h1 className="md:text-3xl text-xl font-bold mt-5 leading-tight">
              Interested in Research Collaboration?
            </h1>

            <p className="text-white/80 leading-8.5 mt-8 md:text-[17px] text-[15px]">
              Researchers, universities, public health organizations, NGOs, and
              interdisciplinary teams are welcome to collaborate on impactful
              projects related to addiction science, behavioral health, mental
              health, counseling, trauma-informed education, and evidence-based
              intervention research.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <ButtonLink
                to="/contact"
                name="Collaborate With Me"
                bgColor="bg-white"
                textColor="text-primary"
                HoverClasses="border border-white hover:bg-primary hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
