import React from "react";
import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section className="my-10 md:py-20 md:mx-auto bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium text-black">
          Let&apos;s make things happen.
        </p>
        <p className="my-10 text-xl text-black">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 mb-12">
          <Link href={'/meeting'} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
            <div className="px-10 py-3 md:px-16 md:text-xl bg-black rounded-[7px] relative group transition duration-200 text-white hover:bg-transparent">
              Book a call
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute top-12 right-8 hidden md:block">
        <Image src="/images/proposal_illustration.png"
               alt="proposal illustration"
               width={300}
               height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;