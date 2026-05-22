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
    <section className="bg-white overflow-hidden">
      {/* Hero */}
      <div className="grid lg:grid-cols-2 gap-16 items-start lg:px-20 sm:px-10 px-5 sm:pt-20 pt-5 pb-15 border-b border-black/5">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[4px] text-secondary font-semibold mb-1 text-xs">
            Academic Support • Research Skills • Student Growth
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight">
            Free Resources for
            <span className="text-secondary"> Researchers & Students</span>
          </h1>

          <div className="w-28 h-1 bg-secondary rounded-full mt-2 mb-4"></div>

          <p className="text-gray-700 md:text-[17px] text-[15px] leading-6">
            Download free academic templates, guides, and toolkits designed to
            help students, early-career researchers, and graduate scholars
            strengthen their research skills and academic writing.
            <br />
            These resources include proposal templates, literature review
            guides, APA citation support, publication resources, and recommended
            learning platforms from leading global universities.
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary rounded-[30px]"></div>

          <img
            src="https://images.unsplash.com/photo-1562789278-dac7af7fb5b1?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Resources"
            className="relative z-10 w-full h-100 object-cover rounded-[30px]"
          />
        </div>
      </div>
      {/* Downloadable Templates */}
      <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15 border-b border-black/5">
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[4px] text-secondary font-semibold">
            Free Downloads
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
            Downloadable
            <span className="text-secondary"> Academic Templates</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-300 p-4 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <FaFileAlt />
              </div>

              <h1 className="text-xl font-bold text-primary mt-5 leading-snug">
                {item.title}
              </h1>

              <div className="mt-8">
                <ButtonA
                  href="#"
                  name="Download Template"
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
      <div className="lg:px-20 sm:px-10 px-5 pt-20 pb-15 border-b border-black/5">
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[4px] text-sm text-secondary font-semibold">
            Learning Platforms
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
            Recommended
            <span className="text-secondary"> Free Courses</span>
          </h1>
        </div>

        {/* Courses */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
          {courses.map((item, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl p-6 text-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center text-2xl">
                <FaGraduationCap />
              </div>

              <h1 className="text-xl font-bold mt-7 leading-snug">
                {item.title}
              </h1>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="underline inline-flex items-center gap-3 mt-8 text-white font-semibold hover:gap-4 transition-all duration-300"
              >
                Visit Platform
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Research Tools */}
      <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-30 border-b border-black/5">
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[4px] text-sm text-secondary font-semibold">
            Essential Platforms
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
            Recommended
            <span className="text-secondary"> Research Tools</span>
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
              className="group bg-white border border-gray-300 rounded-xl p-4 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <FaTools />
                  </div>

                  <div>
                    <h1 className="text-xl font-bold text-primary">
                      {item.title}
                    </h1>

                    <p className="text-gray-500 mt-1">Research Platform</p>
                  </div>
                </div>

                <FaExternalLinkAlt className="text-secondary text-lg" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
