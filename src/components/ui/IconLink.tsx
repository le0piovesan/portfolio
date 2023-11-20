import React from "react";

interface IconLinkProps {
  href: string;
  children: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ href, children }) => (
  <span className="mx-4 inline-block">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-highlight block rounded-md px-3 py-1 transition-colors duration-500 hover:bg-green-400"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          className: "h-8 w-8 text-green-800",
        }),
      )}
    </a>
  </span>
);

export default IconLink;
