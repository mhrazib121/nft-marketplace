import { Title } from "@Components/Common/Title";
import { topCollectionData } from "@Interface";
import { CollectionListCard } from "./CollectionListCard";

export const TopCollectionList = () => {
  return (
    <div className="p-8 lg:w-[35%]">
      <Title
        title="Top Collection"
        position="start"
        subText={<span className="text-primary">Last 7 days</span>}
      />

      <div>
        {topCollectionData.map((p, i) => (
          <CollectionListCard data={p} index={i} key={p.name} />
        ))}
      </div>
    </div>
  );
};
