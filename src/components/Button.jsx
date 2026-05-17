import { Link } from "react-router-dom";
const ButtonA = ({ href, name, bgColor, textColor, HoverClasses }) => {
  return (
    <a
      href={href}
      download
      className={`md:px-8 md:py-4 px-4 py-2 md:text-[16px] text-[14px] ${bgColor} ${textColor} rounded-full ${HoverClasses} border border-primary inline-block transition ease-in-out duration-300`}
    >
      {name}
    </a>
  );
};
const ButtonLink = ({ to, name, bgColor, textColor, HoverClasses }) => {
  return (
    <Link
    to={to}
      className={`md:px-8 md:py-4 px-4 py-2 md:text-[16px] text-[14px] ${bgColor} ${textColor} rounded-full ${HoverClasses} border border-primary inline-block transition ease-in-out duration-300`}
    >
      {name}
    </Link>
  );
};

export { ButtonA, ButtonLink };
