import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: Props) => {
  return (
    <div className={classNames("space-y-10 md:space-y-[5.3125rem]", className)}>
      {children}
    </div>
  );
};

export default SectionContainer;
