import { ButtonHTMLAttributes } from "react";

export type VariantTypes = "mint";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;

  variant?: VariantTypes;
}
