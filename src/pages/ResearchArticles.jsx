import { Heading } from "../components/OtherCommon";

const ResearchArticles = () => {
  //   Upcoming Publications
  const upcomingResearch = [
    {
      title:
        "No Health without Mental Health: Factors Influencing Psychological Distress in HIV Patients on Antiretroviral Therapy in Lahore, Pakistan",
      status: "In Review",
    },

    {
      title:
        "Epidemiological Insights into Community-Acquired Pneumonia Risk Factors among Children Under 5: Unveiling the Impact in the Post-Pneumococcal Vaccine Era",
      status: "Accepted for Publishing",
    },

    {
      title:
        "Risk Factors for Community-Acquired Pneumonia in Children under Five in the Post-Pneumococcal Vaccine Era in Lahore, Pakistan: a case control study",
      status: "In Review",
    },

    {
      title:
        "Behavioral and Emotional Outcomes in Children of Methamphetamine-Using Parents in Pakistan: A CBCL-Based Study During the Ice Epidemic.",
      status: "Organization Phase",
    },

    {
      title:
        "Behavioral and Emotional Outcomes in Children of Methamphetamine-Using Parents in Pakistan: A CBCL-Based Study During the Ice Epidemic.",
      status: "Ongoing",
    },

    {
      title:
        "Book author Dr Qurat: Survivors in Love; The Psychology of Partner Choice, Attachment, and Healing After Trauma",
      status: "Upcoming Book",
    },
  ];

  return (
    <>
      <section
        className="bg-white text-primary sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
        id="researcharticles"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-16">
            <h4 className="text-secondary uppercase tracking-[4px] text-sm font-medium text-center">
              Ongoing Academic Work
            </h4>
            <Heading name="Upcoming Research Articles" />
          </div>

          {/* Research List */}
          <div className="space-y-12">
            {upcomingResearch.map((item, index) => (
              <div key={index} className="group border-b border-black/10 pb-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left */}
                  <div className="flex gap-5">
                    {/* Number */}
                    <div className="sm:flex hidden min-w-15 h-15 rounded-full border border-secondary text-secondary items-center justify-center text-lg font-semibold group-hover:bg-secondary group-hover:text-white transition duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold leading-relaxed">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <span className="inline-flex items-center px-5 py-2 rounded-full border border-secondary text-secondary text-sm font-medium whitespace-nowrap">
                      {item.status}
                    </span>
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

export default ResearchArticles;
