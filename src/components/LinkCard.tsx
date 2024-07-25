import { LinkType } from "@/types";
import { AlignJustify, Link } from "lucide-react";
import Image from "next/image";
import { useState, useContext } from "react";
import { LinksContext } from "@/store/StoreContext";

type LinkCardProps = {
  link: LinkType;
  onRemove: (id: number) => void;
  index: number;
};

type PlatformType = {
  name: string;
  image?: string;
  placeholder?: string;
};

const LinkCard = ({ link, onRemove, index }: LinkCardProps) => {
  console.log(link);

  const { updateLinks, links } = useContext(LinksContext);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType | any>({
    name: link.platform,
  });
  const [value, setValue] = useState<string | undefined>(link.link);
  console.log(selectedPlatform);

  const platforms: PlatformType[] = [
    {
      name: "GitHub",
      image: "/icons8-github.svg",
      placeholder: "Enter your github link",
    },
    {
      name: "Facebook",
      image: "/icons8-facebook.svg",
      placeholder: "Enter your facebook link",
    },
    {
      name: "Instagram",
      image: "/icons8-instagram.svg",
      placeholder: "Enter your instagram link",
    },
    {
      name: "Linkedin",
      image: "/icons8-Linkedin.svg",
      placeholder: "Enter your linkedin link",
    },
    {
      name: "Youtube",
      image: "/icons8-youtube.svg",
      placeholder: "Enter your yotube link",
    },
  ];

  const openOptions = () => {
    setOpen((prev) => !prev);
  };

  const selectOption = (platform: PlatformType) => {
    setSelectedPlatform({ ...platform });
    updateLinks({
      id: link.id,
      field: "platform",
      payload: platform.name,
    });

    openOptions();
  };

  const removeLink = () => {
    onRemove(link.id);
  };

  const updateLink = (e: any) => {
    const { name, value } = e.target;
    setValue(value);
    updateLinks({
      id: link.id,
      field: name,
      payload: value,
    });
  };

  return (
    <div className="flex h-[230px] w-full flex-col gap-[12px] rounded-[12px] bg-[#FAFAFA] p-[20px] text-[#333333]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AlignJustify color="#333333" size={20} />
          <span className="text-sm text-[#333333]">Link #{index + 1}</span>
        </div>
        <button className="text-sm text-[#333333]" onClick={removeLink}>
          Remove
        </button>
      </div>
      <div className="relative flex h-[70px] flex-col items-start justify-start gap-1 self-stretch">
        <label className="font-['Instrument Sans'] w-[396px] text-xs font-normal leading-[18px] text-[#333333]">
          Platform
        </label>
        <div className="inline-flex items-center justify-start gap-3 self-stretch rounded-lg border border-[#d9d9d9] bg-white px-4 py-3">
          <div className="h-[23px] w-[80%]" onClick={openOptions}>
            {selectedPlatform && (
              <div className="flex h-full items-center gap-2">
                <Image
                  src={selectedPlatform?.image}
                  alt=""
                  width={25}
                  height={25}
                />
                <span className="text-sm text-[#333333]">
                  {selectedPlatform?.name}
                </span>
              </div>
            )}
          </div>
        </div>
        {open && (
          <div className="absolute left-0 top-[80px] z-10 flex w-full flex-col gap-2 rounded-lg bg-white p-3">
            {platforms.map((platform:any, index) => (
              <span
                key={index}
                className="flex h-[30px] cursor-pointer items-center gap-2 border-b-[1px] text-sm text-[#333333]"
                onClick={() => selectOption(platform)}
              >
                <Image
                  src={platform.image}
                  alt={platform.name}
                  height={15}
                  width={15}
                />
                {platform.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex h-[70px] flex-col items-start justify-start gap-1 self-stretch">
        <label className="font-['Instrument Sans'] w-[396px] text-xs font-normal leading-[18px] text-[#333333]">
          Link
        </label>
        <div className="inline-flex items-center justify-start gap-3 self-stretch rounded-lg border border-[#d9d9d9] bg-white px-4 py-3">
          <Link size={20} color="#333333" />
          <input
            type="text"
            placeholder={selectedPlatform?.placeholder}
            className="w-[80%] focus:outline-none"
            name="link"
            onChange={updateLink}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
