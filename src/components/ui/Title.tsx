import React from "react";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => (
  <h2 className="section-title relative mb-2 text-3xl font-bold">
    <span className="relative">
      {children}
      <span className="absolute -left-3 -right-3 bottom-0 top-5 h-2 bg-green-600 bg-opacity-40"></span>
    </span>
  </h2>
);

export default Title;
