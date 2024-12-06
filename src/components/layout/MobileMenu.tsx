import { motion } from "framer-motion";

interface IProps {
  isOpen?: boolean;
}

const MobileMenu = ({ isOpen }: IProps) => {
  const style = isOpen ? { opacity: 1 } : { opacity: 0 };

  return (
    <motion.ul
      initial={style}
      animate={style}
      transition={{ type: "spring", duration: 0.2 }}
      className="px-10 w-screen h-screen bg-dark-green divide-y-[.5px] fixed top-0 left-0 z-40 pt-[90px]"
    >
      {Array.from({ length: 3 }).map((item, index) => {
        return (
          <li
            key={index}
            className="py-[50px] text-[30px]"
          >
            Test
          </li>
        );
      })}
    </motion.ul>
  );
};

export default MobileMenu;
