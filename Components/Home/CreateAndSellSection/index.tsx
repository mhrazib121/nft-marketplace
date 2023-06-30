import { Button, CommonText, MainContainer } from "@Components/Common";
import { Title } from "@Components/Common/Title";
import { CreateAndSellImage } from "@public/assets/image";
import Image from "next/image";

export const CreateAndSellSection = () => {
  return (
    <MainContainer>
      <div className="md:flex items-center gap-8">
        <Image
          className="p-6 md:p-0 w-full mx-auto md:mx-0 md:max-w-[480px] lg:max-w-[640px]"
          src={CreateAndSellImage}
          alt=""
        />
        {/* <br /> */}
        <div className="">
          <Title text="lg" title="Create and sell your NFTs" position="start" />
          <CommonText text="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </CommonText>
          <div className="mt-8">
            <Button rounded variant="primary">
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
