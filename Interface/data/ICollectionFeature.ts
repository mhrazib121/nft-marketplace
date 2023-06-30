import { StaticImageData } from "next/image";

export interface ICollectionFeature {
  img: StaticImageData[];
  profileImg: StaticImageData;
  title: string;
  author: string;
}
