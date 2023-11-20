import React from "react";
import Title from "@/components/ui/Title";
import ButtonLink from "@/components/ui/ButtonLink";

const About: React.FC = () => (
  <section className="bg-orange-300 py-8" id="about">
    <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:flex lg:items-center lg:justify-center">
        <div className="text-center lg:mr-10 lg:text-left">
          <Title>About</Title>
          <p className="slide-top text-base leading-relaxed">
            Hi there, I&apos;m Leonardo!
            <br />
            <br />
            I&apos;m a Software Engineer from Brazil. Always eager to deliver
            high-quality software solutions, I put my skills into practice in
            everything related to technology and strive to make meaningful
            contributions to all kinds of projects.
            <br />
            <br />
            A boring overview of my general experience: I have vast experience
            in system analysis and development, gathering and establishing
            documentation, using the Microsoft Office package, creating UML
            diagrams, and programming. I also have in-depth experience in
            working with search engines and following documentation, working in
            fast-paced environments alongside agile methodologies, designing
            responsive layouts, prototyping, debugging, working with APIs and
            endpoints, REST architecture, design patterns, SSG, SPA, and SSR
            applications, as well as managing relational and non-relational
            databases.
            <br />
            <br />
            Likes to play with{" "}
            <ButtonLink secondary href="https://neumorphism.io/#e0e0e0">
              Neumorphism
            </ButtonLink>{" "}
            elements.
          </p>
          <p className="slide-top leading-relaxe mt-4 text-base">
            I also love to watch movies. You can find me at{" "}
            <ButtonLink
              secondary
              href="https://letterboxd.com/le0piovesan/films/by/date/"
            >
              Letterboxd
            </ButtonLink>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
