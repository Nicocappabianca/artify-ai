import Link from "next/link";
import { DesktopNavbar, MobileMenu } from "@/components";

const Header = () => {
  return (
    <header className="fixed w-full top-0">
      <div className="container mx-auto py-5 px-5 md:px-0 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Artify
        </Link>
        <DesktopNavbar />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
