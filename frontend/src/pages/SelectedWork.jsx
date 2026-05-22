import { ButtonA, ButtonLink } from "../components/Button";

const SelectedWork = () => {
  const projects = [
    {
      id: "01",
      title: "Children of Drug-Addicted Parents — Need Assessment",
      type: "Ph.D. Dissertation Research",
      institution: "PMAS Arid Agriculture University + NTNU, Taiwan",
      summary:
        "Comprehensive needs assessment study examining how parental drug addiction affects children's academic and counseling needs in Rawalpindi, Pakistan. Evaluated by international examiners from Spain and USA.",
      image:
        "https://plus.unsplash.com/premium_photo-1663076090791-c78a0a9a146e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "02",
      title: "Heroin-Using Parents & Child Academic Performance",
      type: "Peer-Reviewed Publication + NIDA Conference Presentation",
      institution:
        "CPDD 81st Annual Scientific Meeting, NIDA International Forum, San Antonio, TX (2019)",
      summary:
        "Research examining the hidden academic harm experienced by children living in heroin-affected family environments.",
      award: "Young Scientist International Travel Award",
      link: "https://cpdd.org/wp-content/uploads/2019/05/Program_Book_2019_Finished.pdf",
      image:
        "https://images.unsplash.com/photo-1758685733907-42e9651721f5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "03",
      title: "Cross-Cultural Study — Parent-Child Conflict & Filial Piety",
      type: "International Research Collaboration",
      institution:
        "Academia Sinica, Institute of Ethnology, Taipei, Taiwan (2018–2019)",
      summary:
        "Contributed to a cross-cultural study examining intergenerational family dynamics, filial piety, and parent-child conflict within East Asian family systems.",
      image:
        "https://images.unsplash.com/photo-1752652012439-34b55e8b57a2?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "04",
      title: "HIV & Methadone Treatment Adherence, Taiwan",
      type: "International Research",
      institution: "Behavioral Health & Clinical Research Collaboration",
      summary:
        "Study on adherence patterns among HIV-positive injection drug users undergoing methadone treatment in Taiwan — cross-cultural behavioral health research with clinical implications.",
      image:
        "https://images.unsplash.com/photo-1621773875315-416e2997ed52?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: "05",
      title: "School Bullying — Systematic Review (2000–2024)",
      type: "Systematic Review Publication",
      institution: "Psychology of Education & Learning Sciences",
      summary:
        "Comprehensive systematic review examining the prevalence and characteristics of school bullying in children and adolescents across 24 years of global literature.",
      image:
        "https://images.unsplash.com/photo-1727553957788-9ddfd38889d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-gray-100 lg:px-20 sm:px-10 px-5 sm:pt-20 pt-5 pb-30 overflow-hidden">
      {/* Intro */}
      <div className="text-center max-w-5xl mx-auto">
        <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold">
          Research • Collaboration • Impact
        </p>

        <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight mt-1">
          Selected Research
          <span className="text-secondary"> Projects & Contributions</span>
        </h1>

        <p className="text-gray-600 leading-6 mt-1 md:text-[16px] text-[14px]">
          Interdisciplinary research projects focused on addiction science,
          behavioral health, school counseling, educational systems, and
          cross-cultural research collaboration.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-24 mt-16">
        {projects.map((item, index) => (
          <div
            key={item.id}
            className={`grid lg:grid-cols-2 sm:gap-16 gap-8 items-start ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary rounded-[30px]"></div>

              <img
                src={item.image}
                alt={item.title}
                className="relative z-10 w-full h-100 object-cover rounded-[30px]"
              />
            </div>

            {/* Content */}
            <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              <p className="uppercase text-sm tracking-[4px] text-secondary font-semibold mb-1">
                {item.type}
              </p>

              <h1 className="md:text-2xl text-xl font-bold text-primary leading-tight">
                {item.title}
              </h1>

              <div className="w-24 h-1 bg-secondary rounded-full mt-1 mb-4"></div>

              <div className="space-y-1">
                <div>
                  <h2 className="text-secondary font-semibold text-lg">
                    Institution / Venue
                  </h2>

                  <p className="text-gray-700 leading-8">{item.institution}</p>
                </div>

                {item.award && (
                  <div>
                    <h2 className="text-secondary font-semibold text-lg">
                      Award
                    </h2>

                    <p className="text-gray-700 leading-6">{item.award}</p>
                  </div>
                )}

                <div>
                  <h2 className="text-secondary font-semibold text-lg">
                    Summary
                  </h2>

                  <p className="text-gray-700 leading-6 text-justify">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <ButtonLink
                  to="/research"
                  name="Explore Project"
                  bgColor="bg-primary"
                  textColor="text-white"
                  HoverClasses="hover:bg-transparent hover:text-primary"
                />

                {item.link ? (
                  <ButtonA
                    href={item.link}
                    name="View Details"
                    bgColor="bg-white"
                    textColor="text-primary"
                    HoverClasses="hover:bg-primary hover:text-white"
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
