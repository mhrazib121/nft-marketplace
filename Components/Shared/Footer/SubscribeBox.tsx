import { Button, CommonText, InputField } from "@Components/Common";
import { FooterTitle } from "./FooterTitle";

export const SubscribeBox = () => {
  const handleOnChange = () => {};
  return (
    <div className="w-[380px] md:w-[65%] lg:w-[25%] mt-8">
      <FooterTitle className="mb-6">Stay in the loop</FooterTitle>
      <CommonText text="lg">
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks for navigating NFTs.
      </CommonText>
      <div className=" ">
        <InputField
          height="h-[60px]"
          handleOnChange={handleOnChange}
          button={
            <Button rounded variant="primary">
              Subscribe
            </Button>
          }
        />
      </div>
    </div>
  );
};
