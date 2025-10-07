import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Button({ variant = "solid", className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const style =
    variant === "solid"
      ? "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600"
      : variant === "outline"
      ? "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-600"
      : "text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-600";
  return <button className={clsx(base, style, className)} {...props} />;
}
