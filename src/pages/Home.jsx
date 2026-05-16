import { useEffect, useRef, useState } from "react";
import ProfilePic from "../assets/profile-pic.jpg";
import HeroBg from "../assets/hero-bg.jpg";
import { ButtonA, ButtonLink } from "../components/Button";
import { Heading } from "../components/OtherCommon";
import ExpertiesImg from "../assets/experties-img.jpg";
import Contact from "../components/Contact";
import Resume from "../../public/Resume.pdf";

const Home = () => {
  const experience = [
    {
      role: "Director of Research Operations",
      company:
        "Institute of Academic Research and Excellence (IARE), Australia",
      duration: "May 2025 - Present",
      type: "Remote | Part-Time",
      responsibilities: [
        "Lead and oversee multidisciplinary international research programs from conceptualization to publication and dissemination.",
        "Design and deliver advanced research training workshops on methodology, statistical analysis, grant writing, and scholarly publishing.",
        "Supervise and mentor graduate and international researchers in proposal development, study design, and academic writing.",
        "Ensure research integrity, ethical compliance, and adherence to international scholarly standards.",
        "Establish global research collaborations and coordinate cross-border academic initiatives.",
        "Guide strategic planning for institutional research growth and academic excellence.",
      ],
    },
    {
      role: "Teaching Faculty",
      company: "Scoot Education, Houston, TX",
      duration: "May 2024 - March 2025",
      responsibilities: [
        "Delivered instruction in education and behavioral health related subjects integrating evidence-based teaching methodologies.",
        "Implemented alternative education strategies to manage diverse classrooms and support differentiated learning needs.",
        "Mentored students in research literacy, critical thinking, and practical life skills development.",
        "Promoted inclusive, student-centered learning environments supporting academic achievement and social-emotional growth.",
      ],
    },
    {
      role: "Psychiatric Technician Operational",
      company: "New Mexico Behavioral Health Institution, Las Vegas, USA",
      duration: "Aug 2019 - June 2021",
      responsibilities: [
        "Provided direct clinical support to individuals with acute and chronic psychiatric conditions within a state behavioral health system.",
        "Implemented behavior management and therapeutic support strategies in multidisciplinary treatment teams.",
        "Monitored patient progress, documented clinical observations, and supported crisis intervention efforts.",
        "Ensured adherence to confidentiality, patient rights, and regulatory compliance standards.",
        "Completed professional training in HIPAA compliance, First Aid, AED, and CPR.",
      ],
    },
    {
      role: "Research Engineer & Collaboration",
      company: "National Taiwan Normal University, Taipei, Taiwan",
      duration: "Dec 2018 - May 2019",
      responsibilities: [
        "Supported the design, data collection, and statistical analysis of large-scale research projects in education and behavioral sciences.",
        "Assisted in manuscript preparation, academic editing, and research dissemination activities.",
        "Contributed to proposal development and research documentation for institutional review and funding processes.",
      ],
    },
    {
      role: "Research Assistant",
      company: "Academia Sinica – Institute of Ethnology, Taipei, Taiwan",
      duration: "Dec 2018 - Apr 2019",
      responsibilities: [
        "Contributed to internationally oriented ethnological and interdisciplinary research projects “Parent–child conflict and filial piety within the contemporary East Asian family system within Taiwan’s premier national research institution.",
        "Assisted postgraduate researchers in study design, data collection, and cross-cultural research implementation.",
        "Conducted statistical analysis and supported interpretation of findings for scholarly dissemination.",
        "Contributed to manuscript preparation and academic publications, supporting rigorous methodological standards.",
        "Participated in research initiatives addressing socially and culturally significant issues with international relevance.",
        "Contributed to a cross-cultural research project examining",
        "Assisted in study design, data collection, and implementation of culturally grounded research methodologies.",
        "Conducted statistical analyses and supported interpretation of findings related to intergenerational relationships and behavioral outcomes.",
        "Contributed to manuscript preparation and scholarly publications, ensuring methodological rigor and academic integrity.",
        "Supported research addressing socially significant issues in family dynamics with implications for education and behavioral health policy.",
      ],
    },
    {
      role: "School Counselor",
      company: "Askari School & College, Islamabad, Pakistan",
      duration: "Apr 2011 - Mar 2017",
      responsibilities: [
        "Delivered comprehensive counseling services addressing academic, behavioral, and mental health needs of diverse student populations.",
        "Designed and implemented school-wide mental health, life skills, and crisis intervention workshops.",
        "Developed preventive and early-intervention strategies to support at-risk students and improve educational outcomes.",
        "Collaborated with families and faculty to create structured support systems promoting student resilience and long-term wellbeing.",
        "Led public awareness seminars promoting community-level understanding of mental health and psychosocial development.",
      ],
    },
    {
      role: "Behavior Management Counselor (BMC)",
      company:
        "AASRA Drug Addiction & Rehabilitation Center, Islamabad, Pakistan",
      duration: "Apr 2011 - Mar 2017",
      responsibilities: [
        "Conducted individualized and group behavioral interventions for individuals affected by substance use disorders.",
        "Performed structured behavioral assessments and developed evidence-informed rehabilitation plans.",
        "Provided family guidance and psychoeducation to address intergenerational impacts of addiction.",
        "Collaborated within multidisciplinary rehabilitation teams to strengthen treatment and prevention strategies.",
        "Contributed to public awareness seminars advancing community-based addiction prevention initiatives.",
      ],
    },
  ];

  const education = [
    {
      title:
        "PHD, Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi, Pakistan Research Collaboration with National Taiwan Normal University",
      duration: "02/2015 – 06/2023",
      grade: "95% overall Passing Marks (3.79/4.0.GPA)",
      description: `Graduated with 95% overall Passing Marks (3.79/4.0.GPA) which was held in collaboration with National Taiwan Normal University evaluated by External Examiners: Prof. Dr. Valentin Martínez Otero Perez (Spain): Prof. Dr. Carolyn M. Shields (USA) & Publications in Peer Reviewed Internationally Reputed Journals.
      Dissertation: "Need Assessment for the Children of Drug-Addicted Parents in Rawalpindi and Role of School Guidance and Counseling Services".
      Advisor: Prof. Dr. Muhammad Arshad Dahar, Co-Supervisor/Mentor: Prof. Tony Lee, NTNU, Taipei, Taiwan.
      External Examiners: Prof. Dr. Valentin Martinez Otero Perez (Complutense University, Spain), Prof. Dr. Carolyn M. Shields (Wayne State University, USA).`,
    },

    {
      title:
        "MPHIL, Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi, Pakistan",
      duration: "01/2012 – 06/2014",
      grade: "91.25% overall Passing Marks (3.65/4 C.GPA)",
      description: `Master of Philosophy (MPhil) in Education, graduated securing 91.25% overall Passing Marks (3.65/4 C.GPA) with Publications in Peer reviewed well reputed Journals.`,
    },

    {
      title:
        "Master of Arts (M.A.) in Education University of the Punjab, Lahore, Pakistan",
      duration: "01/2007 – 12/2009",
      grade: "62% overall marks",
      description: `Graduated securing 62% overall marks in Annual Examination. Successfully completed teaching training in the Government school Islamabad.`,
    },

    {
      title:
        "Master of Science (M.Sc.) in Economics, Allama Iqbal Open University, Islamabad, Pakistan",
      duration: "01/2008 – 2010",
      grade: "57% marks",
      description: `Department of Economics
      Specialization in project management, business research, economic & finance of education and public finance. Successfully attained overall 57% marks in the annual examination system`,
    },

    {
      title: "Bachelor of Arts, University of Punjab, Pakistan",
      duration: "08/2004 – 08/2006",
      grade: "Overall good Marks",
      description: `Secured overall good Marks in final Examination and completed the bachelor level education.`,
    },

    {
      title: "FSC-HSSC Federal Board of Intermediate & Secondary Education",
      duration: "04/2001 – 04/2003",
      grade: "535 Passing Marks",
      description: `Successfully attained overall 535 Passing Marks in Faculty of Science Final Exams to complete the College education.`,
    },

    {
      title:
        "Matriculation, Federal board of Intermediate &Secondary Education Islamabad, Pakistan",
      duration: "05/1999 – 05/2002",
      grade: "Passed overall",
      description: `Passed overall in final Examination and completed the Secondary school Certificate education.`,
    },

    {
      title:
        "Graduate Coursework in Guidance & Counseling (Clinical Mental Health), Department of Counseling, New Mexico Highlands University, Las Vegas, NM, USA",
      duration: "Fall semester 2019 – 2020",
      grade: "CGPA = 4 out of 4.0",
      description: `Successfully attained Cumulative Grade Point Average (CGPA) = 4 out of 4.0 in Faculty of Science Final Exams to complete the course work.
      ● PSYC 6010 – Data Analysis and Statistics (A), COUN 6030 – Career Development (A) | GPA: 4.0`,
    },

    {
      title:
        "Diploma in Education, Federal board of Intermediate &Secondary Education Islamabad, Pakistan",
      duration: "Duration 2004 – 2006 (12+1.1/2 Year)",
      grade: "1007 out of 1500",
      description: `Successfully attained Cumulative Grade Point Average total 1007 out of 1500 in Annual examination system, Faculty of teaching in H-9 College of Education, Islamabad, Pakistan.
      Major in Teacher Education: Curriculum & Instruction, Leadership & Planning, change implementation, HRM, Children growth & development, Educational Psychology, Instructional methods & Lesson Planning, Teaching of English, Teaching Practice (Practical)`,
    },

    {
      title:
        "Diploma in Information Technology Ministry of Education, Islamabad, Pakistan",
      duration: "1 Month",
      grade: "",
      description: `Major in MS Word, Power point, MS Excel`,
    },
  ];

  //   Skill Related Code
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    const current = sectionRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);
  const skills = [
    { name: "Teamwork", value: 100 },
    { name: "Microsoft Excel", value: 100 },
    { name: "Leadership Skills", value: 80 },
    { name: "Communication Skills", value: 100 },
    { name: "Multitasking", value: 100 },
    { name: "Dedicated Team Player", value: 100 },
    { name: "Behavioral Health Research", value: 100 },
    { name: "Addiction Epidemiology & Public Health", value: 80 },
    { name: "Microsoft Office & LMS", value: 80 },
    { name: "Public Speaking", value: 100 },
  ];

  //   Research Projects
  const researchProjects = [
    {
      title:
        "NEED ASSESSMENT FOR THE CHILDREN OF DRUG-ADDICTED PARENTS AND THE ROLE OF SCHOOL GUIDANCE AND COUNSELING SERVICES",
      advisor: "Prof. Dr. Muhammad Arshad Dahar",
      mentor: "Prof. Tony Lee (National Taiwan Normal University)",
      examiners:
        "Prof. Dr. Valentin Martínez Otero Pérez (Spain); Prof. Dr. Carolyn M. Shields (USA)",
    },

    {
      title:
        "THESIS: EFFECT OF NARCOTIC ADDICTION OF PARENTS ON SOCIAL AND ACADEMIC AFFAIRS OF THEIR CHILDREN.",
      advisor: "Prof. Dr. Muhammad Arshad Dahar",
    },
  ];

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

  //   Awards and Recognitions
  const awards = [
    {
      title:
        "Young Scientist Travel Award – CPDD 81st Annual Scientific Meeting",
      organization:
        "National Institute on Drug Abuse (NIDA) International Forum",
      location: "San Antonio, Texas, USA",
      year: "June 2019",
      description:
        '"The Hidden Harm: Child Academic Performance Negatively Impacted by Heroin Use" — Recognized for academic merit and research contribution in behavioral and public health.',
    },

    {
      title:
        "National Award for Excellence in Research Supporting Children and Families Affected by Substance Use",
      organization: "Anti-Narcotic Force (ANF)",
      description:
        "Recognized for strengthening preventive and rehabilitative strategies, supporting vulnerable populations, and advancing institutional and national frameworks aligned with the ANF mission.",
    },

    {
      title: "Best Teacher of the Year Award",
      organization: "Pakistan Askari School & College",
    },

    {
      title: "Best Speaker of the Year Award",
      organization: "Iqra University, Islamabad, Pakistan",
    },
  ];

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

  //   Expertises
  const expertise = [
    "Intergenerational impact of substance use disorders on academic achievement",
    "Addiction-informed school counseling frameworks",
    "Methadone treatment adherence research",
    "Bullying, depression, and educational performance outcomes",
    "Behavioral health integration in academic institutions",
    "Quantitative research design & statistical analysis",
  ];

  return (
    <>
      <section
        className="lg:px-20 sm:px-10 px-5 py-12"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex md:flex-nowrap flex-wrap items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold">Hey There!</h4>
            <h4 className="text-xl font-bold">I'am Dr. Qurat ul Ain</h4>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold max-w-150 text-secondary">
              International Researcher | Behavioral Health Specialist |
              Education Expert
            </h1>
            <p className="text-sm text-gray-600 max-w-102.5 mt-4">
              Ph.D. scholar with 9+ years of international experience in
              education, addiction science, behavioral health, and
              interdisciplinary research.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ButtonA
                name="Download CV"
                href={Resume}
                bgColor={"bg-primary"}
                textColor={"text-white"}
                HoverClasses={"hover:bg-white hover:text-primary"}
              />
              <ButtonLink
                to="#contact"
                name="Contact Me"
                bgColor={"bg-transparent"}
                textColor={"text-primary"}
                HoverClasses={"hover:bg-primary hover:text-white"}
              />
            </div>
          </div>
          <div className="lg:p-4 overflow-hidden md:w-fit w-full flex items-center justify-center">
            <img
              src={ProfilePic}
              alt="Profile"
              className="max-w-full md:max-w-150 md:h-fit h-120 object-cover border-2 border-secondary rounded-2xl overflow-hidden"
            />
          </div>
        </div>
      </section>
      <section
        className="lg:px-20 sm:px-10 px-5 pt-12 pb-30 bg-primary text-white"
        id="about"
      >
        <Heading name="About Me" darkColor="#325254" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="md:px-8 overflow-hidden">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-full md:h-120 h-fit object-cover rounded-2xl border-2 border-secondary"
            />
          </div>
          <div className="md:mt-0 mt-5">
            <h1 className="md:text-2xl text-xl font-bold text-secondary md:max-w-120 max-w-full">
              Internationally Recognized Interdisciplinary Researcher
            </h1>
            <p className="text-sm md:text-[16px] md:max-w-120 max-w-full text-justify">
              I am an experienced Researcher and Academic passionate about
              public health, social and behavioral research, and data-driven
              insights. I lead and mentor students and junior researchers,
              design workshops and seminars, and translate complex research
              findings into actionable knowledge. My focus is on global
              collaboration, research innovation, and fostering learning and
              impact across communities.
              <br />
              Internationally recognized interdisciplinary researcher
              specializing in education, addiction science, behavioral health,
              and school counseling frameworks. Experienced in leading global
              research collaborations across the USA, Australia, Taiwan, and
              Pakistan.
            </p>
            <ul className="md:text-[18px] text-sm mt-8 space-y-2">
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-lg md:text-xl">
                  experience:
                </span>{" "}
                <p>9+ Years,</p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-lg md:text-xl">
                  projects:
                </span>{" "}
                <p>20+ Research Projects,</p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-lg md:text-xl">
                  publications:
                </span>{" "}
                <p>15+ Publications,</p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <span className="text-secondary font-bold text-lg md:text-xl">
                  countries:
                </span>{" "}
                <p>4 Countries Worked</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" id="education">
        <div className="max-w-5xl mx-auto">
          <Heading name="Education" />

          <div className="relative border-l-2 border-black/40 pl-8 md:space-y-10 space-y-4 my-10 cursor-default">
            {education.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <span className="absolute -left-10.25 top-0 w-4 h-4 bg-white rounded-full inset-ring-2 inset-ring-white group-hover:bg-secondary transition ease-in-out duration-300 border-2 border-primary"></span>

                {/* Content */}
                <div className="-translate-y-1 group-hover:-translate-y-2 transition ease-in-out duration-300 border-b border-white/20 pb-4">
                  <div className="flex flex-col items-start">
                    <h3 className="md:text-xl text-lg font-semibold text-secondary">
                      {item.title}
                    </h3>
                    {item.grade && (
                      <p className="text-secondary font-medium md:text-[16px] text-sm">
                        {item.grade}
                      </p>
                    )}
                    <p className="text-gray-400 md:text-[16px] text-sm">
                      {item.duration}
                    </p>
                    <p className="text-primary mt-1 md:text-[16px] text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="bg-primary text-white py-16 px-4"
        id="skills"
      >
        <div className="max-w-5xl mx-auto">
          <Heading name="Skills" darkColor="#325254" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 sm:py-10">
            {skills.map((skill, index) => (
              <div key={index}>
                {/* Label */}
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm">{skill.value}%</span>
                </div>

                {/* Bar */}
                <div className="w-full bg-gray-200 rounded-full sm:h-3 h-2 overflow-hidden">
                  <div
                    className="sm:h-3 h-2 bg-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animate ? `${skill.value}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto" id="experience">
        <Heading name="Experience" />
        <div className="sm:space-y-8 space-y-4 sm:my-10 my-2">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl sm:p-6 p-3 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.role}
                  </h3>
                  <p className="text-gray-600">{item.company}</p>
                </div>

                <div className="text-sm text-gray-500 mt-2 md:mt-0">
                  <p>{item.duration}</p>
                  {item.type && (
                    <p className="text-secondary font-medium"> {item.type}</p>
                  )}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {item.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section
        className="bg-primary text-white py-20 px-4"
        id="researchprojects"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-14 text-center">
            <h2 className="sm:text-4xl text-2xl font-bold">
              Research Projects
            </h2>

            <p className="text-gray-300 mt-4 max-w-3xl mx-auto sm:text-[16px] text-sm">
              National and international research projects focused on addiction
              science, behavioral health, counseling, and educational
              interventions.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <div
                key={index}
                className="relative sm:border-l-2 border-secondary sm:pl-8 group"
              >
                {/* Dot */}
                <span className="absolute sm:block hidden -left-2.25 top-0 w-4 h-4 bg-primary rounded-full inset-ring-2 inset-ring-primary group-hover:bg-secondary transition ease-in-out duration-300 border-2 border-white"></span>

                {/* Card */}
                <div className="bg-black/30 border border-white/10 p-8 hover:bg-black/40 transition duration-300">
                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-semibold leading-relaxed text-white">
                    {project.title}
                  </h3>

                  {/* Advisor */}
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-secondary font-semibold mb-1">
                        Advisor
                      </h4>

                      <p className="text-gray-300">{project.advisor}</p>
                    </div>

                    {/* Mentor */}
                    {project.mentor && (
                      <div>
                        <h4 className="text-secondary font-semibold mb-1">
                          Co-Mentor
                        </h4>

                        <p className="text-gray-300">{project.mentor}</p>
                      </div>
                    )}

                    {/* Examiners */}
                    {project.examiners && (
                      <div>
                        <h4 className="text-secondary font-semibold mb-1">
                          External Examiners
                        </h4>

                        <p className="text-gray-300 leading-relaxed">
                          {project.examiners}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
        id="publications"
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
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-[#FAFAFA] p-8 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                {/* Number */}
                <div className="absolute top-0 right-0 text-[90px] font-bold text-black/5 leading-none select-none">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
                      {index + 1}
                    </div>

                    <span className="text-sm uppercase tracking-widest text-secondary font-semibold">
                      Research Publication
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-black leading-relaxed">
                    {item.title}
                  </h3>

                  {/* Link */}
                  {item.link && (
                    <a
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
      <section
        className="bg-[#0B0B0B] text-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
        id="researcharticles"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-16">
            <h4 className="text-secondary uppercase tracking-[4px] text-sm font-medium text-center">
              Ongoing Academic Work
            </h4>
            <Heading name="Upcoming Research Articles" darkColor="#325254" />
          </div>

          {/* Research List */}
          <div className="space-y-8">
            {upcomingResearch.map((item, index) => (
              <div key={index} className="group border-b border-white/10 pb-8">
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
          <div className="border border-black/10 rounded-xl overflow-hidden shadow-sm">
            {/* Top */}
            <div className="bg-primary text-white p-8">
              <h3 className="sm:text-3xl text-lg font-bold">
                {peerReviewerWork.title}
              </h3>

              <p className="text-white/70 mt-2 sm:text-lg text-sm">
                {peerReviewerWork.role} {"|"} {peerReviewerWork.duration}
              </p>

              <p className="text-white/80 leading-relaxed text-sm max-w-4xl">
                {peerReviewerWork.description}
              </p>
            </div>

            {/* Reviewed Topics */}
            <div className="sm:p-8 p-4 border-b border-black/10">
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
            <div className="sm:p-8 p-4">
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
      <section
        className="bg-primary text-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5 overflow-hidden"
        id="awards"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="sm:mb-16 mb-5">
            <h4 className="text-secondary text-center uppercase tracking-[4px] text-sm font-medium">
              Recognition & Excellence
            </h4>

            <Heading name="Awards & Achievements" darkColor="#325254" />
          </div>

          {/* Awards Grid */}
          <div className="grid lg:grid-cols-2 sm:gap-8 gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative border border-white/10 rounded-xl sm:p-8 p-4 bg-white/5 hover:bg-white/10 transition duration-500 overflow-hidden"
              >
                {/* Number */}
                <div className="absolute -top-8 -right-5 text-[120px] font-bold text-white/5 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-2xl font-semibold leading-snug group-hover:text-secondary transition duration-300">
                  {award.title}
                </h3>

                <div className="sm:mt-5 mt-2 space-y-2">
                  <p className="text-white/80 sm:text-lg text-sm">
                    {award.organization}
                  </p>

                  {award.location && (
                    <p className="text-white/60 sm:text-lg text-sm">
                      {award.location}
                    </p>
                  )}

                  {award.year && (
                    <p className="inline-flex px-4 py-1 rounded-full border border-secondary text-secondary text-sm sm:mt-3 mt-1">
                      {award.year}
                    </p>
                  )}
                </div>

                {award.description && (
                  <p className="text-white/70 sm:text-[16px] text-sm leading-relaxed sm:mt-8 mt-4">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
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
      <section
        className="bg-primary text-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
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
          <div className="sm:space-y-10 space-y-6">
            {seminars.map((item, index) => (
              <div key={index} className="">
                {/* Content */}
                <div className="border-b border-white/10 sm:pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                    <span className="text-secondary text-sm font-medium">
                      {item.role}
                    </span>

                    <span className="text-white/60 text-sm">{item.date}</span>
                  </div>
                  <h3 className="sm:text-xl text-lg font-semibold group-hover:text-secondary transition duration-300">
                    {item.title}
                  </h3>

                  <p className="text-white/70 sm:mt-3 mt-2 text-sm leading-relaxed">
                    {item.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="bg-white sm:py-20 py-10 lg:px-20 sm:px-10 px-5"
        id="expertise"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="sm:mb-14 mb-8 text-center">
            <h4 className="text-secondary text-center uppercase tracking-[4px] text-sm font-medium">
              Core Strengths
            </h4>

            <Heading name="Areas of Expertise" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex flex-row items-center gap-4">
                  <div className="min-w-11.25 h-11.25 rounded-full border border-secondary text-secondary flex items-center justify-center font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed group-hover:text-primary transition duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <img
                src={ExpertiesImg}
                alt="Experties"
                className="w-full h-fit rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
