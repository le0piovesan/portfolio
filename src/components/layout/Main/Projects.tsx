"use client";
import Title from "@/components/ui/Title";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import projectsData from "../../../../public/data/projects.json";
import { SelectedImageProps } from "@/interfaces/common/shared.types";

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<SelectedImageProps | null>(
    null,
  );

  return (
    <section className="py-8" id="projects">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:mr-10 lg:items-center lg:justify-center lg:px-8 lg:text-left">
        <Title>Projects</Title>
        <p className="text-base leading-relaxed">
          Here&apos;s some stuff that I&apos;ve done/been working on:
        </p>
        <p className="text-sm font-extralight leading-relaxed">
          Click on the images to zoom and then press ESC to close.
        </p>
      </div>
      <div className="m-4 flex flex-wrap justify-between">
        {projectsData.projects.map((project) => (
          <Card
            key={project.id}
            project={project}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </section>
  );
};

export default Projects;
