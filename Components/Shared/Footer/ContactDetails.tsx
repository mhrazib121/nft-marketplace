"use client";

import { CommonText, Logo } from "@Components/Common";
import { ContactInfo } from ".";

export const ContactDetails = () => {
  return (
    <div className="w-full lg:w-auto mb-8 xl:mb-[58px] flex lg:block flex-col items-center">
      <div className="flex flex-col gap-4 mb-9 ">
        <Logo />
        <CommonText text="lg">
          The world’s first and largest digital marketplace for <br /> crypto
          collectibles and non-fungible tokens (NFTs). <br />
          Buy, sell, and discover exclusive digital items.
        </CommonText>
      </div>

      <ContactInfo />
    </div>
  );
};
