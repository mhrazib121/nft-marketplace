"use client";

import { CommonText, Container, LineBreak } from "@Components/Common";
import { useIgnorePate } from "@hooks";
import MainFooterContainer from "./MainFooterContainer";

export const Footer = () => {
  const ignorePath = useIgnorePate();

  return (
    <footer className={`${ignorePath && "hidden"}`}>
      <section className=" pt-[60px]">
        <MainFooterContainer />
        <div className="mt-8">
          <LineBreak />
          <Container className="flex justify-center items-center pt-5 pb-6">
            <CommonText>Copyright © 2022 Avi Yansah</CommonText>
          </Container>
        </div>
      </section>
    </footer>
  );
};

export * from "./ContactDetails";
export * from "./ContactInfo";
export * from "./FooterTitle";
export * from "./MainFooterContainer";
export * from "./MarketplaceAccount";
export * from "./SocialMediaLinks";
export * from "./SubscribeBox";
