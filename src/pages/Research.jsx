import { ButtonLink } from "../components/Button";

import {
  FaBrain,
  FaSchool,
  FaUsers,
  FaChartBar,
  FaUserShield,
  FaFlask,
} from "react-icons/fa";

const Research = () => {
  // Expertise Areas
  const expertiseAreas = [
    {
      id: 1,
      title: "Intergenerational Impact of Substance Use Disorders",
      desc: "Examining how parental addiction — including heroin, methamphetamine, and narcotic use — affects children's academic performance, behavioral outcomes, and mental health at primary and secondary school levels.",
      icon: <FaUsers />,
    },

    {
      id: 2,
      title: "Addiction-Informed School Counseling Frameworks",
      desc: "Developing and evaluating counseling strategies that equip school guidance counselors to identify and support students from drug-affected family environments.",
      icon: <FaSchool />,
    },

    {
      id: 3,
      title: "Methadone Treatment Adherence Research",
      desc: "Studying adherence patterns among HIV-positive injection drug users undergoing methadone treatment, with cross-cultural fieldwork conducted in Taiwan.",
      icon: <FaBrain />,
    },

    {
      id: 4,
      title: "Bullying, Depression & Educational Outcomes",
      desc: "Systematic review and epidemiological analysis of school bullying prevalence and its relationship to academic stress, depression, and performance in children and adolescents.",
      icon: <FaUserShield />,
    },

    {
      id: 5,
      title: "Behavioral Health Integration in Academic Institutions",
      desc: "Designing frameworks for integrating mental health and behavioral health services into school and university systems — particularly for at-risk and underserved populations.",
      icon: <FaFlask />,
    },

    {
      id: 6,
      title: "Quantitative Research Design & Statistical Analysis",
      desc: "Application of advanced statistical methods — including SPSS, regression analysis, and structural equation modeling — to education and behavioral health datasets.",
      icon: <FaChartBar />,
    },
  ];

  // Research Projects
  const researchProjects = [
    {
      id: 1,
      title:
        "Need Assessment for the Children of Drug-Addicted Parents and the Role of School Guidance and Counseling Services",
      advisor: "Prof. Dr. Muhammad Arshad Dahar",
      mentor: "Prof. Tony Lee, NTNU",
      examiners:
        "Prof. Dr. Valentin Martínez Otero Pérez (Spain); Prof. Dr. Carolyn M. Shields (USA)",
    },

    {
      id: 2,
      title:
        "Effect of Narcotic Addiction of Parents on Social and Academic Affairs of Their Children",
      advisor: "Prof. Dr. Muhammad Arshad Dahar",
    },

    {
      id: 3,
      title:
        "Parent–Child Conflict and Filial Piety within the Contemporary East Asian Family System",
      organization:
        "Academia Sinica – Institute of Ethnology, Taipei, Taiwan (2018–2019)",
    },
  ];

  return (
    <>
      <section className="bg-white overflow-hidden">

          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-16 items-start lg:px-20 sm:px-10 px-5 pt-20 pb-15">
            {/* Left */}
            <div>
              <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight">
                Understanding the Hidden Harm —
                <span className="text-secondary">
                  {" "}
                  Intergenerational Addiction
                </span>
                , Education & Behavioral Health
              </h1>

              <div className="w-28 h-1 bg-secondary rounded-full mt-1 mb-4"></div>

              <p className="text-gray-700 md:text-[17px] text-[15px] leading-8.5 text-justify">
                My research is driven by one core question: how does parental
                substance use disorder shape the academic, emotional, and social
                lives of children — and what can schools, counselors, and
                policymakers do about it?
                <br />
                I approach this question through rigorous quantitative research
                design, cross-cultural comparison, and evidence-informed
                intervention frameworks.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <ButtonLink
                  to="/publications"
                  name="View Publications"
                  bgColor="bg-primary"
                  textColor="text-white"
                  HoverClasses="hover:bg-transparent hover:text-primary"
                />

                <ButtonLink
                  to="/contact"
                  name="Collaborate"
                  bgColor="bg-secondary"
                  textColor="text-white"
                  HoverClasses="hover:bg-primary hover:text-white"
                />
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary rounded-[30px]"></div>

              <img
                src="https://plus.unsplash.com/premium_photo-1679429321037-f1921d15198b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Research"
                className="relative z-10 w-full h-100 object-cover rounded-[30px] shadow-2xl"
              />
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="md:text-4xl text-3xl font-bold text-primary">
                Areas of Expertise
              </h1>

              <p className="text-gray-600 mt-5 leading-8">
                Research domains focused on addiction science, educational
                systems, behavioral health, counseling interventions, and
                evidence-based policy development.
              </p>
            </div>

            {/* Cards */}
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
              {expertiseAreas.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-8 rounded-xl border border-gray-300 hover:bg-black/2 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>

                  <h1 className="text-2xl font-bold text-primary mt-7 leading-snug">
                    {item.title}
                  </h1>

                  <p className="text-gray-600 leading-8 mt-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Framework */}
          <div className="lg:mx-20 sm:mx-10 mx-5 mt-20 mb-15 bg-primary/10 rounded-xl lg:p-16 sm:p-10 p-6 text-primary relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-secondary rounded-full"></div>

            <div className="relative z-10">
              <p className="uppercase tracking-[4px] sm:text-secondary text-primary font-semibold mb-1">
                Research Philosophy
              </p>

              <h1 className="md:text-4xl text-2xl font-bold leading-tight">
                My Research Framework
              </h1>

              <p className="mt-2 text-black/90 leading-8.5 max-w-5xl text-justify">
                My work sits at the intersection of three interconnected
                domains:
                <br />
                <span className="font-semibold text-secondary">
                  Education
                </span>{" "}
                — academic performance, school counseling, curriculum, and
                learning outcomes.
                <br />
                <span className="font-semibold text-secondary">
                  Addiction Science
                </span>{" "}
                — substance use epidemiology, treatment adherence, harm
                reduction.
                <br />
                <span className="font-semibold text-secondary">
                  Behavioral Health
                </span>{" "}
                — mental health, trauma, psychosocial development, crisis
                intervention.
                <br />
                Each research project I undertake draws from at least two of
                these domains — producing findings with direct implications for
                educators, counselors, policymakers, and families.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <ButtonLink
                  to="/framework"
                  name="View Research Framework"
                  bgColor="bg-secondary"
                  textColor="text-white"
                  HoverClasses="hover:bg-white hover:text-primary"
                />

                <ButtonLink
                  to="/research"
                  name="Read More"
                  bgColor="bg-transparent"
                  textColor="text-primary"
                  HoverClasses="hover:bg-secondary hover:text-white"
                />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="md:text-4xl text-3xl font-bold text-primary">
                Research Projects
              </h1>

              <p className="text-gray-600 mt-2 leading-8">
                National and international research projects focused on
                addiction science, behavioral health, counseling systems, and
                educational intervention frameworks.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8 space-y-10">
              {researchProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="relative sm:pl-14 pl-0 group"
                >
                  {/* Line */}
                  {index !== researchProjects.length - 1 && (
                    <span className="absolute left-5.5 top-16 w-0.5 h-full bg-secondary/30 sm:block hidden"></span>
                  )}

                  {/* Dot */}
                  <div className="absolute left-0 top-0 sm:flex hidden w-11 h-11 rounded-full bg-secondary text-white items-center justify-center font-bold text-lg">
                    0{project.id}
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-gray-300 lg:p-10 p-6 hover:bg-black/5 transition-all duration-300">
                    <h1 className="md:text-3xl text-xl font-bold text-primary leading-snug">
                      {project.title}
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mt-4">
                      {project.advisor && (
                        <div>
                          <h2 className="text-secondary font-semibold text-lg mb-1">
                            Advisor
                          </h2>

                          <p className="text-gray-600 leading-8">
                            {project.advisor}
                          </p>
                        </div>
                      )}

                      {project.mentor && (
                        <div>
                          <h2 className="text-secondary font-semibold text-lg mb-1">
                            Co-Mentor
                          </h2>

                          <p className="text-gray-600 leading-8">
                            {project.mentor}
                          </p>
                        </div>
                      )}

                      {project.examiners && (
                        <div className="md:col-span-2">
                          <h2 className="text-secondary font-semibold text-lg mb-1">
                            External Examiners
                          </h2>

                          <p className="text-gray-600 leading-8">
                            {project.examiners}
                          </p>
                        </div>
                      )}

                      {project.organization && (
                        <div className="md:col-span-2">
                          <h2 className="text-secondary font-semibold text-lg mb-2">
                            Institution
                          </h2>

                          <p className="text-gray-600 leading-8">
                            {project.organization}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </>
  );
};

export default Research;