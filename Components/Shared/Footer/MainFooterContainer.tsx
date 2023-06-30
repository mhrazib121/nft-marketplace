"use client";

import { Container } from "@Components/Common";
import { ContactDetails, MarketplaceAccount, SubscribeBox } from ".";

const MainFooterContainer = () => (
  <Container>
    <div className="flex justify-center xl:justify-between gap-[100%] xl:gap-2 md:gap-[7%] flex-wrap">
      <ContactDetails />
      <MarketplaceAccount />
      <SubscribeBox />
    </div>
  </Container>
);

export default MainFooterContainer;
