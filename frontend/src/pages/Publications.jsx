import { useEffect, useState } from "react";
import { ButtonA } from "../components/Button";

import { FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);

  // Close Modal ESC
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setSelectedPublication(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  // Publications
  const publications = [
    {
      title:
        "Adherence among HIV-positive injection drug users undergoing methadone treatment in Taiwan",
      authors:
        "En Chao, Chia-Chun Hung, Ching-Po Lin, Yi-Chien Jacob Ku, Qurat Ul Ain, David S Metzger, Tony Szu-Hsien Lee",
      journal: "BMC Psychiatry",
      year: "2020/12",
      volume: "20 (1)",
      pages: "1-8",
      citations: "10",
      description:
        "The study investigated adherence to methadone maintenance treatment among HIV-positive injection drug users in Taiwan and identified associated clinical factors using national health datasets.",
      link: "https://link.springer.com/article/10.1186/s12888-020-02764-0",
      doi: "10.1186/s12888-020-02764-0",
    },

    {
      title:
        "Effects of Paternal Heroin Addictive Behavior on Academic Grades of their Children at Secondary School Level",
      authors: "Qurat Ul Ain, Muhammad Arshad Dahar, Qaisra Perveen",
      journal: "Research Journal of Social Sciences and Economics Review",
      year: "2021/5/23",
      volume: "2 (2)",
      pages: "196-205",
      citations: "2",
      description:
        "Research examining how paternal heroin addiction influences children's academic performance in Rawalpindi and Islamabad, Pakistan.",
      link: "https://www.ojs.rjsser.org.pk/index.php/rjsser/article/view/330",
    },

    {
      title:
        "Transforming Teaching Systems in the Era of Artificial Intelligence: An Empirically Validated Multi-Stakeholder Framework for Intelligent Teaching System Design Integrating Deep Learning, NLP, and Learning Analytics.",
      authors: "Omar J Alkhatib, Qurat-ul-Ain, SMA Abid, MKZ Bajwa, Ajab Khan",
      journal: "Annual Methodological Archive Research Review (AMARR)",
      year: "2026/3/11",
      volume: "Vol. 4 No. 3 (2026)",
      pages: "443-476",
      citations: "0",
      description:
        "A validated framework for intelligent teaching systems integrating artificial intelligence, NLP, and learning analytics.",
      link: "https://scholar.google.com/scholar?oi=bibs&cluster=13766263908327127581&btnI=1&hl=en",
    },

    {
      title:
        "Prevalence and Characteristics of School Bullying in Children and Adolescents: Evidence from a Systematic Review (2000–2024)",
      authors: "Junaid Khunsa, Muniba Rasool, Qurat-ul Ain, Amjad Khan",
      journal: "Psychology of Education and Learning Sciences",
      year: "2025/10/5",
      volume: "1 (1)",
      pages: "1-18",
      citations: "0",
      description:
        "Systematic review exploring bullying prevalence, educational stress, depression, and global adolescent mental health patterns.",
      link: "https://journals.cypedia.net/pels/article/view/105",
    },

    {
      title:
        "Prevalence of Contingent Academic Stress and Depression Among Children With and Without Substance Use Disorder Family History",
      authors: "Dr M Arshad Dahar, Qurat ul Ain",
      journal:
        "International Conference on Philosophy of Social Sciences (ICPSS) 2022",
      year: "2022/12/20",
      volume: "EDU-40",
      pages: "36-37",
      citations: "0",
      description:
        "Study examining academic stress and depression among children with substance use disorder family history.",
    },

    {
      title:
        "Positive Educational Development Through Counselling; Influence Of Prenatal Substance Misuse Use On Children Learning Abilities",
      authors: "Q Parveen Qurat Ul Ain, MA Dahar",
      journal: "Journal of Positive School Psychology",
      year: "2022",
      volume: "6 (11)",
      pages: "3303-3314",
      citations: "0",
      description:
        "Research discussing the influence of prenatal substance misuse on children’s learning abilities and educational outcomes.",
    },

    {
      title:
        "The hidden harm: Child academic performance is negatively impacted by heroin-using parents",
      authors: "M. Dahar Q. Ain, T. Lee",
      journal: "CPDD 81ST ANNUAL SCIENTIFIC MEETING PROGRAM",
      year: "2019/6/16",
      volume: "-",
      pages: "-",
      citations: "0",
      description:
        "Conference research discussing how heroin-using parents negatively affect children's academic performance.",
    },
  ];

  // Peer Review Activity
  const peerReviews = [
    "Learning Deficits and Early School Leaving: Evidence from a Longitudinal Study in India (PONE-D-25-31922R1)",

    "Post-Pandemic Mental Health Skills in South Florida Middle Schoolers",

    "Equity in Rural Physical Education Resource Allocation in China",

    "Research on Leading Medical Talent Groups in China — Academicians of the Chinese Academy of Sciences",

    "Challenges in Rural Physical Education Teacher Resource Allocation in China",

    "Parental Influence and Dietary Habits in Lebanese Students' Lunchboxes: Implications for Health and Academic Performance (Ongoing)",
  ];

  return (
    <>
      <section className="bg-gray-100 lg:px-20 sm:px-10 px-5 sm:pt-20 pt-5 pb-15 overflow-hidden">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[2px] text-secondary font-semibold text-xs mb-1">
              Scholarly Contributions • Research Publications
            </p>

            <h1 className="md:text-3xl text-xl font-bold text-primary leading-tight">
              Publications &
              <span className="text-secondary"> Academic Contributions</span>
            </h1>

            <div className="w-28 h-1 bg-secondary rounded-full mt-2 mb-2"></div>

            <p className="text-gray-700 md:text-[17px] text-[15px] leading-6">
              My publications focus on addiction science, behavioral health,
              educational psychology, school counseling, and evidence-based
              intervention frameworks.
              <br />
              Through interdisciplinary and cross-cultural research, my work
              explores how substance use disorders, mental health, trauma, and
              educational systems influence the wellbeing and academic outcomes
              of vulnerable populations.
              <br />
              My scholarly contributions include peer-reviewed journal articles,
              systematic reviews, conference presentations, and collaborative
              international research projects with researchers and institutions
              across Taiwan, Pakistan, and the United States.
            </p>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-full h-full border-2 border-secondary rounded-[30px]"></div>

            <img
              src="https://images.unsplash.com/photo-1718745015015-09cd064a263b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Publications"
              className="relative z-10 w-full h-100 object-cover rounded-[30px]"
            />
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid xl:grid-cols-2 gap-8 mt-20">
          {publications.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedPublication(item)}
              className="group relative bg-white border border-gray-300 p-4 overflow-hidden cursor-pointer hover:bg-black/2 transition-all duration-300"
            >
              {/* Number */}
              <h1 className="absolute -top-15 right-1 text-[120px] font-bold text-primary/5 select-none">
                {index + 1}
              </h1>

              {/* Top */}
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center text-xl">
                    <FaBookOpen />
                  </div>

                  <div>
                    <p className="uppercase tracking-[3px] text-secondary text-sm font-semibold">
                      Publication
                    </p>

                    <p className="text-gray-500 text-sm">{item.year}</p>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-xl font-bold text-primary leading-snug mt-2 group-hover:text-secondary transition duration-300">
                  {item.title}
                </h1>

                {/* Authors */}
                <p className="text-gray-600 mt-2 leading-8">
                  <span className="font-semibold text-primary">Authors:</span>{" "}
                  {item.authors}
                </p>

                {/* Button */}
                <button className="inline-flex items-center gap-3 text-secondary font-semibold mt-4 cursor-pointer hover:gap-4 transition-all duration-300">
                  View Publication
                  <FaExternalLinkAlt className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Peer Review */}
        <div className="mt-28">
          <div className="bg-primary/10 rounded-xl lg:p-14 sm:p-10 p-6 text-primary relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-secondary"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div>
                  <p className="uppercase tracking-[4px] sm:text-secondary text-primary font-semibold">
                    Peer Review Activity
                  </p>

                  <h1 className="md:text-4xl text-2xl font-bold mt-2">
                    Peer Reviewer – PLOS ONE | 2023–Present
                  </h1>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {peerReviews.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white backdrop-blur-md border border-black/10 rounded-xl p-6 hover:bg-black/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <p className="leading-8 text-primary/90">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPublication && (
        <div
          onClick={() => setSelectedPublication(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Top */}
            <div className="py-8 text-primary relative">
              <button
                onClick={() => setSelectedPublication(null)}
                className="absolute top-0 right-0 w-10 h-10 rounded-full border border-white/20 hover:bg-red-500 text-white bg-primary transition-all duration-300 cursor-pointer"
              >
                ✕
              </button>

              <h1 className="md:text-3xl text-2xl font-bold leading-tight mt-4">
                {selectedPublication.title}
              </h1>
            </div>

            {/* Content */}
            <div className="">
              {/* Meta */}
              <div className="mb-2">
                <h2 className="text-secondary font-semibold">Authors</h2>

                <p className="text-gray-600 leading-8">
                  {selectedPublication.authors}
                </p>
              </div>

              <div className="mb-2">
                <h2 className="text-secondary font-semibold">Journal</h2>

                <p className="text-gray-600 leading-8">
                  {selectedPublication.journal}
                </p>
              </div>

              <div className="mb-2">
                <h2 className="text-secondary font-semibold">
                  Publication Year
                </h2>

                <p className="text-gray-600">{selectedPublication.year}</p>
              </div>

              <div className="mb-2">
                <h2 className="text-secondary font-semibold">Citations</h2>

                <p className="text-gray-600">{selectedPublication.citations}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-primary">
                Research Description
              </h1>

              <p className="text-gray-600 leading-8.5 text-justify">
                {selectedPublication.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              {selectedPublication.link && (
                <a
                  href={selectedPublication.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex"
                >
                  <ButtonA
                    href={selectedPublication.link}
                    name="View Publication"
                    bgColor="bg-secondary"
                    textColor="text-white"
                    HoverClasses="hover:bg-primary hover:text-white"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Publications;
