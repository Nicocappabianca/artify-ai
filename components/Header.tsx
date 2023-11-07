import Link from "next/link";
import { Navbar, MobileMenu, SignInButton } from "@/components";
import { getServerSession } from "next-auth";

const Header = async () => {
  const session = await getServerSession();

  return (
    <header className="fixed w-full top-0">
      <div className="container mx-auto py-5 px-5 md:px-0 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
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
