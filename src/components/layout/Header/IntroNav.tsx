import React from "react";
import ButtonLink from "@/components/ui/ButtonLink";

const IntroNav: React.FC = () => (
  <nav className="flex justify-center pt-5">
    <div className="flex list-none space-x-5">
      <ButtonLink href="#about">About</ButtonLink>
      <ButtonLink href="#projects">Projects</ButtonLink>
      <ButtonLink href="#skills">Skills</ButtonLink>
    </div>
  </nav>
);

export default IntroNav;
