import { IButton, VariantTypes } from "@/lib/types/ui";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Button = ({ small, variant, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={classNames(
        "rounded-[30px] px-6 bg-white text-black font-medium",

        small ? "h-10" : "h-[50px] text-[18px]",

        styles[variant as VariantTypes],
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
