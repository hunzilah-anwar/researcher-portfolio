const Heading = ({ name, darkColor }) => {
  return (
    <div className="relative flex items-center justify-center py-6">
      {/* Stroke Text */}
      <h1
        className="absolute text-6xl font-bold text-transparent opacity-20 cursor-default"
        style={{
          WebkitTextStroke: `1px ${darkColor || "#000"}`,
        }}
      >
        {name || "Heading"}
      </h1>

      {/* Main Text */}
      <h1 className="relative text-4xl font-bold text-center z-10 cursor-default">
        {name || "Heading"}
      </h1>
    </div>
  );
};

export { Heading };
