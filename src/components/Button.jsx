import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const commonClasses = `
group relative overflow-hidden
flex items-center justify-center gap-2
px-4 py-2 text-[14px] font-medium
rounded border border-primary w-fit
transition-all duration-300
active:translate-x-[3px] active:translate-y-[3px]
`;

const innerLayer = `
absolute left-[-180%] top-0
w-[250px] h-[200px]
rounded-full
transition-all duration-600
group-hover:translate-x-[80%]
group-hover:-translate-y-[30%]
group-hover:rounded-none
`;

const contentLayer = `
relative z-10 flex items-center gap-2
`;

const ButtonA = ({
  href,
  name,
  bgColor,
  textColor,
  HoverClasses,
  effectColor,
  download,
}) => {
  return (
    <a
      href={href}
      download={download}
      className={`${commonClasses} ${bgColor} ${textColor} ${HoverClasses}`}
    >
      {/* Effect Layer */}
      <div
        className={innerLayer}
        style={{ backgroundColor: effectColor }}
      />

      {/* Content */}
      <div className={contentLayer}>
        {name}
        <HiArrowUpRight size={16} />
      </div>
    </a>
  );
};

const ButtonLink = ({
  to,
  name,
  bgColor,
  textColor,
  HoverClasses,
  effectColor,
}) => {
  return (
    <Link
      to={to}
      className={`${commonClasses} ${bgColor} ${textColor} ${HoverClasses}`}
    >
      {/* Effect Layer */}
      <div
        className={innerLayer}
        style={{ backgroundColor: effectColor }}
      />

      {/* Content */}
      <div className={contentLayer}>
        {name}
        <HiArrowUpRight size={16} />
      </div>
    </Link>
  );
};

export { ButtonA, ButtonLink };