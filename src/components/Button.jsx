import React from "react";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
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
  const { scrollToSection } = useSmoothScroll();
  return (
    <Link
      onClick={() => scrollToSection(to.replace("#", ""))}
      className={`md:px-8 md:py-4 px-4 py-2 md:text-[16px] text-[14px] ${bgColor} ${textColor} rounded-full ${HoverClasses} border border-primary inline-block transition ease-in-out duration-300`}
    >
      {name}
    </Link>
  );
};

export { ButtonA, ButtonLink };
