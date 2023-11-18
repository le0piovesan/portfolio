import React from "react";
import IntroLinks from "./IntroLinks";
import IntroNav from "./IntroNav";

const IntroDescription: React.FC = () => (
  <div>
    <h1 className="mb-2 font-mono text-3xl">Leonardo Piovesan</h1>
    <p className="mb-2 font-mono">
      Software Engineer and Computer Enthusiast, 26
    </p>
    <p className="mb-2 font-thin italic">he/him/his</p>
    <p className="mb-2 font-extralight">leopvsn@gmail.com</p>
    <IntroLinks />
    <IntroNav />
  </div>
);

export default IntroDescription;
