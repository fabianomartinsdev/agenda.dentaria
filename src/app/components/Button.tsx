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
      className={cn("h-8 bg-teal-800 rounded mt-1 text-zinc-200", className)}
      {...props}
    >
      {children}
    </button>
  );
}
