import { ButtonHTMLAttributes, FC } from "react";

const buttonClassNames =
  "bg-slate-400 rounded-md text-slate-900 border border-slate-900 py-1 px-1.5 hover:bg-slate-900 hover:text-slate-400 hover:border hover:border-slate-400 transition active:scale-95 disabled:opacity-40 disabled:pointer-events-none";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} className={`${buttonClassNames} ${props.className || ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
