import Image, { StaticImageData } from "next/image";

export const ImageSection = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div className="w-full flex justify-between">
      <Image
        className="w-full max-w-[225px] md:max-w-[265px] "
        src={images[0]}
        alt=""
      />
      <div>
        {images.slice(1).map((image) => (
          <>
            <Image
              className="max-w-[75px] md:max-w-[93px] my-1"
              src={image}
              alt=""
            />
          </>
        ))}
      </div>
    </div>
  );
};
