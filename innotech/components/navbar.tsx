'use client';
import Link from "next/link";
import Image from "next/image";
import {scroller} from "react-scroll";
import {usePathname, useRouter} from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (section: string) => {
    if (pathname === "/") {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 100,
        smooth: "easeInOutQuart",
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <div className="overflow-hidden top-0 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-full flex items-center
                    justify-between py-4 md:px-24 mx-6 bg-black">
      <Link href={"/"}>
        <Image src={'/logo/logo-no-background.png'} alt="Logo" width={1000} height={1000} className="w-32"/>
      </Link>
      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-400 font-medium text-lg cursor-pointer">
          <Link href={"/showcase"} className="hover:text-indigo-500">
            Showcase
          </Link>
          <span onClick={() => handleScroll("services")} className="hover:text-indigo-500">Services</span>
          <span onClick={() => handleScroll("process")} className="hover:text-indigo-500">Process</span>
          <span onClick={() => handleScroll("guarantees")} className="hover:text-indigo-500">Guarantees</span>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <a href="tel:070407750" className="hidden lg:flex p-[3px] relative">
          <div className="absolute inset-0 bg-white rounded-lg"/>
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200
                        text-white hover:text-black hover:bg-transparent">
            +389 70 407 750
          </div>
        </a>
        <Link href={'/meeting'} className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200
                        text-white hover:bg-transparent">
            Book a call
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;