const Heading = ({ name, darkColor }) => {
  return (
    <div className="relative flex justify-center items-center sm:py-6 px-4">
      {/* Stroke Text */}
      <h1
        className="
          absolute sm:block hidden
          text-4xl sm:text-5xl md:text-6xl
          font-bold 
          text-transparent 
          opacity-20
          wrap-break-word
          text-center
          w-full
          leading-tight
          pointer-events-none
        "
        style={{
          WebkitTextStroke: `1px ${darkColor || "#000"}`,
        }}
      >
        {name || "Heading"}
      </h1>

      {/* Main Text */}
      <h1
        className="
          relative 
          text-3xl sm:text-3xl md:text-4xl
          font-bold 
          text-center 
          z-10
          wrap-break-word
          leading-tight
        "
      >
        {name || "Heading"}
      </h1>
    </div>
  );
};

export { Heading };
