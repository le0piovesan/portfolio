import React from "react";
import { ButtonLinkProps } from "@/interfaces/ui/ButtonLink.types";

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  secondary,
  disabled = false,
  nav,
}) => (
  <a
    href={href}
    target={nav ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className={`${
      secondary
        ? `${
            disabled ? `pointer-events-none bg-gray-400` : `bg-green-600`
          } bg-opacity-40 px-1 italic text-gray-800`
        : `px-5 text-xl font-bold text-green-800 duration-500 hover:bg-orange-300`
    } no-highlight rounded-md transition-colors hover:text-white`}
  >
    {children}
  </a>
);

export default ButtonLink;
