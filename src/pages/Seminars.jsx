import { Heading } from "../components/OtherCommon";
import { ButtonA } from "../components/Button";

const Seminars = () => {
  // Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "NIH Events",
      organization: "National Institutes of Health",
      desc: "Free scientific events, symposia, and research updates from one of the world’s leading biomedical research organizations.",
      link: "https://www.nih.gov/events",
    },

    {
      id: 2,
      title: "CDC Training and Continuing Education",
      organization: "Centers for Disease Control",
      desc: "Free public health training programs, webinars, continuing education resources, and global health updates.",
      link: "https://www.cdc.gov/training",
    },

    {
      id: 3,
      title: "SAMHSA Webinars",
      organization: "Substance Abuse and Mental Health Services Administration",
      desc: "Behavioral health webinars focused on addiction science, mental health, trauma-informed care, and recovery systems.",
      link: "https://www.samhsa.gov",
    },

    {
      id: 4,
      title: "WHO Events",
      organization: "World Health Organization",
      desc: "Global health conferences, technical briefings, and international public health events from WHO.",
      link: "https://www.who.int/news-room/events",
    },

    {
      id: 5,
      title: "APA Events",
      organization: "American Psychological Association",
      desc: "Professional psychology conventions, workshops, seminars, and continuing development opportunities.",
      link: "https://www.apa.org/convention",
    },

    {
      id: 6,
      title: "UNICEF Events",
      organization: "United Nations Children's Fund",
      desc: "Conferences, webinars, and educational events focused on children's rights, wellbeing, and development.",
      link: "https://www.unicef.org",
    },
  ];


  return (
    <section className="lg:px-20 sm:px-10 px-5 py-20 bg-[#f8fbfb] overflow-hidden">
      <div className="max-w-375 mx-auto">
        {/* Heading */}
        <Heading name="Free Seminars" darkColor="#325254" />

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[2px] text-secondary text-sm font-semibold mb-4">
              Free Learning • Global Research • Professional Development
            </p>

            <h1 className="text-3xl font-bold text-primary leading-tight">
              Free Seminars &<span className="text-secondary"> Webinars</span>
            </h1>

            <div className="w-28 h-1 bg-secondary rounded-full mt-2 mb-4"></div>

            <p className="text-gray-700 md:text-[17px] text-[15px] leading-8.5 text-justify">
              I am pleased to offer a series of free educational seminars on
              mental health, psychology, research, and personal development.
              These sessions are designed to help students gain practical
              knowledge, improve emotional well-being, and enhance academic and
              professional skills.
              <br />
              <br />
              Students interested in attending may register for any topic of
              interest. Certificates of participation may be provided.
            </p>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-full h-full border-2 border-secondary rounded-[30px]"></div>

            <img
              src="https://plus.unsplash.com/premium_photo-1683121640863-d68b839a9270?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Seminars"
              className="relative z-10 w-full h-100 object-cover rounded-[30px] shadow-2xl"
            />
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="my-28">
          <div className="text-center max-w-4xl mx-auto">
            <p className="uppercase tracking-[4px] text-secondary font-semibold">
              Official Links
            </p>

            <h1 className="md:text-4xl text-3xl font-bold text-primary mt-4">
              Upcoming Events &
              <span className="text-secondary"> Global Organizations</span>
            </h1>
          </div>

          {/* Cards */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-7 mt-16">
            {upcomingEvents.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[30px] border border-gray-300 p-8 hover:bg-black/5 transition-all duration-300 group"
              >
                <h1 className="text-2xl font-bold text-primary leading-snug">
                  {item.title}
                </h1>

                <p className="text-secondary font-semibold mt-4 leading-7">
                  {item.organization}
                </p>

                <p className="text-gray-600 leading-8 mt-5">{item.desc}</p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href={item.link} className="text-secondary underline">
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center text-center gap-4 my-8">

            <div>
              <p className="uppercase tracking-[4px] text-secondary font-semibold">
                Join us to explore
              </p>

              <h1 className="text-3xl font-bold text-primary mt-2">
                Free Seminar Series for Students
              </h1>
            </div>
          </div>

          {/* Seminar Topics */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "How to Write a Research Proposal",
              "Writing a Strong Literature Review",
              "SPSS and Statistical Analysis for Beginners",
              "Questionnaire Design and Validation",
              "Structural Equation Modeling (SEM)",
              "Writing and Publishing Journal Articles",
              "APA 7 Referencing",
              "Responding to Reviewer Comments",
              "Building an Academic CV and Personal Statement",
              "Research Ethics",
              "School-Based Intervention Research",
              "How Childhood Trauma Shapes Adult Relationships",
              "Attachment Styles and Relationship Patterns",
              "Breaking Trauma Bonds",
              "The Impact of Parental Substance Use on Children",
              "Supporting Children Affected by Addiction",
              "Managing Anxiety and Overthinking",
              "Stress Management for Students",
              "Publishing Research in International Journals",
              "Scholarship Opportunities for Graduate Students",
              "Trauma-Informed Approaches in Education",
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 p-4 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-semibold text-sm transition-all duration-300">
                    {index + 1}
                  </div>

                  <p className="text-gray-700 leading-7 font-medium">{topic}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <ButtonA
              href="#"
              name="Register Now"
              bgColor="bg-primary"
              textColor="text-white"
              HoverClasses="hover:bg-transparent hover:text-primary"
            />

            <ButtonA
              href="#"
              name="Join Webinar"
              bgColor="bg-secondary"
              textColor="text-white"
              HoverClasses="hover:bg-primary hover:text-white"
            />

            <ButtonA
              href="#"
              name="View Schedule"
              bgColor="bg-transparent"
              textColor="text-primary"
              HoverClasses="hover:bg-primary hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seminars;
