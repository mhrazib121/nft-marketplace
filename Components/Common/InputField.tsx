"use client";

import { InputFieldProps } from "@Interface";
import Image from "next/image";

export const InputField = ({
  label,
  type = "text",
  placeholder,
  width = "full",
  handleOnChange,
  icon,
  height,
  button,
}: InputFieldProps) => {
  return (
    <div className="w-full my-2 relative">
      {label && (
        <p className="text-base font-medium text-neutral mb-3">{label}</p>
      )}
      <input
        className={`border border-neutral ${
          height && height
        } border-opacity-20 rounded-full ${
          (width === "full" && "w-full") || (width === "half" && "w-1/2")
        } p-2`}
        onChange={(e) => handleOnChange(e)}
        type={type}
        placeholder={placeholder}
      />
      {icon && (
        <Image
          className="w-[24px] absolute top-2 right-3"
          src={icon || ""}
          alt="icon"
        />
      )}
      {button && <div className="  absolute top-0 right-0 p-2.5">{button}</div>}
    </div>
  );
};
