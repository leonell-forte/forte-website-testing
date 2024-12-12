import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Menus } from "@/lib/types/layout";

interface IProps {
  isOpen?: boolean;

  menus: Menus[];

  handleClick?: () => void;
}

const MobileMenu = ({ menus, isOpen, handleClick }: IProps) => {
  const style = isOpen
    ? { opacity: 1, display: "block" }
    : { opacity: 0, display: "none" };

  return (
    <motion.div
      initial={style}
      animate={style}
      transition={{ type: "spring", duration: 0.2 }}
      className="fixed left-0 top-0 z-40 h-screen w-screen bg-dark-green px-10 pt-[170px]"
    >
      <ul className="border-t">
        {menus?.map((item, index) => {
          const { label, link } = item;

          return (
            <Link key={index} to={link} onClick={handleClick}>
              <li className="border-b py-[50px] text-[30px]">{label}</li>
            </Link>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
