
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";


const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export function Nav() {
  return (
    <div className="h-14 py-2 px-2 md:px-8 border-b flex items-center">
      <div className="flex flex-1 items-center">
        <Link href="/">
          <h1 className={cn("font-light text-xl", spaceMono.className)}>
            <span className="text-pink-700">Image-to-text Generator</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-none items-center space-x-4">
        <Link href="https://github.com/Aprajita-byte/Brainwave_Matrix_Intern/tree/main/Text-to-Image-Generator">
          <h1 className={cn("font-light text-xl", spaceMono.className)}>
            <span className="text-pink-700">By Aprajita Sharma</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
