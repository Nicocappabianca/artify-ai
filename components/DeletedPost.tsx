import { NavLinks } from "@/utils/constants";
import Link from "next/link";

const DeletedPost = () => {
  return (
    <>
      <h2 className="text-xl font-semibold">Post Deleted Successfully! ✅</h2>
      <p className="pt-2 max-w-xl mx-auto">
        The creative journey continues! Your post has been successfully deleted. What's next?
      </p>
      <div className="mt-6 justify-center flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <Link
          className="bg-slate-900 rounded-md text-slate-400 border border-slate-400 py-2 px-2.5 hover:bg-slate-700 hover:text-white hover:border hover:border-slate-700 transition"
          href={NavLinks.HOME}
        >
          Explore Home 🖼️
        </Link>
        <Link
          className="bg-slate-900 rounded-md text-slate-400 border border-slate-400 py-2 px-2.5 hover:bg-slate-700 hover:text-white hover:border hover:border-slate-700 transition"
          href={NavLinks.GENERATE}
        >
          Generate New Art 🎨
        </Link>
      </div>
    </>
  );
};

export default DeletedPost;
