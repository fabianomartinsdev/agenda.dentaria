import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  name: string;
}

export default function Button({ name, ...props }: ButtonProps) {
  return (
    <button className="h-8 bg-teal-800 rounded mt-1 text-zinc-200" {...props}>
      {name}
    </button>
  );
}
