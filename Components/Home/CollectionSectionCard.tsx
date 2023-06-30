import { Button } from "@Components/Common";
interface ICollectionSectionCard {
  img: JSX.Element;
  profileImg: JSX.Element;
}

export const CollectionSectionCard = ({
  data,
}: {
  data: ICollectionSectionCard;
}) => {
  return (
    <div className="flex gap-3 my-2">
      <div className="h-[147px]">{data.img}</div>
      <div className=" flex justify-between flex-col py-2">
        <h3 className="text-lg font-bold">The Futr Abstr</h3>
        <div className="flex gap-2">
          {data.profileImg}

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
  );
};
