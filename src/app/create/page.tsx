import Image from "next/image";
import { Mail, LockKeyhole } from "lucide-react";
import Link from "next/link";

export default function createPage() {
  return (
    <div className="inline-flex h-[812px] w-max flex-col items-start justify-start gap-16 p-8 lg:mx-auto lg:h-[473px]">
      <div className="flex w-full items-center gap-4 md:justify-center">
        <Image
          src="/logo.svg"
          className="size-[40px]"
          height={40}
          width={40}
          alt=""
        />
        <h2 className="text-3xl font-bold text-[#333333]">devlinks</h2>
      </div>

      <div className="flex flex-col items-start justify-start gap-10 md:h-[482px] md:bg-white md:p-6">
        <div className="flex h-[92px] flex-col items-start justify-start gap-2">
          <div className="font-['Instrument Sans'] self-stretch text-2xl font-bold leading-9 text-[#333333]">
            Create account
          </div>
          <div className="font-['Instrument Sans'] self-stretch text-base font-normal leading-normal text-[#727272]">
            Lets get you started
          </div>
        </div>
        <form className="flex h-[306px] flex-col items-start justify-start gap-6 md:h-max">
          <div className="flex h-[70px] flex-col items-start justify-start gap-1 self-stretch">
            <label className="font-['Instrument Sans'] w-[396px] text-xs font-normal leading-[18px] text-[#333333]">
              Email address
            </label>
            <div className="inline-flex items-center justify-start gap-3 self-stretch rounded-lg border border-[#d9d9d9] bg-white px-4 py-3">
              <Mail />{" "}
              <input
                type="email"
                placeholder="e.g. alex@email.com"
                className="w-[80%] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex h-[70px] flex-col items-start justify-start gap-1 self-stretch">
            <label className="font-['Instrument Sans'] w-[396px] text-xs font-normal leading-[18px] text-[#333333]">
              Password
            </label>
            <div className="inline-flex items-center justify-start gap-3 self-stretch rounded-lg border border-[#d9d9d9] bg-white px-4 py-3">
              <LockKeyhole />{" "}
              <input
                type="password"
                placeholder="Enter your password"
                className="w-[80%] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex h-[70px] flex-col items-start justify-start gap-1 self-stretch">
            <label className="font-['Instrument Sans'] w-[396px] text-xs font-normal leading-[18px] text-[#333333]">
             Confirm Password
            </label>
            <div className="inline-flex items-center justify-start gap-3 self-stretch rounded-lg border border-[#d9d9d9] bg-white px-4 py-3">
              <LockKeyhole />{" "}
              <input
                type="password"
                placeholder="Enter your password"
                className="w-[80%] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex h-[46px] flex-col items-center justify-center gap-2 self-stretch rounded-lg bg-[#623bff] px-[27px] py-[11px]">
            <Link
              href="/dashboard"
              className="font-['Instrument Sans'] text-base font-semibold leading-normal text-white"
            >
              Create new account
            </Link>
          </div>
          <div className="self-stretch text-center">
            <span className="font-['Instrument Sans'] text-base font-normal leading-normal text-[#727272]">
              have an account?
              <br className="md:hidden" />
            </span>
            <Link
              href="/"
              className="font-['Instrument Sans'] text-base font-normal leading-normal text-[#623bff]"
            >
              login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
