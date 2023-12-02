import React from "react";
import ButtonLink from "@/components/ui/ButtonLink";

const IntroNav: React.FC = () => (
  <nav className="flex justify-center pt-5">
    <div className="flex list-none space-x-5">
      <ButtonLink nav href="#about">
        About
      </ButtonLink>
      <ButtonLink nav href="#projects">
        Projects
      </ButtonLink>
      <ButtonLink nav href="#skills">
        Skills
      </ButtonLink>
    </div>
  </nav>
);

export default IntroNav;
