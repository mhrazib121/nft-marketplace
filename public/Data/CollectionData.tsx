import {
  collection1,
  collection2,
  collection3,
  collection4,
  profile,
} from "@public/assets/image";
import Image from "next/image";
export const CollectionData = [
  {
    img: <Image src={collection1} alt="" />,
    profileImg: <Image src={profile} alt="" />,
  },
  {
    img: <Image src={collection2} alt="" />,
    profileImg: <Image src={profile} alt="" />,
  },
  {
    img: <Image src={collection3} alt="" />,
    profileImg: <Image src={profile} alt="" />,
  },
  {
    img: <Image className="" src={collection4} alt="" />,
    profileImg: <Image src={profile} alt="" />,
  },
];
