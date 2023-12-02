import React from "react";

interface ButtonLinkProps {
  href: string;
  children: string;
  secondary?: boolean;
  nav?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  secondary,
  nav,
}) => (
  <a
    href={href}
    target={nav ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className={`${secondary ? `px-0` : `rounded-md px-5 text-xl `} no-highlight 
    font-bold text-green-800 transition-colors 
    duration-500 hover:bg-orange-300 hover:text-white`}
  >
    {children}
  </a>
);

export default ButtonLink;
