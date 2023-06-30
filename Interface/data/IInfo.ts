import { StaticImageData } from "next/image";

export interface IInfo {
  name: string;
  option: {
    title: string;
    link: string;
  }[];
}
