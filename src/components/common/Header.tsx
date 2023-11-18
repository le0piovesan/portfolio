import React from "react";
import IntroDescription from "../layout/Header/IntroDescription";
import Avatar from "../layout/Header/Avatar";

const Header: React.FC = () => (
  <header className="container mx-auto flex flex-col items-center justify-center py-8 text-center md:flex-row">
    <Avatar />
    <IntroDescription />
  </header>
);

export default Header;
