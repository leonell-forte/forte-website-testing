import { ButtonHTMLAttributes, ReactNode } from "react";
import { CarouselItem } from "./components";

export type VariantTypes = "mint";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;

  variant?: VariantTypes;

  href?: string;
}

export interface ICarousel {
  className?: string;

  items: CarouselItem[];

  background?: string;
}
