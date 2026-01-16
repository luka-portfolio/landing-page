// "use client"
// import styles from "./Header.module.scss";
import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";

export default function Header() { 
  return (
    // <header className={` fixed left-0 end-0 top-0 z-50 bg-white ${styles.header}`}>
    //   <div className="mx-auto max-w-7xl px-4">
    //     <div className="flex items-center justify-between md:justify-around">
    <>
      {/* Desktop */}
      <div className="hidden md:flex w-full">
        <DesktopHeader />
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full">
        <MobileHeader />
      </div>
    </>
          
    //     </div>
    //   </div>
    // </header>
  );
}
