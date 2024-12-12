import classNames from "classnames";
import { Link } from "react-router-dom";

import { IButton, VariantTypes } from "@/lib/types/ui";

import styles from "./styles.module.scss";

const Button = ({
  small,
  variant = "base",
  href,
  className,
  ...props
}: IButton) => {
  return href ? (
    <Link
      to={href}
      className={classNames(
        "flex items-center rounded-[30px] bg-white px-10 font-medium text-black",

        small ? "h-10" : "h-[50px] text-[18px]",

        styles[variant as VariantTypes],

        className
      )}
    >
      {props.children}
    </Link>
  ) : (
    <button
      {...props}
      className={classNames(
        "rounded-[30px] bg-white px-10 font-medium text-black",

        small ? "h-10" : "h-[50px] text-[18px]",

        styles[variant as VariantTypes],

        className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
