"use client";
import Image from "next/image";
import { useContext } from "react";
import { LinksContext } from "@/store/StoreContext";
import LinkBioCard from "@/components/LinkBioCard";

const ProfilePage = () => {
  const { updateUserInfo, userInfo,links } = useContext(LinksContext);

  console.log(userInfo);
  

  const update = (e:any) => {
    const { name, value } = e.target;
    const payload: { field: string; payload: string } = {
      field: name,
      payload: value,
    };
    updateUserInfo(payload);
  };

  return (
    <div className="mt-4 flex h-max w-full gap-4">
      {/* PHONE */}
      <div
        style={{ flex: 2 }}
        className="hidden h-[650px] w-[300px] items-center justify-center gap-2 rounded-xl bg-white p-6 lg:flex lg:flex-col"
      >
        <div className="h-[631px] w-[307px]">
          <div className="inline-flex h-[514px] w-[237px] flex-col items-start justify-start gap-14">
            <div className="flex h-[158px] flex-col items-center justify-start gap-[25px] self-stretch">
              <div className="h-24 w-24 rounded-full bg-[#eeeeee]" />
              <div className="flex flex-col items-center justify-start gap-[13px]">
                <div className="h-4 w-40 rounded-[104px] bg-[#eeeeee]" />
                <div className="h-2 w-[72px] rounded-[104px] bg-[#eeeeee]" />
              </div>
            </div>
            <div className="flex h-[300px] flex-col items-start justify-start gap-5 self-stretch">
              {links.length < 1 && (
                <>
                  <div className="h-11 self-stretch rounded-lg bg-[#eeeeee]" />
                  <div className="h-11 self-stretch rounded-lg bg-[#eeeeee]" />
                  <div className="h-11 self-stretch rounded-lg bg-[#eeeeee]" />
                  <div className="h-11 self-stretch rounded-lg bg-[#eeeeee]" />
                  <div className="h-11 self-stretch rounded-lg bg-[#eeeeee]" />
                </>
              )}
              {links.map((link:any, index) => (
                <LinkBioCard key={index} platform={link?.platform} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* MENU */}
      <div
        style={{ flex: 3 }}
        className="flex w-full flex-col items-start justify-start gap-10 rounded-sm bg-white p-6 md:mx-auto md:h-full md:w-[680px]"
      >
        <div className="flex h-[92px] flex-col items-start justify-start gap-2">
          <div className="font-['Instrument Sans'] text-2xl font-bold leading-9 text-[#333333]">
            Profile Details
          </div>
          <div className="font-['Instrument Sans'] text-base font-normal leading-normal text-[#727272]">
            Add your details to create a personal touch to your profile.
          </div>
        </div>

        <div className="flex h-[223px] w-full items-center bg-[#FAFAFA] p-[12px]">
          <div style={{ flex: 1 }} className="text-sm text-[#727272]">
            Profile picture
          </div>
          <div
            style={{ flex: 1 }}
            className="flex h-full w-full flex-col items-center justify-center bg-[#EFEBFF]"
          >
            <div className="flex h-[72px] w-[116px] flex-col items-center justify-center gap-4">
              <Image src="/Vector.png" alt="" height={50} width={50} />
              <p className="text-sm text-[#633CFF]">+ Upload Image</p>
            </div>
          </div>
          <div style={{ flex: 1 }} className="pl-3 text-sm text-[#727272]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </div>
        </div>

        <div className="flex h-[223px] w-full items-center bg-[#FAFAFA] p-[12px]">
          <form className="flex w-full flex-col gap-4">
            <div className="flex h-[48px] w-full items-center justify-center gap-10">
              <label className="flex h-full w-[100px] items-center justify-start text-sm text-[#727272]">
                First Name
              </label>
              <input
                type="text"
                className="h-full w-full p-2 text-sm text-[#727272] focus:outline-none"
                name="first_name"
                onChange={update}
              />
            </div>
            <div className="flex h-[48px] w-full items-center justify-center gap-10">
              <label className="flex h-full w-[100px] items-center justify-start text-sm text-[#727272]">
                Last Name
              </label>
              <input
                type="text"
                className="h-full w-full p-2 text-sm text-[#727272] focus:outline-none"
                name="last_name"
                onChange={update}
              />
            </div>
            <div className="flex h-[48px] w-full items-center justify-center gap-10">
              <label className="flex h-full w-[100px] items-center justify-start text-sm text-[#727272]">
                Email
              </label>
              <input
                type="text"
                className="h-full w-full p-2 text-sm text-[#727272] focus:outline-none"
                name="email"
                onChange={update}
              />
            </div>
          </form>
        </div>
        <button
          disabled={links.length < 1}
          className="font-['Instrument Sans'] inline-flex h-[46px] w-full flex-col items-center justify-center gap-2 rounded-lg bg-[#623bff] px-[27px] py-[11px] text-base font-semibold leading-normal text-white disabled:opacity-25 md:w-max md:self-end"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
