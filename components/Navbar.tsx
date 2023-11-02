import { FC } from "react";
import Link from "next/link";

interface NavbarProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const navbarClassNames = {
  mobile: "min-w-[14rem] space-y-4 py-2 font-medium flex flex-col sm:hidden",
  desktop: "space-x-8 hidden sm:flex font-medium",
};

enum NAV_LINK {
  generate = "/generate",
  gallery = "/gallery",
}

const Navbar: FC<NavbarProps> = ({ isMobile, closeMenu }) => {
  return (
    <nav>
      <ul className={navbarClassNames[isMobile ? "mobile" : "desktop"]}>
        <li className="hover:text-slate-200">
          <Link href={NAV_LINK.generate} onClick={closeMenu}>
            ✨ Let's Generate Art! ✨
          </Link>
        </li>
        <li className="hover:text-slate-200">
          <Link href={NAV_LINK.gallery} onClick={closeMenu}>
            My Gallery 🖼️
          </Link>
        </li>
        <li className="text-red-500 hover:text-red-400">
          <button>Sign Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
