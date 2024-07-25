"use client";
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LinksContext } from "@/store/StoreContext";
import LinkBioCard from "@/components/LinkBioCard";

const PreviewPage = () => {
  const router = useRouter();
  const { links, userInfo } = useContext(LinksContext);
  return (
    <div className="relative h-[100vh] w-full bg-white p-4">
      <div className="absolute left-0 top-0 h-[357px] w-full rounded-b-3xl bg-white p-4 md:bg-[#633CFF]">
        <header className="m flex h-[70px] w-full items-center justify-between rounded-lg bg-white p-4 md:h-[126px] lg:h-[60px]">
          <nav className="flex h-full w-full items-center justify-between lg:h-[46px]">
            <button
              onClick={() => router.back()}
              className="w-[160px] rounded-[8px] border border-[#633cff] px-[16px] py-[11px] text-[#633cff] hover:bg-[#EFEBFF] lg:py-[8px]"
            >
              Back to editor
            </button>
            <button className="w-[160px] rounded-[8px] border bg-[#633cff] px-[16px] py-[11px] text-white hover:bg-[#EFEBFF] lg:py-[8px]">
              Share Link
            </button>
          </nav>
        </header>
        <div className="mx-auto mt-[100px] flex w-[320px] flex-col items-center justify-center gap-[30px] rounded-xl p-4 md:w-[349px] md:bg-white md:p-8">
          <div className="relative size-[120px] overflow-hidden rounded-full border-[6px] border-[#633cff]">
            <Image
              src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <h1 className="text-[28px] font-bold">
              <span>{userInfo.first_name}</span>{" "}
              <span> {userInfo.last_name}</span>
            </h1>
            <span className="text-sm">{userInfo.email}</span>
          </div>

          <div className="mb-4 flex h-[300px] flex-col items-start justify-start gap-5 self-stretch">
            {links.map((link, index) => (
              <LinkBioCard key={index} platform={link.platform} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
