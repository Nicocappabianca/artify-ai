import { GoogleIcon } from "@/components/icons";

const SignInButton = () => {
  return (
    <button
      type="button"
      className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-small rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
    >
      <GoogleIcon />
      Sign in with Google
    </button>
  );
};

export default SignInButton;
