import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Home", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Merch", href: "#" },
  { name: "Contact", href: "#" },
]