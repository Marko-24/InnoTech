import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-10 px-6 md:px-0 md:mx-auto">
      <div className="flex flex-col justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium">
          <Image src={"/logo/logo-no-background.png"}
                 width={10000}
                 height={10000}
                 className="w-40"
                 alt="image"
          />
        </h1>
        <a href="tel:070407750" className="text-left text-xl text-gray-500 mt-3 -mb-2">
          +389 70 407 750
        </a>
        <p className="text-left text-xl text-gray-500">
          markostojkovski5@gmail.com
        </p>
      </div>
      <div className="flex md:justify-center mt-10 text-white">©2025 InnoTech. All Rights Reserved.</div>
      <div className="flex md:justify-center mt-2">
        <Link href="/" className="text-blue-500">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;