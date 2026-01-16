import Link from "next/link";
import { Heart, ShoppingCart, UserCircle } from "lucide-react";

export default function NavLinks() {

  return (

    <ul className="flex items-center gap-8">
        <li>
          <Link href="/cart">
            <ShoppingCart size={20} />
          </Link>
        </li>

        <li>
            <Link href="/favs">
              <Heart size={20} />
            </Link>
        </li>

        <li>
            <Link href="/login" className="flex items-center gap-2 border px-2 py-1 rounded-md hover:bg-gray-100 transition-colors">
              <UserCircle size={20} />
              Sign In
            </Link>
        </li>
    </ul>

  );
}
