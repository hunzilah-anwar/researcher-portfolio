import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#7e7e7e]">
      <div className="flex justify-between items-center lg:mx-25 sm:mx-12.5 mx-5 py-4 text-sm text-white">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-syne text-[32px] font-bold">
            <span className="text-secondary">Hunzilah</span>
          </h1>
        </Link>
        <p>
          &copy; {new Date().getFullYear()} {"Hunzilah"}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
