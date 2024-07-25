import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  twMerge(clsx(inputs));
}
