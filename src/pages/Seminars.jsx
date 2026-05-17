import { Heading } from "../components/OtherCommon";

const Seminars = () => {
  //   Seminars and Workshops
  const seminars = [
    {
      title: "Protecting the Emotional Well-Being of School-Going Children",
      role: "Speaker and Organizer",
      organization:
        "Aasra Addiction Treatment & Rehabilitation Services with Pakistan Askari College Islamabad",
      date: "8th February 2014",
    },

    {
      title:
        "Building Resilience and Emotional Regulation Techniques in Children Affected by Parental Drug Addiction",
      role: "Trainer and Organizer",
      organization:
        "Aasra Addiction Treatment & Rehabilitation Services with Pakistan Askari College Islamabad",
      date: "12th June 2014",
    },

    {
      title: "Preventing Intergenerational Substance Use in Societies",
      role: "Organizer",
      organization:
        "Aasra Addiction Treatment & Rehabilitation Services with Pakistan Askari College Islamabad",
      date: "21st September 2015",
    },

    {
      title:
        "Support Child’s Education During Family Crisis and Violent Environment",
      role: "Organizer (Webinar)",
      organization: "Aasra Addiction Treatment & Rehabilitation Services",
      date: "2nd January 2016",
    },
  ];

  return (
    <>
      <section
        className="bg-white text-primary sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
        id="seminars"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="sm:mb-16 mb-5">
            <h4 className="text-secondary text-center uppercase tracking-[4px] text-sm font-medium">
              Community Engagement
            </h4>

            <Heading name="Seminars & Workshops" darkColor="#325254" />
          </div>

          {/* Timeline */}
          <div className="sm:space-y-12 space-y-6">
            {seminars.map((item, index) => (
              <div key={index} className="">
                {/* Content */}
                <div className="border-b border-black/10 sm:pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                    <span className="text-secondary text-sm font-medium">
                      {item.role}
                    </span>

                    <span className="text-black/60 text-sm">{item.date}</span>
                  </div>
                  <h3 className="sm:text-xl text-lg font-semibold group-hover:text-secondary transition duration-300">
                    {item.title}
                  </h3>

                  <p className="text-black/70 sm:mt-3 mt-2 text-sm leading-relaxed">
                    {item.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Seminars;
