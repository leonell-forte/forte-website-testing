import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import mainBg from "@/assets/images/main-bg.png";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "circIn",
      }}
      style={{
        background:
          "linear-gradient(205.47deg, #2BAA83 8.69%, #0C423D 46.73%, #00090D 80.96%)",
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
