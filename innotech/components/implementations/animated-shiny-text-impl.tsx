"use client";
import {cn} from "@/lib/utils";
import {FcGoogle} from "react-icons/fc";
import {AnimatedShinyText} from "../magicui/animated-shiny-text";

export function AnimatedShinyTextImpl() {
  return (
    <div className="z-10 flex min-h-16 items-center justify-center">
      <div className={cn("group rounded-full border border-black/5 bg-neutral-100 text-base" +
                         "text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200" +
                         "dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800")}>
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out
                                    hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <div className="md:flex flex-col-reverse md:flex-row justify-between gap-x-1">
            ⭐⭐⭐⭐⭐ 4.9 rating
            <div className="flex items-center space-x-2 py-2 md:py-0">
              <FcGoogle className="h-6 w-6"/>
              <span className="text-gray-600 hover:underline cursor-pointer">
                200+ Google reviews
              </span>
            </div>
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
}