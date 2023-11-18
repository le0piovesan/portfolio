import React from "react";
import Image from "next/image";
import Me from "../../../assets/profile/helloitsme.jpg";

const Avatar: React.FC = () => (
  <div className="relative pr-0 md:pr-8">
    <div className="absolute inset-0 z-0 h-full w-full translate-x-[-30%] -rotate-45 transform bg-orange-400 opacity-40"></div>
    <Image
      src={Me}
      className="relative z-10 mx-auto mb-4 h-[267px] w-[220px]"
      alt="Hello, it's a picture of me"
    />
  </div>
);

export default Avatar;
