import styles from "../Header.module.scss";
import { Search } from 'lucide-react';


const SearchBar = () => {
  return (
    <div className="flex justify-between items-center outline-none border border-gray-300 rounded-md px-3 py-1">
      <Search size={24} />
      <input className={`${styles.searchBar}`} type="text" name="search" placeholder="Search" />
    </div>
  )
}

export default SearchBar