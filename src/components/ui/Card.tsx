import React from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { CardProps } from "@/interfaces/ui/Card.types";

const bgTag = (tag: string): string => {
  switch (tag) {
    case "front-end":
      return "bg-emerald-300";
    case "back-end":
      return "bg-orange-300";
    case "mobile":
      return "bg-indigo-300";
    case "database":
      return "bg-red-300";
    case "work":
      return "bg-fuchsia-300";
    case "study":
      return "bg-amber-300";
    case "challenge":
      return "bg-lime-300";
    case "research":
      return "bg-purple-300";
    case "automation":
      return "bg-yellow-300";
    default:
      return "bg-stone-300";
  }
};

const formatLinkLabel = (label: string): string => {
  let words = label.split(" ");

  let formattedWords = words.map((word) => {
    let capitalizeFirstLetter = word.charAt(0).toUpperCase();
    let remainingString = word.slice(1);

    return capitalizeFirstLetter + remainingString;
  });
  return `< ${formattedWords.join(" ")} />`;
};

const Card: React.FC<CardProps> = ({ project, setSelectedImage }) => {
  const { title, type, tags, description, link, images } = project;

  return (
    <div
      className="rounded-lg p-4 duration-300 hover:scale-105
    hover:bg-gray-100 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mb-2 text-sm tracking-wide">{type}</p>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index.toString()}
            className={`mb-2 mr-2 inline-block rounded ${bgTag(
              tag,
            )} px-2 py-1 font-mono text-xs`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mb-2 text-sm">{description}</p>
      {link.label === "code" ? (
        <ButtonLink secondary href={link.url}>
          {"< Code />"}
        </ButtonLink>
      ) : (
        <ButtonLink secondary disabled>
          {formatLinkLabel(link.label)}
        </ButtonLink>
      )}
      <div className="my-2 flex flex-wrap">
        {images &&
          images.map((image, index) => (
            <div
              key={index.toString()}
              className="m-1 flex h-12 w-12 rounded-md border-2 border-gray-400 hover:scale-110"
            >
              <Image
                src={image.src}
                alt={image.alt}
                title="Click on me!"
                className="h-auto w-full cursor-pointer rounded-sm"
                height={50}
                width={50}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
