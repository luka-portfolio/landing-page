import { CircleUser, Heart, House, Percent, ShoppingCart } from "lucide-react";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  return (
    <nav className={`sticky md:hidden bottom-0 z-50 bg-white ${styles.nav}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between md:justify-around">
            {/* Mobile navigation content goes here */}
            <button className="flex flex-col justify-between items-center p-2 rounded-full">
                <House size={24} />
                Home
            </button>

            <button className="flex flex-col justify-between items-center p-2 rounded-full">
                <ShoppingCart size={24} />
                Cart
            </button>

            <button className="flex flex-col justify-between items-center p-2 rounded-full">
                <Percent size={24} />
                Sales
            </button>

            <button className="flex flex-col justify-between items-center p-2 rounded-full">
                <Heart size={24} />
                Saved
            </button>

            <button className="flex flex-col justify-between items-center p-2 rounded-full">
                <CircleUser size={24} />
                Login
            </button>
        </div>
      </div>
    </nav>
  )
}

export default MobileNav