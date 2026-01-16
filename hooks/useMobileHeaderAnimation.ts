"use client";

import { useEffect, useState } from "react";

// Constants
const MAX_SCROLL = 60;
const HEADER_MAX_HEIGHT = 112;

const SEARCH_WIDTH = {
  min: 85,
  max: 100,
};

export function useMobileHeaderAnimation() {
  const [scrollY, setScrollY] = useState(0);

  // Scroll tracking
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Derived values
  const progress = Math.min(scrollY, MAX_SCROLL);

  return {
    headerHeight: HEADER_MAX_HEIGHT - progress,
    logoTranslateY: -(progress * 0.5),
    logoOpacity: 1 - progress / MAX_SCROLL,
    searchTranslateY: -(progress * 0.8),
    searchWidth:
      SEARCH_WIDTH.max -
      (progress / MAX_SCROLL) *
        (SEARCH_WIDTH.max - SEARCH_WIDTH.min),
  };
}
