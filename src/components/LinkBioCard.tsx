import Image from "next/image";
import React from "react";

const LinkBioCard = ({ platform }: { platform: string }) => {
  type PlatformType = {
    name: string;
    image: string;
    placeholder: string;
    color: string;
  };

  const platforms: PlatformType[] = [
    {
      name: "GitHub",
      image: "/icons8-github.svg",
      placeholder: "Enter your github link",
      color: "#000000",
    },
    {
      name: "Facebook",
      image: "/icons8-facebook.svg",
      placeholder: "Enter your facebook link",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      image: "/icons8-instagram.svg",
      placeholder: "Enter your instagram link",
      color: "#4f5bd5",
    },
    {
      name: "Linkedin",
      image: "/icons8-Linkedin.svg",
      placeholder: "Enter your linkedin link",
      color: "#0077B5",
    },
    {
      name: "Youtube",
      image: "/icons8-youtube.svg",
      placeholder: "Enter your yotube link",
      color: "#FF0000",
    },
  ];

  const result: PlatformType | any = platforms.find(
    ({ name }) => name === platform,
  );
  return (
    <div className="flex h-11 w-full items-center justify-center rounded-lg bg-[#eeeeee]">
      <div className="flex h-full w-full items-center justify-center gap-3">
        <Image src={result?.image} alt="" height={20} width={20} />
        <span>{result?.name}</span>
      </div>
    </div>
  );
};

export default LinkBioCard;
