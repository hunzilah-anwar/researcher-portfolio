const ResearchProjects = () => {
  //   Research Projects
  const researchProjects = [
    {
      title:
        "NEED ASSESSMENT FOR THE CHILDREN OF DRUG-ADDICTED PARENTS AND THE ROLE OF SCHOOL GUIDANCE AND COUNSELING SERVICES",
      advisor: "Prof. Dr. Muhammad Arshad Dahar",
      mentor: "Prof. Tony Lee (National Taiwan Normal University)",
      examiners:
        "Prof. Dr. Valentin Martínez Otero Pérez (Spain); Prof. Dr. Carolyn M. Shields (USA)",
    },

    {
      title:
        "THESIS: EFFECT OF NARCOTIC ADDICTION OF PARENTS ON SOCIAL AND ACADEMIC AFFAIRS OF THEIR CHILDREN.",
      advisor: "Prof. Dr. Muhammad Arshad Dahar",
    },
  ];

  return (
    <>
      <section
        className="bg-white text-primary py-20 px-4"
        id="researchprojects"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="sm:text-4xl text-2xl font-bold">
              Research Projects
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto sm:text-[16px] text-sm">
              National and international research projects focused on addiction
              science, behavioral health, counseling, and educational
              interventions.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <div
                key={index}
                className="relative sm:border-l-2 border-black/50 sm:pl-8 group"
              >
                {/* Dot */}
                <span className="absolute sm:block hidden -left-2.25 top-0 w-4 h-4 bg-white rounded-full inset-ring-2 inset-ring-white group-hover:bg-secondary transition ease-in-out duration-300 border-2 border-primary"></span>

                {/* Card */}
                <div className="bg-white border border-black/10 p-8 hover:bg-black/10 transition duration-300">
                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-semibold leading-relaxed text-primary">
                    {project.title}
                  </h3>

                  {/* Advisor */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-secondary font-semibold mb-1">
                        Advisor
                      </h4>

                      <p className="text-gray-500">{project.advisor}</p>
                    </div>

                    {/* Mentor */}
                    {project.mentor && (
                      <div>
                        <h4 className="text-secondary font-semibold mb-1">
                          Co-Mentor
                        </h4>

                        <p className="text-gray-500">{project.mentor}</p>
                      </div>
                    )}

                    {/* Examiners */}
                    {project.examiners && (
                      <div>
                        <h4 className="text-secondary font-semibold mb-1">
                          External Examiners
                        </h4>

                        <p className="text-gray-500 leading-relaxed">
                          {project.examiners}
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

export default ResearchProjects;
