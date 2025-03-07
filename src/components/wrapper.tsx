import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iWrapper {
  className?: string;
  children: ReactNode;
}

export function Wrapper({ children, className }: iWrapper) {
  return (
    <div className={twMerge(className, "w-screen max-w-[1280px] px-4 m-auto")}>
      {children}
    </div>
  );
}
