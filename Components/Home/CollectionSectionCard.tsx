import { Button } from "@Components/Common";
import { ICollectionSectionCard } from "@Interface";
import { upDownGreen } from "@public/assets/icon";
import Image from "next/image";

export const CollectionSectionCard = ({
  data,
}: {
  data: ICollectionSectionCard;
}) => {
  return (
    <div className="flex justify-center gap-3 mb-4">
      <div className="h-[157px]">{data.img}</div>
      {/* card left site */}
      <div className=" flex justify-between flex-col py-3 w-[240x]">
        <h3 className="text-lg font-bold">The Futr Abstr</h3>
        <div className="flex  items-center gap-2 text-sm">
          {data.profileImg}
          <div className="block md:flex items-center gap-2">
            <div className="flex gap-1 border px-[5px] h-[35px] items-center  rounded-lg border-secondary ">
              <Image src={upDownGreen} alt="" />
              <p className="text-secondary">0.25 ETH</p>
            </div>
            <p>1 of 8</p>
          </div>
        </div>
        <div>
          <Button rounded variant="primary">
            Place a bid
          </Button>
        </div>
      </div>
    </div>
  );
};
