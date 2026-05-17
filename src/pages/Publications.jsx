import { useState } from "react";

const Publications = () => {
  //   Publications
  const [selectedPublication, setSelectedPublication] = useState(null);
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
      description: `Aims: 
The study aims were to investigate adherence to methadone maintenance treatment (MMT) and to identify associated clinical factors in patients who inject drugs diagnosed with human immunodeficiency virus (HIV) infection in Taiwan.
Methods: 
Data were from the National Health Surveillance System on HIV and the National Drug Treatment System on MMT. HIV-positive people who inject drugs (HIVPWID) were defined as the study population. Information obtained included age, sex, education, marital status, employment, methadone dose, and date of diagnosis of HIV infection. Adherence was defined as taking methadone for the past 90, 180 and 365 days, then categorized as high (> 90%), moderate (51 to 90%), or low (<=50%) adherent respectively.
Results: 
Of 1641 HIVPWID registered in the datasets from 2007 to 2012, 961 (58.56%) had received MMT. For HIVPWID evaluated at 90 days (n = 951), 271 …`,
      link: "https://link.springer.com/article/10.1186/s12888-020-02764-0",
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
        "This study is aimed to figure out the effects of paternal heroin addiction and their impact on the academic performance of their children in Rawalpindi and Islamabad, Pakistan. The present research has adopted a qualitative design which comprised of heroin-addicted fathers and the teachers of their children who were studying at secondary school level Data were analyzed by using Pearson Correlation methods and the results indicate that the paternal heroin addiction habit is negative, non-significantly correlated to the academic performance of their children. We hypothesize that the weak negative correlation between paternal heroin-addicted habits and academic performance of children is due to their low dependence on their father than their mother. In under-developing countries like Pakistan, the father is involved in outdoor jobs or activities and does not spend more time with their children.",
      link: "https://www.ojs.rjsser.org.pk/index.php/rjsser/article/view/330",
    },

    {
      title:
        "Transforming Teaching Systems in the Era of Artificial Intelligence: An Empirically Validated Multi-Stakeholder Framework for Intelligent Teaching System Design Integrating Deep Learning, NLP, and Learning Analytics.",
      authors: "Omar J Alkhatib, Qurat-ul-Ain, SMA Abid, MKZ Bajwa, Ajab Khan",
      journal: "Annual Methodological Archive Research Review (AMARR)",
      year: "2026/3/11",
      volume: "Vol. 4 No. 3 (2026): (March 2026) Annual",
      pages: "443-476",
      citations: "0",
      description:
        "Framework for intelligent teaching systems integrating AI, NLP, and learning analytics.",
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
        "Bullying among school-aged children and adolescents remains a major public health and educational concern worldwide. This systematic review aimed to determine the global prevalence, common types, and associated factors of bullying among secondary school students to inform effective prevention strategies. A comprehensive literature search was conducted across PubMed, Scopus, Google Scholar, Web of Science, Embase, Pakmedinet, and PsycINFO for studies published between January 2000 and December 2024. Of the 1,609 articles initially identified, 160 met the inclusion criteria, and 52 studies were ultimately included in the final analysis. Data were extracted on study design, geographic distribution, prevalence rates, forms of bullying, and identified factors. The findings revealed that bullying is highly prevalent worldwide, with particularly high rates reported in lower-middle-income and high-income countries and among students attending public secondary schools. Verbal bullying emerged as the most common form across regions, followed by physical and relational or psychological bullying, while cyber-bullying and sexual bullying were reported less frequently. The review highlights significant regional and socio-economic variations in bullying patterns and emphasizes the persistent nature of this problem. Overall, bullying remains a widespread issue affecting the well-being of children and adolescents globally, underscoring the need for coordinated, culturally sensitive, and evidence-based prevention efforts involving schools, families, healthcare providers, and policymakers to mitigate its impact and promote safer school …",
      link: "https://journals.cypedia.net/pels/article/view/105",
    },

    {
      title:
        "Prevalence of Contingent Academic Stress and Depression Among Children With and Without Substance Use Disorder Family History",
      authors: "Dr M Arshad Dahar, Qurat ul Ain",
      journal:
        "International Conference on Philosophy of Social Sciences(ICPSS)2022",
      year: "2022/12/20",
      volume: "EDU-40",
      pages: "36-37",
      citations: "0",
      description:
        "Study on academic stress and depression among children with substance use disorder family history.",
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
        "Research on prenatal substance misuse and its influence on children's learning abilities.",
    },

    {
      title:
        "The hidden harm: Child academic performance is negatively impacted by heroin-using parents",
      authors: "M. Dahar Q. Ain, T. Lee",
      journal: "CCPDD 81ST ANNUAL SCIENTIFIC MEETING PROGRAM",
      year: "2019/6/16",
      volume: "-",
      pages: "-",
      citations: "0",
      description:
        "Conference research discussing academic performance impact on children of heroin-using parents.",
    },
  ];

  return (
    <>
      <section
        className="bg-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="sm:text-4xl text-2xl font-bold text-black">
              Publications & Scholarly Contributions
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Research publications focused on behavioral health, addiction
              science, counseling, educational psychology, and public health
              interventions.
            </p>
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedPublication(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-[#FAFAFA] sm:p-8 p-4 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                {/* Number */}
                <div className="absolute top-0 right-0 text-[90px] font-bold text-black/5 leading-none select-none">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="sm:w-12 w-10 sm:h-12 h-10 rounded-full bg-primary text-white flex items-center justify-center sm:text-lg text-[14px] font-semibold">
                      {index + 1}
                    </div>

                    <span className="text-sm uppercase tracking-widest text-secondary font-semibold">
                      Research Publication
                    </span>
                  </div>

                  <h3 className="sm:text-xl text-lg font-semibold text-black leading-relaxed">
                    {item.title}
                  </h3>

                  {/* Link */}
                  {item.link && (
                    <a
                    onClick={(e) => e.stopPropagation()}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-secondary font-medium hover:underline"
                    >
                      View Publication →
                    </a>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Popup Modal */}
      {selectedPublication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPublication(null)}
              className="absolute top-2 right-2 px-2.5 bg-white hover:bg-primary rounded-full border border-primary cursor-pointer text-2xl font-bold text-primary hover:text-white"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-black leading-relaxed">
              {selectedPublication.title}
            </h2>

            {/* Meta */}
            <div className="mt-6 space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-black">Authors:</span>{" "}
                {selectedPublication.authors}
              </p>

              <p>
                <span className="font-semibold text-black">Journal:</span>{" "}
                {selectedPublication.journal}
              </p>

              <p>
                <span className="font-semibold text-black">Year:</span>{" "}
                {selectedPublication.year}
              </p>

              <p>
                <span className="font-semibold text-black">Volume:</span>{" "}
                {selectedPublication.volume}
              </p>

              <p>
                <span className="font-semibold text-black">Pages:</span>{" "}
                {selectedPublication.pages}
              </p>

              <p>
                <span className="font-semibold text-black">Citations:</span>{" "}
                {selectedPublication.citations}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="font-semibold text-black mb-2">
                Research Description
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {selectedPublication.description}
              </p>
            </div>

            {/* Link */}
            {selectedPublication?.link && (
              <a
                href={selectedPublication.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center cursor-pointer gap-2 mt-6 text-secondary font-medium hover:underline"
              >
                View Publication →
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Publications;
