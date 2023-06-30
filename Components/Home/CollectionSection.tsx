import { Button, Container } from "@Components/Common";
import {
  collection1,
  collection2,
  collection3,
  collection4,
  profile,
} from "@public/assets/image";
import Image from "next/image";

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
      <div className="flex justify-between">
        <div>
          {data[0].img}
          <div className="flex justify-between">
            <div className="flex gap-2">
              {data[0].profileImg}
              <div>
                <p>The Futr Abstr</p>
                <p>10 in the stock</p>
              </div>
              <div>
                <p>Highest Bid</p>
                <p>0.25 ETH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Object  */}
        <div className="">
          {data.slice(1).map((p) => (
            <>
              <div className="flex gap-3 my-2">
                <div className="h-[147px]">{p.img}</div>
                <div className=" flex justify-between flex-col py-2">
                  <h3 className="text-lg font-bold">The Futr Abstr</h3>
                  <div className="flex gap-2">
                    {p.profileImg}

                    <p>0.25 ETH</p>
                    <p>1 of 8</p>
                  </div>
                  <div>
                    <Button rounded variant="primary">
                      Place a bid
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div></div>
    </Container>
  );
};
