"use client";

import { ChangeEvent } from "react";

export interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  width?: string;
  icon?: string;
  height?: string;
  button?: JSX.Element;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
