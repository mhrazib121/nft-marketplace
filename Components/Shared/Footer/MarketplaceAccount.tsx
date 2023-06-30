import { infoData } from "@public/Data";
import Link from "next/link";
import { FooterTitle } from "./FooterTitle";

export const MarketplaceAccount = () => {
  return (
    <div className="grid grid-cols-2 mt-0 lg:w-[27%] gap-8">
      {infoData.map(({ name, option }, i) => (
        <div key={i}>
          <FooterTitle className="mb-6">{name}</FooterTitle>

          <div className="flex flex-col justify-center items-start gap-3 w-auto">
            {option.map(({ link, title }, i) => (
              <Link href={link} key={i}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
