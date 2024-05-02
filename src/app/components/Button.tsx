import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  name: string;
}

export default function Button({ name, ...props }: ButtonProps) {
  return <button {...props}>{name}</button>;
}
