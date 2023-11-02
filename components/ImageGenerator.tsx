import { PlayIcon } from "@/components/icons";

const ImageGenerator = () => {
  return (
    <div className="w-[50rem] max-w-full mx-auto relative">
      <textarea
        className="w-full min-h-[8rem] bg-transparent placeholder-slate-600 text-white border border-slate-400 rounded-md p-2 pr-14 no-scrollbar outline-none"
        placeholder="Enter your creative prompt here..."
      />
      <button className="absolute bottom-4 right-3 bg-slate-400 rounded-md text-slate-900 border border-slate-900 py-1 px-1.5 hover:bg-slate-900 hover:text-slate-400 hover:border hover:border-slate-400 transition active:scale-95">
        <PlayIcon />
      </button>
    </div>
  );
};

export default ImageGenerator;
