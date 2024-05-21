import { NavLinks } from "@/utils/constants";
import Link from "next/link";

const NoPostFound = () => {
  return (
    <>
      <h2 className="text-xl font-semibold">The requested image couldn't be found 😰</h2>
      <p className="pt-2">But don't worry, there's a world of creativity waiting for you!</p>
      <div className="mt-6 justify-center flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <Link
          className="bg-slate-900 rounded-md text-slate-400 border border-slate-400 py-2 px-2.5 hover:bg-slate-700 hover:text-white hover:border hover:border-slate-700 transition"
          href={NavLinks.HOME}
        >
          Explore More Inspiring Creations 🖼️
        </Link>
        <Link
          className="bg-slate-900 rounded-md text-slate-400 border border-slate-400 py-2 px-2.5 hover:bg-slate-700 hover:text-white hover:border hover:border-slate-700 transition"
          href={NavLinks.GENERATE}
        >
          Create Your Own Masterpiece 🎨
        </Link>
      </div>
    </>
  );
};

export default NoPostFound;
