import React, { ReactNode, createContext, useEffect, useState } from "react";

import { Languages } from "@/lib/types/languages";

export interface TranslationContextType {
  translation: Languages;

  setTranslation: (lang: Languages) => void;
}

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);

const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [translation, setTranslation] = useState(() => {
    const storedTranslation = sessionStorage.getItem("translation");

    return (storedTranslation as Languages) || "en";
  });

  useEffect(() => {
    sessionStorage.setItem("translation", translation);
  }, [translation]);

  return (
    <TranslationContext.Provider value={{ translation, setTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
