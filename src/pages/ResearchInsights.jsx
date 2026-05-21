import {
  FaBookOpen,
  FaClock,
  FaComments,
  FaFileAlt,
  FaGlobe,
  FaLightbulb,
} from "react-icons/fa";

const ResearchInsights = () => {
  const blogArticles = [
    {
      title: "How to Write a Research Proposal",
      desc:
        "A practical guide to developing strong research questions, conceptual frameworks, methodology, and proposal structure.",
      icon: <FaFileAlt />,
    },

    {
      title: "How to Conduct a Literature Review",
      desc:
        "Step-by-step strategies for identifying sources, synthesizing evidence, and writing impactful literature reviews.",
      icon: <FaBookOpen />,
    },

    {
      title: "How to Publish in International Journals",
      desc:
        "Insights into journal selection, manuscript preparation, peer review, and publication strategies for researchers.",
      icon: <FaGlobe />,
    },

    {
      title: "How to Respond to Reviewer Comments",
      desc:
        "Learn effective techniques for addressing reviewer feedback professionally and improving manuscript acceptance.",
      icon: <FaComments />,
    },

    {
      title: "Introduction to SPSS for Beginners",
      desc:
        "Foundational guidance on SPSS, statistical analysis, quantitative methods, and data interpretation for students.",
      icon: <FaLightbulb />,
    },

    {
      title: "Scholarship Application Tips — A Practical Guide",
      desc:
        "Expert advice for preparing competitive scholarship applications, personal statements, and academic profiles.",
      icon: <FaBookOpen />,
    },
  ];

  return (
    <section className="bg-white overflow-hidden">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:px-20 sm:px-10 px-5 pt-20 pb-15">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-5 py-3 rounded-full font-semibold">
              <FaClock />
              Coming Soon
            </div>

            <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight mt-4">
              Research
              <span className="text-secondary">
                {" "}
                Insights
              </span>
            </h1>

            <div className="w-28 h-1 bg-secondary rounded-full mt-1 mb-4"></div>

            <p className="text-gray-700 md:text-[17px] text-[15px] leading-8.5 text-justify">
              Practical articles and guides on research
              methods, academic writing, publication
              strategies, and career development — coming
              soon.
              <br />
              <br />
              This section will provide evidence-informed
              insights, academic guidance, and practical tools
              designed to support students, researchers, and
              early-career scholars navigating the world of
              research and higher education.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary rounded-[30px]"></div>

            <img
              src="https://plus.unsplash.com/premium_photo-1661488414631-ebfc552ee319?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Research Insights"
              className="relative z-10 w-full h-100 object-cover rounded-[30px]"
            />
          </div>
        </div>

        {/* Planned Blog Articles */}
        <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold">
              Planned Articles
            </p>

            <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
              Upcoming Research
              <span className="text-secondary">
                {" "}
                Blog Topics
              </span>
            </h1>
          </div>

          {/* Articles Grid */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
            {blogArticles.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-300 p-4 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h1 className="text-xl font-bold text-primary mt-4 leading-snug">
                  {item.title}
                </h1>

                <p className="text-gray-600 leading-6 mt-2">
                  {item.desc}
                </p>

                {/* Buttons */}
                <div className="mt-4">

                  <button className="px-5 py-2 rounded-full border border-primary text-primary text-sm font-medium cursor-pointer hover:bg-primary curs hover:text-white transition-all duration-300">
                    Read Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ResearchInsights;