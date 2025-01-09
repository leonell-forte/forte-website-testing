import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { HiCheckCircle as Check, HiXCircle as X } from "react-icons/hi";

import { cn } from "@/lib/utilities/cn";

export type MessageType = "success" | "error";

interface MessageState {
  show: boolean;
  type: MessageType;
  text: string;
}

type TToast = {
  type: MessageType;
  text: string;
};

const icons = {
  success: Check,
  error: X,
};

const colors = {
  success: "bg-[#2EA576]",
  error: "bg-[#651A1A]",
};

export function InlineToast({ type, text = "Your message was sent!" }: TToast) {
  const Icon = icons[type];
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={cn(
        "absolute bottom-0 left-0 right-0 flex w-full items-center justify-center space-x-2 rounded-md py-4 pl-6 pr-7 text-white shadow-lg md:left-28 md:max-w-fit",
        colors[type]
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </motion.div>
  );
}

export function useMessage() {
  const [messageState, setMessageState] = useState<MessageState>({
    show: false,
    type: "success",
    text: "",
  });

  const showMessage = useCallback(
    (text: string, type: MessageType = "success", duration: number = 4000) => {
      setMessageState({ show: true, type, text });
      setTimeout(
        () => setMessageState((prev) => ({ ...prev, show: false })),
        duration
      );
    },
    []
  );

  return { messageState, showMessage };
}
