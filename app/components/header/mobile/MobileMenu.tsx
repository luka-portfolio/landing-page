"use client";

import { useState } from "react";
import styles from "../Header.module.scss";
import { Menu } from "lucide-react"; 
import MobileCategories from "./MobileCategories";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center border-none cursor-pointer"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div className={`absolute top-16 right-4 w-[200px] p-4 ${styles.mobileMenu}`}>
          <MobileCategories />
        </div>
      )}
    </>
  );
}
