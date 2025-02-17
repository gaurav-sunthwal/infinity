"use client"

import Image from "next/image";
import item from "@/public/item/2ecc083e17a8c26847a96673dc85bc00.png";
import planats from "@/public/Img/planets.png";
import { HStack, VStack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import decoLight from "@/public/Img/bgDeco-dark.png";
import decoDark from "@/public/Img/bgDeco-light.png";
import { Unbounded as UnboundedFont } from "next/font/google";
import { Wix_Madefor_Display as WixMadeforFont } from "next/font/google";
import { useColorMode } from "@/components/ui/color-mode";
import { MdKeyboardArrowRight } from "react-icons/md";
import BlurCard from "@/app/_screen/_components/BlurCard";
/* img  */

import earth from "@/public/Img/Planets/earth.png";

const Unbounded = UnboundedFont({
  weight: "400",
  subsets: ["latin"],
});
const WixMadefor = WixMadeforFont({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <div className="mt-10">
      <HStack justifyContent={"space-around"}>
        <div className="">
          <h1 className={`text-[60px] text-nowrap text-center`}>
            Wear the{" "}
            <samp className=" bg-black text-white dark:bg-white dark:text-black p-2 font-semibold">
              Universe
            </samp>{" "}
            <br /> <span className=" italic">Rule the</span>{" "}
            <span className={`${Unbounded.className}`}>Cosmos</span>
          </h1>
        </div>
        <div className=" w-[647px] h-[300px] z-10">
          <BlurCard>
            <HStack gap={2} p={5}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </HStack>
          </BlurCard>
        </div>
      </HStack>
      <div className="flex">
        <div className="w-[944px] -z-0 relative -top-16 p-2 ">
          <Image
            className=""
            alt="bg"
            src={colorMode === "dark" ? decoDark : decoLight}
          />
          <VStack>
            <HStack className="z-30  absolute top-10">
              <Button className=" bg-white text-black hover:bg-white dark:bg-black dark:text-white">
                CHECK INVENTORY
              </Button>
              <Button className=" border-2 dark:bg-transparent dark:text-black">
                SHOP COLLECTION{" "}
              </Button>
            </HStack>
          </VStack>
        </div>
        <div className=" absolute right-[254px] mt-10 font-bold">
          <h1 className=" text-[60px]">
            <span className="dark:text-black text-white ">Browse Cl</span>othing
          </h1>
          <h1 className=" text-[60px] ml-24 font-bold">
            <span className="dark:text-black text-white italic">From t</span>
            <span className=" italic">he</span> Planets.
          </h1>
        </div>
      </div>
      <div className=" flex absolute top-[440px] justify-between p-10 ">
        <div className=" p-3 w-[40%]  top-0">
          <Image alt="planets" src={planats} />
        </div>
        <div className=" relative top-[200px] ">
          <BlurCard>
            <div className=" w-full">
              <HStack>
                <div className="">
                  <Image alt="earth" src={earth} />
                </div>
                <div className="">
                  <HStack className="">
                    <h1 className={`${WixMadefor.className} text-[40px]`}>
                      Planet 03 Earth
                    </h1>
                    <MdKeyboardArrowRight size={40} />
                  </HStack>
                  <VStack>
                    <Button>SHOP COLLECTION </Button>
                    <Button>SHOP COLLECTION </Button>
                  </VStack>
                </div>
                <div className=""></div>
              </HStack>
            </div>
          </BlurCard>
        </div>
      </div>
    </div>
  );
}

const ItemCard = ({}) => {
  return (
    <div className=" bg-white rounded-md">
      <Image alt="item" src={item} />
    </div>
  );
};
