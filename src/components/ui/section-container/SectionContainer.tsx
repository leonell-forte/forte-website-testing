import classNames from "classnames";
import { ReactNode } from "react";

import { cn } from "@/lib/utilities/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: Props) => {
  return (
    <div className={cn("space-y-10 md:space-y-[5.3125rem]", className)}>
      {children}
    </div>
  );
};

export default SectionContainer;
