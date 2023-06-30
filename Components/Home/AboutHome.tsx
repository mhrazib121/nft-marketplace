import { Container } from "@Components/Common";
import { Title } from "@Components/Common/Title";
import { cardTick, chartSquare } from "@public/assets/icon";
import Image from "next/image";

export const AboutHome = () => {
  const data = [
    {
      icon: <Image src={cardTick} alt="cardTick" />,
      headTitle: "Fast Transaction",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
    },
    {
      icon: <Image src={chartSquare} alt="cardTick" />,
      headTitle: "Growth Transaction",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
    },
  ];
  return (
    <div className="bg-[#d9e0ec7a]">
      <Container>
        <div className="md:flex py-12 md:py-24 gap-8">
          <div>
            <Title
              position="start"
              title="The amazing NFT art of the world here"
            />
          </div>
          <div className="md:flex ">
            {data.map((p, i) => (
              <div
                key={i}
                className="flex justify-start items-start gap-3 my-8 md:my-0"
              >
                {p.icon}
                <div>
                  <h2>{p.headTitle}</h2>
                  <p>{p.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
