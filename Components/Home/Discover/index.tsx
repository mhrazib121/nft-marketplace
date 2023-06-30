import { Container, MainContainer } from "@Components/Common";
import { discover } from "@public/Data";
import { DiscoverCard } from "./DiscoverCard";
import { FilterBar } from "./FilterBar";

export const Discover = () => {
  return (
    <div className="bg-[#d9e0ec7a]">
      <Container>
        <MainContainer>
          <h1 className=" text-center lg:text-left text-[26px] md:text-[34px] font-bold mb-6">
            Discover more NFTs
          </h1>
          <div className="my-8 hidden md:block">
            <FilterBar />
          </div>
          <div className="w-[100%] flex justify-center bg-red-100">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {discover.map((data, i) => (
                <DiscoverCard data={data} key={i} />
              ))}
            </div>
          </div>
        </MainContainer>
      </Container>
    </div>
  );
};
