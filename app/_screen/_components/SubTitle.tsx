import { VStack } from "@chakra-ui/react";
import React from "react";

export default function SubTitle() {
  const title = `
        FLASH SALE : FLAT 20% OFF ON ALL CART ORDERS              FLASH SALE : FLAT 20% OFF ON ALL CART ORDERS              FLASH SALE : FLAT 20% OFF ON ALL CART ORDERS              
    `;
  return (
    <VStack className=" bg-[#FFE797] w-full h-[30px] items-center justify-center ">
      <p className=" text-black">{title}</p>
    </VStack>
  );
}
