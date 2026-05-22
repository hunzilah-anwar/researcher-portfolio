import { useEffect, useState } from "react";

const statsData = [
  {
    number: 9,
    suffix: "+",
    title: "Years Experience",
  },

  {
    number: 7,
    suffix: "+",
    title: "Publications",
  },

  {
    number: 4,
    suffix: "",
    title: "Degrees",
  },

  {
    number: 3,
    suffix: "",
    title: "Major Awards",
  },
];

/* Counter Component */
const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const StatsBar = () => {
  return (
    <section className="w-full bg-gray-100 border-y border-gray-300">
      <div className="max-w-7xl mx-auto lg:px-20 sm:px-10 px-5">
        <div className="grid lg:grid-cols-4 grid-cols-2">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="group relative py-8 flex flex-col items-center justify-center text-center"
            >

              {/* Counter */}
              <h1 className="relative z-10 md:text-4xl text-3xl font-bold text-primary">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />
              </h1>

              {/* Title */}
              <p className="relative z-10 text-primary/80 mt-2 md:text-[15px] text-sm font-medium leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;