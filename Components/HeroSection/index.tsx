import { Button, Container } from "@Components/Common";
import { Title } from "@Components/Common/Title";
import { hero1 } from "@public/assets/image";
import Image from "next/image";

export const HeroSection = () => {
  const data = [
    {
      amount: 98,
      text: "Artwork",
    },
    {
      amount: 12,
      text: "Action",
    },
    {
      amount: 15,
      text: "Artist",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between my-16 ">
        <div className="flex flex-col justify-between mt-8 md:mt-0">
          <Title
            position="start"
            title="Discover, and collect Digital Art  NFTs"
            text="lg"
            subText="Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets."
          />
          <div>
            <Button rounded variant="primary">
              Explore Now{" "}
            </Button>
          </div>
          <div className="flex gap-5">
            {data.map((p, i) => (
              <div key={i}>
                <h1 className="text-[26px] md:text-[40px] font-bold">
                  {p.amount}k+
                </h1>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src={hero1} alt="hero" />
        </div>
      </div>
    </Container>
  );
};
