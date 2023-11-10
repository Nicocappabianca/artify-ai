"use client";
import { GoogleIcon } from "@/components/icons";
import { AuthProviders } from "@/utils/constants";
import { signIn } from "next-auth/react";

const SignInButton = async () => {
  return (
    <button
      onClick={() => signIn(AuthProviders.GOOGLE)}
      className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-small rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center transition active:scale-95"
    >
      <GoogleIcon />
      Sign in with Google
    </button>
  );
};

export default SignInButton;
