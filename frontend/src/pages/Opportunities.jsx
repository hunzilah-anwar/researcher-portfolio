import { ButtonLink } from "../components/Button";

import {
  FaBriefcase,
  FaExternalLinkAlt,
  FaGlobe,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

const Opportunities = () => {
  const opportunities = [
    {
      title: "Scholarship Positions",
      desc:
        "International scholarships, grants, fellowships, internships, and academic funding opportunities for students and researchers worldwide.",
      link: "https://www.scholarshippositions.com",
      icon: <FaGraduationCap />,
    },

    {
      title: "FindAPhD",
      desc:
        "Explore fully funded and self-funded PhD opportunities across universities and research institutions worldwide.",
      link: "https://www.findaphd.com",
      icon: <FaUniversity />,
    },

    {
      title: "FindAPostDoc",
      desc:
        "Discover international postdoctoral fellowships, research assistantships, and advanced academic research positions.",
      link: "https://www.findapostdoc.com",
      icon: <FaBriefcase />,
    },

    {
      title: "EURAXESS",
      desc:
        "European research opportunities, mobility programs, grants, funding, and international collaboration networks.",
      link: "https://euraxess.ec.europa.eu",
      icon: <FaGlobe />,
    },

    {
      title: "Nature Careers",
      desc:
        "Research jobs, postdoctoral fellowships, faculty positions, and global academic career opportunities.",
      link: "https://www.nature.com/naturecareers",
      icon: <FaBriefcase />,
    },

    {
      title: "HigherEdJobs",
      desc:
        "Academic, administrative, faculty, and university employment opportunities from institutions around the world.",
      link: "https://www.higheredjobs.com",
      icon: <FaUniversity />,
    },
  ];

  return (
    <section className="bg-white overflow-hidden">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:px-20 sm:px-10 px-5 sm:pt-20 pt-5 pb-15">
          {/* Left */}
          <div>
            <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold mb-4">
              Scholarships • Fellowships • Academic Careers
            </p>

            <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight">
              Research &
              <span className="text-secondary">
                {" "}
                Academic Opportunities
              </span>
            </h1>

            <div className="w-28 h-1 bg-secondary rounded-full mt-1 mb-2"></div>

            <p className="text-gray-700 md:text-[17px] text-[14px] leading-6">
              Curated board of international scholarships,
              PhD positions, postdoctoral fellowships, and
              academic career opportunities for researchers at
              all career stages.
              <br />
              These platforms provide access to global
              educational funding, international mobility
              programs, faculty recruitment, graduate
              scholarships, and interdisciplinary research
              collaborations from leading universities and
              institutions worldwide.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary rounded-[30px]"></div>

            <img
              src="https://plus.unsplash.com/premium_photo-1713296256694-a3c1196094b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Academic Opportunities"
              className="relative z-10 w-full h-100 object-cover rounded-[30px]"
            />
          </div>
        </div>

        {/* Opportunity Links */}
        <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold">
              Academic Platforms
            </p>

            <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
              International
              <span className="text-secondary">
                {" "}
                Opportunity Links
              </span>
            </h1>
          </div>

          {/* Cards */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
            {opportunities.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8fbfb] rounded-xl border border-gray-300 p-8 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h1 className="text-xl font-bold text-primary mt-4 leading-snug">
                  {item.title}
                </h1>

                <p className="text-gray-600 leading-8 mt-2">
                  {item.desc}
                </p>

                {/* Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 mt-4 underline underline-offset-2 text-secondary font-semibold hover:gap-4 transition-all duration-300"
                >
                  Visit Platform
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="lg:px-20 sm:px-10 px-5 pt-20 pb-15">
          <div className="bg-primary rounded-[40px] lg:p-16 sm:p-12 p-8 text-center text-white relative overflow-hidden">
            {/* Shapes */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5"></div>

            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <p className="uppercase text-xs tracking-[4px] text-white font-semibold">
                Build Your Academic Future
              </p>

              <h1 className="md:text-3xl text-xl font-bold mt-1 leading-tight">
                Discover Scholarships & Research Careers
              </h1>

              <p className="text-white/80 leading-8.5 mt-4 md:text-[17px] text-[15px]">
                Explore international academic opportunities,
                graduate scholarships, research fellowships,
                faculty recruitment platforms, and global
                university career resources designed for
                students, scholars, and researchers worldwide.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-5 mt-12">
                <ButtonLink
                to="/contact"
                name="Explore Opportunities"
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

export default Opportunities;