import { Container } from "@Components/Common";
import { Title } from "@Components/Common/Title";
import {
  collection1,
  collection2,
  collection3,
  collection4,
  profile,
  topCollection1,
  topCollection2,
  topCollection3,
  topCollection4,
  topCollection5,
} from "@public/assets/image";
import Image from "next/image";
import { CollectionSectionCard } from "./CollectionSectionCard";

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

  const topCollectionData = [
    {
      name: "CryptoFunks",
      img: topCollection1,
      bid: "19,769.39",
    },
    {
      name: "Cryptix",
      img: topCollection2,
      bid: "2,769.39",
    },
    {
      name: "Frensware",
      img: topCollection3,
      bid: "9,232.39",
    },
    {
      name: "PunkArt",
      img: topCollection4,
      bid: "3,769.39",
    },
    {
      name: "Art Crypto",
      img: topCollection5,
      bid: "10,769.39",
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
                <h3 className="text-lg font-bold">The Futr Abstr</h3>
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
              <CollectionSectionCard data={p} />
            </>
          ))}
        </div>
      </div>

      {/* Top Section */}
      <div>
        <Title
          title="Top Collection"
          position="start"
          subText={<span className="text-primary">Last 7 days</span>}
        />
      </div>
    </Container>
  );
};
