import { LineBreak } from "@Components/Common";
import { IDiscover } from "@Interface";
import { upDownGreen } from "@public/assets/icon";
import Image from "next/image";

export const DiscoverCard = ({ data }: { data: IDiscover }) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <div>
        <Image src={data.mainImage} alt="" />
        <div className="flex -mt-6 ml-8">
          {data.personImg.map((p) => (
            <>
              <div className="-ml-4">
                <Image className="-ml-" src={p} alt="" />
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-[20px] font-bold mb-2">{data.name}</h3>
        <div className="flex justify-between mb-3">
          <div className="flex gap-1  items-center  ">
            <Image src={upDownGreen} alt="" />
            <p className="text-secondary">0.25 ETH</p>
          </div>
          <p className="text-neutral opacity-50">1 of 321</p>
        </div>
        <LineBreak />
      </div>
      <div className="text-primary flex justify-between mt-4">
        <p className="text-[12px] bg-gray-200 rounded-full p-2">
          3h 50m 2s left
        </p>
        <p className="text-base font-semibold">Place a bid</p>
      </div>
    </div>
  );
};
