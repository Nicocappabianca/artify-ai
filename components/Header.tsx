"use client";
import Link from "next/link";
import { Navbar, MobileMenu, SignInButton } from "@/components";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "@/utils/firebase-config";

const Header = () => {
  const [user] = useAuthState(Auth);

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
