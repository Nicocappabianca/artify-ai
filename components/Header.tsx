"use client";
import Link from "next/link";
import { Navbar, MobileMenu, SignInButton } from "@/components";

const Header = () => {
  // TO DO: implement this with next auth
  const user = false;

  return (
    <header className="fixed w-full top-0">
      <div className="container mx-auto py-5 px-5 md:px-0 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Artify
        </Link>
        {!user ? (
          <SignInButton />
        ) : (
          <>
            <Navbar />
            <MobileMenu />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
