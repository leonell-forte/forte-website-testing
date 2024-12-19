import {
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  TranslationContext,
  TranslationContextType,
} from "@/components/TranslationProvider";

import { Languages } from "./types/languages";

const BREAKPOINTS = {
  mobile: 768, // Anything less than 768px is considered mobile

  tablet: 1024, // Anything between 768px and 1024px is considered tablet
};

export const useScreenSize = () => {
  // Initialize the screen width state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the screen size categories
  const isMobile = screenWidth <= BREAKPOINTS.mobile;

  const isTablet =
    screenWidth > BREAKPOINTS.mobile && screenWidth <= BREAKPOINTS.tablet;

  const isDesktop = screenWidth > BREAKPOINTS.tablet;

  return { isMobile, isTablet, isDesktop };
};

export const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,

  callBack: () => void
) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callBack();
      }
    },

    [ref, callBack] // Depend on ref and callBack to ensure stability
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return null;
};

export const useEscapeKey = (callback: () => void): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
};

interface IResponsivePadding {
  mobilePadding: string;

  tabletPadding: string;

  desktopPadding: string;
}

export const useResponsivePadding = ({
  mobilePadding,

  tabletPadding,

  desktopPadding,
}: IResponsivePadding) => {
  const { isMobile, isDesktop, isTablet } = useScreenSize();

  let padding = "";

  if (isMobile) padding = mobilePadding;

  if (isTablet) padding = tabletPadding;

  if (isDesktop) padding = desktopPadding;

  return { padding };
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);

  return context as TranslationContextType;
};
