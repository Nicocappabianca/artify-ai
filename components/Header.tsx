import Link from "next/link";
import { Navbar, MobileMenu, SignInButton } from "@/components";
import { NavLinks } from "@/utils/constants";
import { getServerSession } from "next-auth";

const Header = async () => {
  const session = await getServerSession();

  return (
    <header className="fixed w-full top-0 z-10 bg-slate-900">
      <div className="container mx-auto py-5 px-5 md:px-0 flex justify-between items-center">
        <Link href={NavLinks.HOME} className="font-semibold text-2xl sm:text-3xl text-artify">
          Artify
        </Link>
        {!session?.user ? (
          <SignInButton />
        ) : (
          <>
            <div className="hidden sm:block">
              <Navbar />
            </div>
            <div className="block sm:hidden">
              <MobileMenu />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
