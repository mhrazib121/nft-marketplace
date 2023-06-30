import { ITextAndFont } from "./ICommon";

export interface ITitle {
  position?: "start" | "center" | "end";
  title: string | JSX.Element;
  subText?: string | JSX.Element | boolean;
  about?: boolean;
  text?: "sm" | "md" | "lg";
}
