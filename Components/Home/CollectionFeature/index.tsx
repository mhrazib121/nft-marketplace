import { Container, MainContainer } from "@Components/Common";
import { Title } from "@Components/Common/Title";
import { CollectionFeatureData } from "@public/Data/CollectionFeatureData";
import { DetailsSection } from "./DetailsSection";
import { ImageSection } from "./ImageSection";

export const CollectionFeature = () => {
  // const data =
  return (
    <Container>
      <MainContainer>
        <Title title="Collection Featured NFTs" position="start" />
        <div className=" w-full justify-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto gap-6 ">
            {CollectionFeatureData.map((p, i) => (
              <div key={i} className="max-w-[420px]w-full">
                <ImageSection images={p.img} />
                <DetailsSection data={p} />
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </Container>
  );
};
