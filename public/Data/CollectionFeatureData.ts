import { ICollectionFeature } from "@Interface";
import {
  collection1,
  collection2,
  collection3,
  collection4,
  profile,
} from "@public/assets/image";
import Image from "next/image";
export const CollectionFeatureData: ICollectionFeature[] = [
  {
    img: [collection1, collection2, collection3, collection4],
    profileImg: profile,
    title: "Amazing Collection",
    author: "Arkhan",
  },
  {
    img: [collection1, collection2, collection3, collection4],
    profileImg: profile,
    title: "Amazing Collection",
    author: "Arkhan",
  },
  {
    img: [collection1, collection2, collection3, collection4],
    profileImg: profile,
    title: "Amazing Collection",
    author: "Arkhan",
  },
];
