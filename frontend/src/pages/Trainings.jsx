import { Heading } from "../components/OtherCommon";

const Trainings = () => {
  //   Trainings and Certifications
  const trainings = [
    {
      title: "Human Research Protection Training",
      organization: "Yale School of Medicine & NTNU",
      year: "2019",
    },

    {
      title: "Life Skills Training for Pre-Service Teachers",
      organization: "NTU",
      year: "2019",
    },

    {
      title: "Drug Control Strategies for Children Symposium",
      organization: "NTNU",
      year: "2017",
    },

    {
      title: "CompTIA+ (Networking) Certification",
      organization: "Houston Community College",
      year: "2023",
    },

    {
      title: "First Aid",
      organization: "NM Behavioral Health Institute",
      year: "2020",
    },

    {
      title: "CPR & AED",
      organization: "NM Behavioral Health Institute",
      year: "2020",
    },

    {
      title: "FY20 HIPAA Compliance",
      organization: "NM Behavioral Health Institute",
      year: "2020",
    },

    {
      title: "Psychiatric Technician Training Certificate",
      organization: "NM Behavioral Health Institute",
      year: "2020",
    },

    {
      title: "Suicide Prevention Certificate",
      organization: "",
      year: "2020",
    },

    {
      title: "Passenger Assistant & Transportation",
    },

    {
      title: "Teacher Training Skills and Lesson Planning",
      organization:
        "Pakistan Askari School & College Islamabad, Pakistan (PASCI)",
      year: "2012",
    },

    {
      title: "Curriculum Development and Implementation of Change",
      organization: "PASCI",
      year: "2011",
    },

    {
      title:
        "Assessing the Drug Use Withdrawal Symptoms and Management Techniques",
      organization: "AASRA",
      year: "2012",
    },

    {
      title: "Early Childhood & Student Support for Elementary School",
      organization: "PASCI",
      year: "2014",
    },

    {
      title:
        "Teaching Methodology and Use of Audio-visual Aids in the Classroom",
      organization: "College Of Education (H-9)",
      year: "2008",
    },

    {
      title: "Effective Teaching at Primary Level",
      organization: "Oxford University Press",
      year: "2016",
    },

    {
      title: "Assessment and Evaluation in Education",
      organization: "PASCI",
      year: "2015",
    },

    {
      title: "Teaching Of English - Nicholas Horsburgh",
      organization: "Oxford University Press",
      year: "2012",
    },

    {
      title: "Teaching Practice Completion for Diploma in Education",
      organization: "F.G. Model School for Girls",
      year: "2006",
    },

    {
      title:
        "Sleep and Addiction: Fundamentals for Behavioral Healthcare Providers",
      year: "March 3, 2026",
    },

    {
      title: "How AI Is Rapidly Altering Life, Illness, and Mental Healthcare",
      year: "March 13, 2026",
    },

    {
      title:
        "Ask the Experts: When Treatment Gets Tough: Trauma in Complex Eating Disorder Cases",
      year: "March 18, 2026",
    },
  ];

  return (
    <>
      <section
        className="bg-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
        id="training"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="sm:mb-16 mb-5">
            <h4 className="text-secondary text-center uppercase tracking-[4px] text-sm font-medium">
              Professional Development
            </h4>

            <Heading name="Trainings & Certifications" />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 sm:gap-6 gap-2">
            {trainings.map((item, index) => (
              <div
                key={index}
                className="group relative border border-black/10 rounded-xl px-4 py-2 hover:border-secondary hover:-translate-y-1 transition duration-300 bg-[#fafafa] cursor-default"
              >
                {/* Year */}
                {item.year && (
                  <div className="text-sm font-medium">{item.year}</div>
                )}

                {/* Title */}
                <h3 className="sm:text-xl text-[16px] font-semibold text-primary leading-relaxed group-hover:text-secondary transition duration-300">
                  {item.title}
                </h3>

                {/* Organization */}
                {item.organization && (
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.organization}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trainings;
