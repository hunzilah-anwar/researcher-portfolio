import { ButtonLink } from "../components/Button";

import {
  FaBookOpen,
  FaFileAlt,
  FaMicrophone,
  FaSearchDollar,
  FaUniversity,
} from "react-icons/fa";

const AcademicConsulting = () => {
  const consultingServices = [
    {
      icon: <FaFileAlt />,
      title: "Statement of Purpose (SOP) Review",
      desc:
        "Professional review, editing, and strengthening of your SOP or personal statement for graduate school, PhD, or scholarship applications.",
    },

    {
      icon: <FaUniversity />,
      title: "University Admissions Support",
      desc:
        "Guidance on selecting the right programs, understanding admission requirements, and crafting competitive applications for universities in the USA, Australia, UK, and Europe.",
    },

    {
      icon: <FaSearchDollar />,
      title: "Scholarship Guidance",
      desc:
        "Step-by-step support in identifying, applying for, and securing merit-based international scholarships and funded research positions.",
    },

    {
      icon: <FaBookOpen />,
      title: "Research Proposal Review",
      desc:
        "Expert feedback on research proposals for graduate programs, funding bodies, and institutional review boards — ensuring methodological rigor and scholarly clarity.",
    },

    {
      icon: <FaMicrophone />,
      title: "Interview Preparation",
      desc:
        "Mock interview coaching for university admissions, scholarship panels, and academic job interviews.",
    },
  ];

  return (
    <section className="bg-white overflow-hidden">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:px-20 sm:px-10 px-5 sm:pt-20 pt-5 pb-15">
          {/* Left */}
          <div>
            <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold mb-1">
              Mentorship • Guidance • Academic Success
            </p>

            <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight">
              Academic
              <span className="text-secondary">
                {" "}
                Consulting
              </span>
            </h1>

            <div className="w-28 h-1 bg-secondary rounded-full mt-1 mb-2"></div>

            <p className="text-gray-700 md:text-[16px] text-[14px] leading-6">
              Dr. Quratulain offers personalized academic
              consulting services for students and researchers
              applying to international universities,
              scholarship programs, and research positions.
              <br />
              With experience across four countries and
              multiple academic systems, she provides expert
              guidance at every stage of the academic journey
              — from graduate admissions and scholarship
              applications to research proposal development and
              interview preparation.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-full h-full border-2 border-secondary rounded-[30px]"></div>

            <img
              src="https://plus.unsplash.com/premium_photo-1661301085199-6a6ffc75a06b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Academic Consulting"
              className="relative z-10 w-full h-100 object-cover rounded-[30px]"
            />
          </div>
        </div>

        {/* Consulting Services */}
        <div className="bg-gray-100 lg:px-20 sm:px-10 px-5 pt-20 pb-15">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase text-xs tracking-[4px] text-secondary font-semibold">
              Personalized Support
            </p>

            <h1 className="md:text-3xl text-xl font-bold text-primary mt-1">
              Academic Consulting
              <span className="text-secondary">
                {" "}
                Services
              </span>
            </h1>
          </div>

          {/* Cards */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
            {consultingServices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-300 p-4 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h1 className="text-xl font-bold text-primary mt-7 leading-snug">
                  {item.title}
                </h1>

                <p className="text-gray-600 leading-8 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="lg:px-20 sm:px-10 px-5 pt-20 pb-15">
          <div className="bg-primary/10 rounded-xl lg:p-16 sm:p-12 p-8 text-center text-primary relative overflow-hidden">
            {/* Shapes */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-black/5"></div>

            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-black/5"></div>

            <div className="relative z-10 max-w-5xl mx-auto">
              <p className="uppercase tracking-[4px] text-secondary font-semibold">
                Start Your Academic Journey
              </p>

              <h1 className="md:text-5xl text-3xl font-bold mt-5 leading-tight">
                Personalized Guidance for
                <span className="text-secondary">
                  {" "}
                  Students & Researchers
                </span>
              </h1>

              <p className="text-black/80 leading-8.5 mt-8 md:text-[17px] text-[15px]">
                Receive expert academic consulting support for
                graduate admissions, scholarship applications,
                SOP writing, research proposals, interview
                preparation, and international academic career
                development.
              </p>

              {/* Buttons */}
              <div className="flex justify-center mt-12">
                <ButtonLink
                  to="/contact"
                  name="Contact Me"
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

export default AcademicConsulting;