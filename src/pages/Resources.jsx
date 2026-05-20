import { Heading } from "../components/OtherCommon";
import { ButtonA } from "../components/Button";

import {
  FaExternalLinkAlt,
  FaFileAlt,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";

const Resources = () => {
  // Downloadable Resources
  const resources = [
    {
      title: "Research Proposal Template",
      button: "Download Research Proposal Template",
    },

    {
      title: "Literature Review Template",
      button: "Download Literature Review Template",
    },

    {
      title: "APA 7 Citation Guide",
      button: "Download APA 7 Guide",
    },

    {
      title: "Thesis Outline Template",
      button: "Download Thesis Outline",
    },

    {
      title: "Reviewer Response Template",
      button: "Download Reviewer Response Template",
    },

    {
      title: "Academic CV Template",
      button: "Download Academic CV Template",
    },

    {
      title: "Personal Statement Template",
      button: "Download Personal Statement Template",
    },
  ];

  // Courses
  const courses = [
    {
      title: "Harvard Online Learning",
      link: "https://pll.harvard.edu",
    },

    {
      title: "MIT OpenCourseWare",
      link: "https://ocw.mit.edu",
    },

    {
      title: "Stanford Online",
      link: "https://online.stanford.edu",
    },

    {
      title: "Yale Open Courses",
      link: "https://oyc.yale.edu",
    },

    {
      title: "edX",
      link: "https://www.edx.org",
    },

    {
      title: "Coursera",
      link: "https://www.coursera.org",
    },

    {
      title: "FutureLearn",
      link: "https://www.futurelearn.com",
    },
  ];

  // Research Tools
  const tools = [
    {
      title: "Google Scholar",
      link: "https://scholar.google.com",
    },

    {
      title: "Zotero",
      link: "https://www.zotero.org",
    },

    {
      title: "Mendeley",
      link: "https://www.mendeley.com",
    },

    {
      title: "Overleaf",
      link: "https://www.overleaf.com",
    },

    {
      title: "ORCID",
      link: "https://orcid.org",
    },

    {
      title: "ResearchGate",
      link: "https://www.researchgate.net",
    },
  ];

  return (
    <section className="lg:px-20 sm:px-10 px-5 py-20 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <Heading name="Resources" darkColor="#325254" />

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[4px] text-secondary font-semibold mb-4">
              Academic Support • Research Skills • Student Growth
            </p>

            <h1 className="md:text-5xl text-3xl font-bold text-primary leading-tight">
              Free Resources for
              <span className="text-secondary">
                {" "}
                Researchers & Students
              </span>
            </h1>

            <div className="w-28 h-1 bg-secondary rounded-full mt-6 mb-8"></div>

            <p className="text-gray-700 md:text-[17px] text-[15px] leading-[34px] text-justify">
              Download free academic templates, guides, and
              toolkits designed to help students, early-career
              researchers, and graduate scholars strengthen
              their research skills and academic writing.
              <br />
              <br />
              These resources include proposal templates,
              literature review guides, APA citation support,
              publication resources, and recommended learning
              platforms from leading global universities.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              <div className="bg-[#f8fbfb] rounded-[25px] border border-gray-100 p-5">
                <h1 className="text-3xl font-bold text-secondary">
                  7+
                </h1>

                <p className="text-gray-600 mt-2 leading-7">
                  Downloadable Templates
                </p>
              </div>

              <div className="bg-[#f8fbfb] rounded-[25px] border border-gray-100 p-5">
                <h1 className="text-3xl font-bold text-secondary">
                  7+
                </h1>

                <p className="text-gray-600 mt-2 leading-7">
                  Recommended Courses
                </p>
              </div>

              <div className="bg-[#f8fbfb] rounded-[25px] border border-gray-100 p-5">
                <h1 className="text-3xl font-bold text-secondary">
                  6+
                </h1>

                <p className="text-gray-600 mt-2 leading-7">
                  Research Tools
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-full h-full border-2 border-secondary rounded-[30px]"></div>

            <img
              src="/resources/resources.webp"
              alt="Resources"
              className="relative z-10 w-full h-[750px] object-cover rounded-[30px] shadow-2xl"
            />

            {/* Floating Box */}
            <div className="absolute bottom-8 -left-5 z-20 bg-primary text-white p-6 rounded-[30px] shadow-2xl max-w-[280px]">
              <h1 className="text-4xl font-bold">
                Academic Toolkit
              </h1>

              <p className="text-white/90 leading-7 mt-3">
                Free templates, academic guides, research tools,
                and educational platforms for students and
                researchers.
              </p>
            </div>
          </div>
        </div>

        {/* Downloadable Templates */}
        <div className="mt-28">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[4px] text-secondary font-semibold">
              Free Downloads
            </p>

            <h1 className="md:text-4xl text-3xl font-bold text-primary mt-4">
              Downloadable
              <span className="text-secondary">
                {" "}
                Academic Templates
              </span>
            </h1>
          </div>

          {/* Grid */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
            {resources.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8fbfb] rounded-[30px] border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <FaFileAlt />
                </div>

                <h1 className="text-2xl font-bold text-primary mt-7 leading-snug">
                  {item.title}
                </h1>

                <div className="mt-8">
                  <ButtonA
                    href="#"
                    name={item.button}
                    bgColor="bg-primary"
                    textColor="text-white"
                    HoverClasses="hover:bg-transparent hover:text-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="mt-28">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[4px] text-secondary font-semibold">
              Learning Platforms
            </p>

            <h1 className="md:text-4xl text-3xl font-bold text-primary mt-4">
              Recommended
              <span className="text-secondary">
                {" "}
                Free Courses
              </span>
            </h1>
          </div>

          {/* Courses */}
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-7 mt-16">
            {courses.map((item, index) => (
              <div
                key={index}
                className="bg-primary rounded-[30px] p-8 text-white hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 text-secondary flex items-center justify-center text-2xl">
                  <FaGraduationCap />
                </div>

                <h1 className="text-2xl font-bold mt-7 leading-snug">
                  {item.title}
                </h1>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 mt-8 text-secondary font-semibold hover:gap-4 transition-all duration-300"
                >
                  Visit Platform
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Research Tools */}
        <div className="mt-28">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[4px] text-secondary font-semibold">
              Essential Platforms
            </p>

            <h1 className="md:text-4xl text-3xl font-bold text-primary mt-4">
              Recommended
              <span className="text-secondary">
                {" "}
                Research Tools
              </span>
            </h1>
          </div>

          {/* Tools */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
            {tools.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group bg-white border border-gray-100 rounded-[30px] p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <FaTools />
                    </div>

                    <div>
                      <h1 className="text-2xl font-bold text-primary">
                        {item.title}
                      </h1>

                      <p className="text-gray-500 mt-2">
                        Research Platform
                      </p>
                    </div>
                  </div>

                  <FaExternalLinkAlt className="text-secondary text-lg" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;