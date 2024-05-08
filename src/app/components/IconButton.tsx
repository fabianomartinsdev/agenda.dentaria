import { ComponentProps, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex gap-4 p-4 rounded bg-teal-800 text-zinc-100 hover:bg-teal-700 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
