import { ButtonLink } from "../components/Button";

import {
  FaChartBar,
  FaFileSignature,
  FaGlobeAsia,
  FaGraduationCap,
  FaPenNib,
  FaUserFriends,
} from "react-icons/fa";

const Mentorship = () => {
  // Who Mentorship Is For
  const mentorshipAudience = [
    {
      title: "Graduate Students (M.Phil., M.Sc., Ph.D.)",
      desc: "Students seeking structured guidance in proposal writing, thesis development, methodology, and academic research.",
      icon: <FaGraduationCap />,
    },

    {
      title: "Early-Career Researchers",
      desc: "Researchers preparing their first journal publications, conference papers, and academic manuscripts.",
      icon: <FaPenNib />,
    },

    {
      title: "International Scholars",
      desc: "Scholars developing cross-cultural and interdisciplinary research designs across diverse academic systems.",
      icon: <FaGlobeAsia />,
    },

    {
      title: "Professionals Transitioning into Research",
      desc: "Professionals seeking mentorship for transitioning into academic, behavioral health, or educational research careers.",
      icon: <FaUserFriends />,
    },
  ];

  // Mentorship Services
  const mentorshipServices = [
    {
      title: "Research Design & Methodology Sessions",
      desc: "One-on-one mentoring sessions focused on research design, methodology selection, conceptual frameworks, and data collection planning.",
      icon: <FaFileSignature />,
    },

    {
      title: "Proposal Development",
      desc: "Support from topic selection to proposal submission — including literature development, conceptualization, and methodological refinement.",
      icon: <FaPenNib />,
    },

    {
      title: "Academic Writing Coaching",
      desc: "Guidance on writing theses, dissertations, journal articles, and conference papers with clarity, structure, and academic rigor.",
      icon: <FaGraduationCap />,
    },

    {
      title: "Publication Strategy",
      desc: "Support in selecting journals, preparing manuscripts, responding to reviewers, and navigating peer-review processes.",
      icon: <FaFileSignature />,
    },

    {
      title: "Statistical Analysis Guidance",
      desc: "Mentorship in SPSS, quantitative methods, data interpretation, and evidence-based research analysis.",
      icon: <FaChartBar />,
    },

    {
      title: "Academic Career Development",
      desc: "Professional mentorship for academic growth, international opportunities, research networking, and scholarly career planning.",
      icon: <FaUserFriends />,
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-start lg:px-20 sm:px-10 px-5 sm:pt-20 pt-5 pb-15">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[4px] text-secondary font-semibold mb-1 text-xs">
            Guidance • Research • Academic Growth
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight">
            Research
            <span className="text-secondary"> Mentorship</span>
          </h1>

          <div className="w-28 h-1 bg-secondary rounded-full mt-1 mb-2"></div>

          <p className="text-gray-700 md:text-[17px] text-[14px] leading-6">
            Dr. Quratulain has successfully mentored students and researchers in
            India, China, USA, and Pakistan — supporting them through proposal
            development, study design, academic writing, and publication
            preparation.
            <br />
            <br />
            Her mentorship approach combines research expertise, practical
            academic experience, and personalized guidance to help emerging
            scholars strengthen their research capacity and academic confidence.
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary rounded-[30px]"></div>

          <img
            src="https://images.unsplash.com/photo-1561346745-5db62ae43861?q=80&w=983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Research Mentorship"
            className="relative z-10 w-full h-100 object-cover rounded-[30px]"
          />
        </div>
      </div>

      {/* Who This Is For */}
      <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15">
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[4px] text-xs text-secondary font-semibold">
            Who This Is For
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
            Mentorship for
            <span className="text-secondary"> Emerging Scholars</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {mentorshipAudience.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-300 p-4 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h1 className="text-2xl font-bold text-primary mt-7 leading-snug">
                {item.title}
              </h1>

              <p className="text-gray-600 leading-8 mt-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Mentorship Includes */}
      <div className="lg:px-20 sm:px-10 px-5 pt-20 pb-15">
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold">
            Personalized Guidance
          </p>

          <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
            What Mentorship
            <span className="text-secondary"> Includes</span>
          </h1>
        </div>

        {/* Services */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
          {mentorshipServices.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-black/10 rounded-xl p-8 text-primary hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h1 className="text-2xl font-bold mt-5 leading-snug">
                {item.title}
              </h1>

              <p className="text-black/80 leading-8 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15">
        <div className="bg-white border border-gray-100 rounded-[40px] lg:p-16 sm:p-12 p-8 text-center relative overflow-hidden">
          {/* Shapes */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/5"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold">
              Start Your Research Journey
            </p>

            <h1 className="md:text-3xl text-xl font-bold text-primary mt-1 leading-tight">
              Personalized Mentorship for
              <span className="text-secondary"> Academic Success</span>
            </h1>

            <p className="text-gray-600 leading-8 mt-4 md:text-[17px] text-[15px]">
              Receive guidance in research methodology, academic writing,
              publication preparation, proposal development, statistical
              analysis, and career growth from an internationally experienced
              researcher and mentor.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <ButtonLink
                to="/contact"
                name="Request Mentorship"
                bgColor="bg-primary"
                textColor="text-white"
                HoverClasses="hover:bg-white hover:text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
