import { ComponentProps } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ComponentProps<"button"> {
  name: string;
}

export default function Button({ name, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn("h-8 bg-teal-800 rounded mt-1 text-zinc-200", className)}
      {...props}
    >
      {name}
    </button>
  );
}
