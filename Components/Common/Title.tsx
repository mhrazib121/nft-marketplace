"use client";

import { ITitle } from "@Interface";

export const Title = ({
  title,
  position = "center",
  text = "md",
  subText,
  about,
}: ITitle) => (
  <div>
    <div
      className={`${
        (text === "sm" && "lg:text-[24px] text-[20px] ") ||
        (text === "md" &&
          position === "start" &&
          "xl:text-[28px] lg:text-[24px] text-[20px]") ||
        (text === "md" && `lg:text-[28px] text-[24px]`) ||
        (text === "lg" &&
          `${
            about ? "text-[24px] lg:text-[30px]" : "text-[26px] lg:text-[40px]"
          }`)
      } font-bold ${
        (position === "center" && "text-center") ||
        (position === "start" && "text-start") ||
        (position === "end" && "text-end")
      }`}
    >
      <h3 className="uppercase">{title}</h3>
      {subText ? (
        <p className=" text-base opacity-60 max-w-[589px]">{subText}</p>
      ) : null}
    </div>

    <div
      className={`w-full flex pt-1 ${
        (position === "center" && "justify-center") ||
        (position === "start" && "justify-start") ||
        (position === "end" && "justify-end")
      }`}
    ></div>
  </div>
);
