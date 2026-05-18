import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Brain,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Wallet,
  Users,
  Star,
  PlayCircle,
  CheckCircle2,
  BookOpen,
  Award,
  Globe,
  X,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    type: "icon",
    title: "Full Stack Web Development",
    category: "Development",
    fee: "$499",
    duration: "6 Months",
    students: "2,500+",
    rating: "4.9",
    lessons: "120+",
    projects: "25+",
    language: "English & Urdu",
    certificate: "Included",
    icon: <Code2 size={42} />,
    short:
      "Learn React, Next.js, Node.js, MongoDB, APIs, authentication systems and modern production-ready development workflows.",
    tags: ["React", "Next.js", "MongoDB", "Node.js"],
    details:
      "This complete Full Stack Web Development course teaches modern frontend and backend technologies used in real-world applications. Students learn React, Next.js, backend APIs, MongoDB, authentication systems, dashboards, deployment, responsive design, animations, and scalable architecture systems.",
    highlights: [
      "25+ Real Projects",
      "Frontend + Backend",
      "Authentication Systems",
      "Deployment & Hosting",
    ],
  },

  {
    id: 2,
    type: "image",
    title: "UI / UX & Graphic Design",
    category: "Creative Design",
    fee: "$349",
    duration: "4 Months",
    students: "1,800+",
    rating: "4.8",
    lessons: "90+",
    projects: "18+",
    language: "English",
    certificate: "Included",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop",
    short:
      "Master UI systems, branding, Figma workflows, design systems, typography, and modern creative design principles.",
    tags: ["Figma", "Branding", "UI Design", "Photoshop"],
    details:
      "This course provides professional training in UI/UX and graphic design including wireframing, user research, mobile interfaces, branding systems, social media creatives, modern design trends, and portfolio-focused project development.",
    highlights: [
      "Professional Figma Workflow",
      "Branding Systems",
      "Real Client Projects",
      "Portfolio Case Studies",
    ],
  },

  {
    id: 3,
    type: "icon",
    title: "AI & Automation Masterclass",
    category: "Artificial Intelligence",
    fee: "$599",
    duration: "5 Months",
    students: "1,200+",
    rating: "5.0",
    lessons: "110+",
    projects: "20+",
    language: "English",
    certificate: "Advanced Certification",
    icon: <Brain size={42} />,
    short:
      "Learn AI workflows, automation systems, AI tools, prompt engineering, and productivity-focused AI business systems.",
    tags: ["AI", "Automation", "ChatGPT", "Workflows"],
    details:
      "Students learn practical AI systems including prompt engineering, AI workflows, automation pipelines, AI business tools, content generation systems, productivity optimization, and scalable AI integrations.",
    highlights: [
      "Modern AI Systems",
      "Automation Pipelines",
      "AI Agents",
      "Business Integrations",
    ],
  },
];

export default function CoursesSection() {
  const sliderRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // AUTO SLIDE
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      if (!paused) {
        slider.scrollBy({
          left: 360,
          behavior: "smooth",
        });

        // RESET
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 50) {
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [paused]);

  // MANUAL SLIDE
  const slide = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  // BODY SCROLL LOCK
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCourse]);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-5 py-2 text-sm font-semibold text-black">
              <Sparkles size={16} />
              Courses
            </div>

            <h2 className="text-xl font-black leading-tight text-black sm:text3xl lg:text-5xl">
              Explore Modern Courses
            </h2>

            <p className="mt-6 text-base leading-[1.9] text-gray-600 sm:text-lg">
              Industry-focused learning experiences designed with practical
              projects, certifications, modern workflows, and real-world skills.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => slide("left")}
              className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => slide("right")}
              className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {[...courses, ...courses].map((course, index) => (
            <div
              key={`${course.id}-${index}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onClick={() => setSelectedCourse(course)}
              className="group relative flex w-87.5 min-w-87.5 cursor-pointer flex-col overflow-hidden rounded-4xl border border-black/10 bg-white sm:w-100 sm:min-w-100"
            >
              {/* IMAGE CARD */}
              {course.type === "image" ? (
                <>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[2px] text-white backdrop-blur-xl">
                        {course.category}
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-2xl font-black leading-tight text-white">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-[1.9] text-gray-600">
                      {course.short}
                    </p>

                    {/* TAGS */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {course.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-black/10 bg-black/3 px-4 py-2 text-xs font-semibold text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star size={16} className="fill-black text-black" />

                        <span className="font-bold">{course.rating}</span>
                      </div>

                      <button className="flex cursor-pointer items-center gap-2 text-sm font-black text-black transition-all duration-300 group-hover:gap-4">
                        Details
                        <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* ICON CARD */}
                  <div className="relative flex h-full flex-col overflow-hidden bg-linear-to-br from-black via-[#111] to-[#1a1a1a] p-6 text-white">
                    {/* Glow */}
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

                    {/* CATEGORY */}
                    <div className="mb-8 flex items-center justify-between">
                      <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[2px] text-white backdrop-blur-xl">
                        {course.category}
                      </div>

                      <PlayCircle size={22} />
                    </div>

                    {/* ICON */}
                    <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-[28px] bg-white text-black shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {course.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-black leading-tight">
                      {course.title}
                    </h3>

                    <p className="mt-5 text-sm leading-[1.9] text-gray-300">
                      {course.short}
                    </p>

                    {/* TAGS */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {course.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* FOOTER */}
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star size={16} className="fill-white text-white" />

                        <span className="font-bold">{course.rating}</span>
                      </div>

                      <button className="flex cursor-pointer items-center gap-2 text-sm font-black text-white transition-all duration-300 group-hover:gap-4">
                        Details
                        <ArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-9999 overflow-y-auto bg-black/60 p-3 backdrop-blur-sm">
          {/* CENTER WRAPPER */}
          <div className="flex min-h-full items-center justify-center py-5">
            {/* MODAL */}
            <div className="relative w-full max-w-4xl bg-white shadow-2xl">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all duration-200 hover:bg-black hover:text-white"
              >
                <X size={18} />
              </button>

              {/* CONTENT SCROLL */}
              <div className="max-h-[90vh] overflow-y-auto">
                {/* TOP */}
                <div
                  className={`relative overflow-hidden ${
                    selectedCourse.type === "image"
                      ? "h-52 sm:h-64"
                      : "bg-linear-to-r from-black via-[#111] to-[#1a1a1a]"
                  }`}
                >
                  {/* IMAGE */}
                  {selectedCourse.type === "image" ? (
                    <>
                      <img
                        src={selectedCourse.image}
                        alt={selectedCourse.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/55" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-linear-to-r from-black via-[#111] to-[#1a1a1a]" />
                  )}

                  {/* TOP CONTENT */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-7">
                    {/* ICON */}
                    {selectedCourse.type === "icon" && (
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black shadow-lg">
                        {selectedCourse.icon}
                      </div>
                    )}

                    {/* CATEGORY */}
                    <div className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[1.5px] text-white backdrop-blur-md sm:text-xs">
                      {selectedCourse.category}
                    </div>

                    {/* TITLE */}
                    <h2 className="max-w-2xl text-2xl font-black leading-tight text-white sm:text-4xl">
                      {selectedCourse.title}
                    </h2>
                  </div>
                </div>

                {/* BODY */}
                <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_320px]">
                  {/* LEFT */}
                  <div>
                    <p className="text-sm leading-7 text-gray-600 sm:text-[15px]">
                      {selectedCourse.details}
                    </p>

                    {/* HIGHLIGHTS */}
                    <div className="mt-8">
                      <h3 className="mb-4 text-xl font-black text-black">
                        Course Highlights
                      </h3>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {selectedCourse.highlights.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 rounded-2xl border border-black/10 bg-gray-50 p-4"
                          >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                              <CheckCircle2 size={15} />
                            </div>

                            <p className="text-sm font-medium leading-6 text-black">
                              {item}
                            </p>
                          </div>
                        ))}
                        {/* BUTTON */}
                        <Link
                          to={"/contact"}
                          className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-white border border-primary hover:text-primary"
                        >
                          Enroll Now
                          <ArrowUpRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="space-y-3">
                    {[
                      {
                        icon: <Wallet size={18} />,
                        title: "Fee",
                        value: selectedCourse.fee,
                      },
                      {
                        icon: <Clock3 size={18} />,
                        title: "Duration",
                        value: selectedCourse.duration,
                      },
                      {
                        icon: <Users size={18} />,
                        title: "Students",
                        value: selectedCourse.students,
                      },
                      {
                        icon: <BookOpen size={18} />,
                        title: "Lessons",
                        value: selectedCourse.lessons,
                      },
                      {
                        icon: <Award size={18} />,
                        title: "Certificate",
                        value: selectedCourse.certificate,
                      },
                      {
                        icon: <Globe size={18} />,
                        title: "Language",
                        value: selectedCourse.language,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-2xl border border-black/10 bg-gray-50 p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                          {item.icon}
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-black">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm text-gray-600">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCROLLBAR */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
