import { Heading } from "../components/OtherCommon";

const PeerReviewer = () => {
  //   Peer Reviewer Work
  const peerReviewerWork = {
    title: "STUDENTS-SUPERVISED SUCCESSFULLY IN INDIA, CHINA, USA, Pakistan",
    role: "Peer Reviewer – PLOS ONE",
    duration: "2023 – Present",

    description:
      "Reviewed manuscripts in behavioral science, public health, and education for international scholarly publications.",

    reviewedTopics: [
      "Post-pandemic mental health in middle school students Florida (USA)",
      "Learning deficits and early school leaving (India)",
      "Post-pandemic mental health in middle school students Florida (USA)",
      "Equity in rural physical education resource allocation (China)",
    ],

    reviewedArticles: [
      "PONE-D-25-31922R1: Learning deficits and early school leaving: Evidence from a longitudinal study in India.",

      "Post-Pandemic Mental Health Skills in South Florida Middle Schoolers",

      "Equity in Rural Physical Education Resource Allocation in China",

      "Research on the Characteristics and Implications of Leading Medical Talent Groups in China: A Case Study of Academicians of the Chinese Academy of Sciences and the Chinese Academy of Engineering in Biomedical Sciences",

      "Challenges in achieving common prosperity: evaluating and mitigating the vulnerability of rural physical education teacher resource allocation in China.",

      "Parental influence and dietary habits in Lebanese students' lunchboxes: implications for health and academic performance (On going)",
    ],
  };

  return (
    <>
      <section
        className="bg-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
        id="reviewer"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-16">
            <h4 className="text-secondary text-center uppercase tracking-[4px] text-sm font-semibold">
              Academic Contributions
            </h4>

            <Heading name="Peer Reviewer Work" />
          </div>

          {/* Main Card */}
          <div className="">
            {/* Top */}
            <div className="bg-white text-primary border-b border-black/10">
              <h3 className="sm:text-3xl text-lg font-bold">
                {peerReviewerWork.title}
              </h3>

              <p className="text-black/70 mt-2 sm:text-lg text-sm">
                {peerReviewerWork.role} {"|"} {peerReviewerWork.duration}
              </p>

              <p className="text-black/80 leading-relaxed text-sm max-w-4xl">
                {peerReviewerWork.description}
              </p>
            </div>

            {/* Reviewed Topics */}
            <div className="sm:py-8 py-4 border-b border-black/10">
              <h4 className="sm:text-2xl text-lg font-semibold text-primary sm:mb-8 mb-4">
                Reviewed Research Areas
              </h4>

              <div className="grid md:grid-cols-2 gap-5">
                {peerReviewerWork.reviewedTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="group bg-[#F8F8F8] p-5 border border-black/5 hover:border-secondary transition duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="min-w-10.5 h-10.5 rounded-full bg-secondary text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>

                      <p className="text-gray-700 leading-relaxed group-hover:text-primary transition duration-300">
                        {topic}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviewed Articles */}
            <div className="sm:py-8 py-4">
              <h4 className="sm:text-2xl text-lg font-semibold text-primary mb-8">
                Reviewed Articles
              </h4>

              <div className="space-y-5">
                {peerReviewerWork.reviewedArticles.map((article, index) => (
                  <div key={index} className="flex items-start gap-5 sm:px-4">
                    <div className="min-w-11.25 h-11.25 rounded-full border border-secondary text-secondary flex items-center justify-center font-semibold mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="text-gray-700 leading-relaxed">{article}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PeerReviewer;
