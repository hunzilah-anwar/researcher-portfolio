import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "MPhil Scholar",
    role: "Research Student",
    message:
      "The guidance helped me improve my research proposal and SPSS analysis skills significantly.",
  },
  {
    name: "Graduate Student",
    role: "University Student",
    message:
      "Excellent mentorship in academic writing and publication process. Very supportive approach.",
  },
  {
    name: "Research Assistant",
    role: "Academic Collaborator",
    message:
      "The seminars on mental health and trauma were highly practical and insightful.",
  },
  {
    name: "Scholarship Applicant",
    role: "Student",
    message:
      "Helped me understand scholarship applications and SOP writing in a very clear way.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">
            What Students & Collaborators Say
          </h2>
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto relative overflow-hidden">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 text-center shadow-sm transition-all duration-700">

            <p className="text-gray-600 text-lg italic mb-6">
              "{testimonials[index].message}"
            </p>

            <h4 className="text-black font-semibold">
              {testimonials[index].name}
            </h4>

            <p className="text-gray-500 text-sm">
              {testimonials[index].role}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;