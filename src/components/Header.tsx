"use client";
import { Link as LinkIcon, CircleUser, Eye } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/utils/lib";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {pathname !== "/preview" && (
        <header className="m-2 flex h-[70px] w-full items-center justify-between rounded-lg bg-white p-4 md:h-[126px] lg:h-[60px]">
          <nav className="flex h-full w-full items-center justify-between lg:h-[46px]">
            <div className="flex items-center justify-between gap-4">
              <div className="relative size-[40px] lg:size-[32px]">
                <Image src="/logo.svg" fill className="" alt="" />
              </div>
              <h2 className="hidden text-3xl font-bold text-[#333333] md:flex lg:text-[21px]">
                devlinks
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/dashboard"
                className={`flex h-full gap-4 rounded-[8px] px-[24px] py-[11px] hover:text-[#633CFF] lg:py-[8px] ${pathname == "/dashboard" ? "text-[#633CFF]" : "text-[#d9d9d9]"} ${pathname == "/dashboard" ? "bg-[#EFEBFF]" : ""}`}
              >
                <LinkIcon />
                <span className="hidden md:flex">Links</span>
              </Link>
              <Link
                href="/profile"
                className={`flex h-full gap-4 rounded-[8px] px-[24px] py-[11px] hover:text-[#633CFF] lg:py-[8px] ${pathname == "/profile" ? "text-[#633CFF]" : "text-[#d9d9d9]"} ${pathname == "/profile" ? "bg-[#EFEBFF]" : ""}`}
              >
                <CircleUser />
                <span className="hidden md:flex">Profile Details</span>
              </Link>
            </div>
            <Link
              href="/preview"
              className="rounded-[8px] border border-[#633cff] px-[16px] py-[11px] hover:bg-[#EFEBFF] lg:py-[8px]"
            >
              <Eye color="#633CFF" className="md:hidden" />
              <span className="hidden text-[#633CFF] md:flex">Preview</span>
            </Link>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
