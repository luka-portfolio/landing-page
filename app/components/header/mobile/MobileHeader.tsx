"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useMobileHeaderAnimation } from "@/hooks/useMobileHeaderAnimation";
import MobileSearchBar from "./MobileSearchBar";
import styles from "../Header.module.scss";

export default function MobileHeader() {
  const animations = useMobileHeaderAnimation();

  return (
    <header
      style={{ height: animations.headerHeight }}
      className={`${styles.mobileHeader} fixed top-0 left-0 right-0 z-50 overflow-hidden md:hidden`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Top row */}
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            style={{
              transform: `translateY(${animations.logoTranslateY}px)`,
              opacity: animations.logoOpacity,
            }}
            className="will-change-transform will-change-opacity"
          >
            Luka<span className="text-primary">.Maiss</span>
          </Link>

          <MobileMenu />
        </div>

        {/* Search bar */}
        <MobileSearchBar 
          divStyle={{ transform: `translateY(${animations.searchTranslateY}px)` }} 
          inputStyle={{ maxWidth: `${animations.searchWidth}%` }}
        />
      </div>
    </header>
  );
}
