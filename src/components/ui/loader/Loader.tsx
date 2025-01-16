import { motion } from "framer-motion";

import forte from "@/assets/images/icons/forte.png";

export default function Loader() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(205.47deg, #2BAA83 8.69%, #0C423D 46.73%, #00090D 80.96%)",
      }}
    >
      <div className="relative aspect-[3/1] w-full max-w-[200px]">
        <motion.img
          src={forte}
          alt="Forte Logo"
          className="h-full w-full object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-5 left-0 right-0 h-1 rounded-full bg-mint"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
