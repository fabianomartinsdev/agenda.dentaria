import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className="h-12 w-full mt-2 mx-auto p-4 rounded border border-teal-600 outline-none focus:outline-teal-800"
      {...props}
    />
  );
}
