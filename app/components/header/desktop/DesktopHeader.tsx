import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import Dropdown from "../../ui/dropDownButton/DropDownButton";
import styles from "../Header.module.scss";
import { categories } from "@/data/categories";

const DesktopHeader = () => {
  return (
    <header className={`fixed left-0 end-0 top-0 z-50 bg-white ${styles.header}`}>
        <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between md:justify-around">
                <div className="flex w-full items-center justify-between h-16">
                
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-gray-900"
                >
                    Luka.Maiss
                </Link>

                {/* Categories */}
                <Dropdown name="Categories" categories={categories} />

                {/* Search */}
                <SearchBar />

                {/* Nav */}
                <nav>
                    <NavLinks />
                </nav>

                </div>

            </div>  
        </div>
    </header>
  )
}

export default DesktopHeader