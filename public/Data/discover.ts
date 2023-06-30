import { IDiscover } from "@Interface";
import {
  discover1,
  discover2,
  discover3,
  discover4,
  person1,
  person2,
  person3,
  person4,
} from "@public/assets/image";

export const discover: IDiscover[] = [
  {
    name: "ArtCrypto",
    mainImage: discover1,
    personImg: [person1, person2, person3, person4],
  },
  {
    name: "This NFT",
    mainImage: discover2,
    personImg: [person1, person2, person3, person4],
  },
  {
    name: "NameCrypto",
    mainImage: discover3,
    personImg: [person1, person2, person3, person4],
  },
  {
    name: "KingCrypto",
    mainImage: discover4,
    personImg: [person1, person2, person3, person4],
  },
];
