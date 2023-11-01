"use client";
import { SignInButton } from "@/components";
import { Auth } from "@/utils/firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Link from "next/link";

const DesktopNavbar = () => {
  const [user] = useAuthState(Auth);

  const logout = async () => {
    await signOut(Auth);
  };

  return (
    <nav>
      <ul className="space-x-4 hidden sm:flex">
        {user ? (
          <>
            <li>
              <Link href="/">Generate</Link>
            </li>
            <li>
              <Link href="/">My Creations</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <SignInButton />
        )}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
