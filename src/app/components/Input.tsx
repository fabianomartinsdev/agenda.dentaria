import { ComponentProps } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends ComponentProps<"input"> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-12 w-full mt-2 mx-auto p-4 rounded border border-teal-600 outline-none focus:outline-teal-800",
        className
      )}
      {...props}
    />
  );
}
