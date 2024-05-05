import { ComponentProps } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LinkButtonProps extends ComponentProps<"a"> {
  name: string;
}

export default function LinkButton({
  name,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href=""
      className={cn(
        "border border-zinc-800 flex gap-4 p-4 rounded bg-teal-800 text-zinc-100",
        className
      )}
      {...props}
    >
      {name}
    </a>
  );
}
