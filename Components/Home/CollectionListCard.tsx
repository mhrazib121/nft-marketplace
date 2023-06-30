import Image, { StaticImageData } from "next/image";

export const CollectionListCard = ({
  data,
  index,
}: {
  data: { name: string; img: StaticImageData; bid: string };
  index: number;
}) => {
  return (
    <div>
      <div className="flex items-center gap-4 p-4">
        <p className="text-lg font-bold">{index + 1}</p>
        <div className="flex justify-between w-full">
          <div className="flex gap-4">
            <Image src={data.img} alt="" />
            <div>
              <h3>{data.name}</h3>
              <p>{data.bid}</p>
            </div>
          </div>
          <p className="text-primary">+26.52%</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral opacity-20"></div>
    </div>
  );
};
