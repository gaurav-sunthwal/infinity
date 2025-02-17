import Link from "next/link";
import React from "react";
import Deco from "../../public/Deco/Deco1";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Josefin_Sans as JosefinSansFont } from 'next/font/google'
import SubTitle from "../_screen/_components/SubTitle";

const JosefinSans = JosefinSansFont({
  weight: '400',
  subsets: ['latin'],
})


const menuData = [
  {
    title: "NEW RELEASES",
    url: "#new-releases",
  },

  {
    title: "MEN",
    url: "#men",
  },
  {
    title: "WOMEN",
    url: "#women",
  },
  {
    title: "PLANET",
    url: "#PLANET",
  },
];
export default function Header() {
  return (
    <>

    <div className="flex">
      <div className=" flex items-center p-3 gap-10">
        <div className="">
          <Logo />
        </div>
        <div className="flex gap-3">
          {menuData.map((item, index) => {
            return (
              <div className="" key={index}>
                <Link href={item.url}>
                  <p className="text-[13px] font-normal">{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <ColorModeButton/>
      </div>

      <div className=" absolute right-0">
        <Deco />
      </div>
    </div>
    <SubTitle/>
    </>
  );
}

const Logo = () => {
  return (
    <>
      <div className="flex items-center text-[24px] font-normal gap-3">
        <h1 className={JosefinSans.className}>INFINITY</h1>
        <div className="rounded-full p-1 bg-black text-white dark:bg-white dark:text-black  ">
          <h1 className=" font-medium text-[24px]">2i33</h1>
        </div>
      </div>
    </>
  );
};
