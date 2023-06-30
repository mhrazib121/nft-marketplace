import { Button } from "@Components/Common";
import { Title } from "@Components/Common/Title";
import { ICollectionFeature } from "@Interface";
import Image from "next/image";

export const DetailsSection = ({ data }: { data: ICollectionFeature }) => {
  return (
    <div className="my-12">
      <Title text="sm" position="start" title={data.title} />
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-2 ">
          <Image src={data.profileImg} alt="" />
          <p className="text-base font-semibold">by {data.author}</p>
        </div>
        <Button rounded variant="secondary">
          Total 54 items
        </Button>
      </div>
    </div>
  );
};
