import React from "react";

const IntroNav: React.FC = () => (
  <nav className="flex justify-center pt-5">
    <ul className="header__nav flex list-none space-x-5">
      <li>
        <a
          data-scroll="data-scroll"
          href="#about"
          className="no-highlight duration-350 block rounded-md px-3 py-1 text-xl font-semibold text-green-800 transition-colors hover:bg-orange-300 hover:text-white"
        >
          About
        </a>
      </li>
      <li>
        <a
          data-scroll="data-scroll"
          href="#projects"
          className="no-highlight duration-350 block rounded-md px-3 py-1 text-xl font-semibold text-green-800 transition-colors hover:bg-orange-300 hover:text-white"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          data-scroll="data-scroll"
          href="#skills"
          className="no-highlight duration-350 block rounded-md px-3 py-1 text-xl font-semibold text-green-800 transition-colors hover:bg-orange-300 hover:text-white"
        >
          Skills
        </a>
      </li>
    </ul>
  </nav>
);

export default IntroNav;
