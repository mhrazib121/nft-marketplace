import { Container } from "@Components/Common";
import { upDown } from "@public/assets/icon";
import {
  collection1,
  collection2,
  collection3,
  collection4,
  profile,
} from "@public/assets/image";
import Image from "next/image";
import { CollectionSectionCard } from "./CollectionSectionCard";
import { TopCollectionList } from "./TopCollectionSection";

export const CollectionSection = () => {
  const data = [
    {
      img: <Image src={collection1} alt="" />,
      profileImg: <Image src={profile} alt="" />,
    },
    {
      img: <Image src={collection2} alt="" />,
      profileImg: <Image src={profile} alt="" />,
    },
    {
      img: <Image src={collection3} alt="" />,
      profileImg: <Image src={profile} alt="" />,
    },
    {
      img: <Image className="" src={collection4} alt="" />,
      profileImg: <Image src={profile} alt="" />,
    },
  ];

  return (
    <Container>
      <>
        <div className="lg:flex justify-between">
          <div className="w-full md:flex md:gap-8 lg:gap-16 justify-center lg:w-[65%] md:p-8">
            <div className=" flex justify-center ">
              <div className="w-full max-w-[300px] h-[100%]">
                {data[0].img}
                <br />
                <div className="flex justify-between p-2">
                  <div className="flex gap-2">
                    {data[0].profileImg}
                    <div>
                      <h3 className="text-lg font-bold">The Futr Abstr</h3>
                      <p>10 in the stock</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2 text-center">
                      Highest Bid
                    </p>
                    <div className="flex gap-1">
                      <Image src={upDown} alt="" />
                      <p>0.25 ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Object  */}
            <div className="">
              {data.slice(1).map((p) => (
                <>
                  <CollectionSectionCard data={p} />
                </>
              ))}
            </div>
          </div>

          {/* Top Collection List Section */}
          <TopCollectionList />
        </div>
      </>
    </Container>
  );
};
