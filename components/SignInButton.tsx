import { GoogleIcon } from "@/components/icons";
import { Auth, Provider } from "@/utils/firebase-config";
import { signInWithPopup } from "firebase/auth";

const SignInButton = () => {
  const signIn = () => {
    signInWithPopup(Auth, Provider).catch((err) => console.log(err));
  };

  return (
    <button
      onClick={signIn}
      className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-small rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center"
    >
      <GoogleIcon />
      Sign in with Google
    </button>
  );
};

export default SignInButton;
