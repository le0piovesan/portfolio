import React from "react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

const IntroLinks: React.FC = () => (
  <ul className="header_links pt-10 text-center">
    <li className="mx-5 inline-block">
      <a
        href="../assets/resume.pdf"
        className="no-highlight duration-350 block rounded-md px-3 py-1 transition-colors hover:bg-green-400"
      >
        <FileText className="h-8 w-8 text-gray-500" />
      </a>
    </li>
    <li className="mx-5 inline-block">
      <a
        href="https://github.com/le0piovesan"
        className="no-highlight duration-350 block rounded-md px-3 py-1 transition-colors hover:bg-green-400"
      >
        <Github className="h-8 w-8 text-gray-500" />
      </a>
    </li>
    <li className="mx-5 inline-block">
      <a
        href="http://linkedin.com/in/le0piovesan"
        className="no-highlight duration-350 block rounded-md px-3 py-1 transition-colors hover:bg-green-400"
      >
        <Linkedin className="h-8 w-8 text-gray-500" />
      </a>
    </li>
    <li className="mx-5 inline-block">
      <a
        href="mailto: leopvsn@gmail.com"
        className="no-highlight duration-350 block rounded-md px-3 py-1 transition-colors hover:bg-green-400"
      >
        <Mail className="h-8 w-8 text-gray-500" />
      </a>
    </li>
  </ul>
);

export default IntroLinks;
