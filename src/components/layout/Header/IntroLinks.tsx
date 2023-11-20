import React from "react";
import IconLink from "@/components/ui/IconLink";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

const IntroLinks: React.FC = () => (
  <div className="header_links pt-10 text-center">
    <IconLink href="../assets/resume.pdf">
      <FileText />
    </IconLink>
    <IconLink href="https://github.com/le0piovesan">
      <Github />
    </IconLink>
    <IconLink href="http://linkedin.com/in/le0piovesan">
      <Linkedin />
    </IconLink>
    <IconLink href="mailto:leopvsn@gmail.com">
      <Mail />
    </IconLink>
  </div>
);

export default IntroLinks;
