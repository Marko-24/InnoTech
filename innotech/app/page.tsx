"use client";
import Link from "next/link";
import Image from "next/image";
import {useEffect} from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {PiCheckBold} from "react-icons/pi";
import {Element, scroller} from 'react-scroll';
import {BoxReveal} from "@/components/magicui/box-reveal";
import {NumberTicker} from "@/components/magicui/number-ticker";
import {CoverImpl} from "@/components/implementations/cover-impl";
import InfiniteMovingLogos from "@/components/ui/infinite-moving-logos";
import BoxRevealImpl from "@/components/implementations/box-reveal-impl";
import {WordPullUpImpl} from "@/components/implementations/word-pull-up-impl";
import {AnimatedBeamImpl} from "@/components/implementations/animated-beam-impl";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import {AnimatedShinyTextImpl} from "@/components/implementations/animated-shiny-text-impl";
import {ScrollBasedVelocityImpl} from "@/components/implementations/scroll-based-velocity-impl";
import {ShootingStarsAndStarsBackgroundImpl} from "@/components/implementations/shooting-stars-impl";

const services = [
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description: "Get your website to the top of search engine results with our SEO services."
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    description: "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience."
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description: "Interact with your customers and increase sales with our email marketing services."
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description: "With our content creation services, we help businesses drive results."
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description: "Boost your brand's online presence with our social media marketing services."
  },
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description: "Take your business to the next level with our web design and development services."
  }
];

export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash && hash.includes('#')) {
        const target = hash.replace('#', '');
        scroller.scrollTo(target, {
          duration: 800,
          delay: 100,
          smooth: 'easeInOutQuart',
        });
      }
    }
  }, []);

  return (
    <div className="overflow-clip inset-0 -z-10 min-h-screen w-full items-center text-white [background:radial-gradient(275%_275%_at_50%_10%,#000_16%,#63e_40%)]">
      <Navbar/>
      <main className="flex flex-col items-center justify-center w-full mt-14 px-6 md:pb-10 text-center">
        <div className="w-full max-w-7xl">
          <div className="md:px-10 px-6 xl:w-4/5 2xl:w-[68%] mx-auto">
            <h1>
              <CoverImpl/>
            </h1>
            <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
              Schedule a call with us to discuss your project and get a quote in minutes.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-4 mb-12">
              <Link href={'/meeting'} className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
                <div className="px-10 py-3 md:px-16 md:text-xl bg-black rounded-[6px] relative group
                                transition duration-200 text-white hover:bg-transparent">
                  Book a call
                </div>
              </Link>
              <Link href={"/showcase"} className="lg:flex p-[3px] relative">
                <div className="absolute inset-0 bg-white rounded-lg"/>
                <div className="px-10 py-3 md:px-16 md:text-xl bg-black rounded-[6px] relative group
                                transition duration-200 text-white hover:text-black hover:bg-transparent">
                  Showcase
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center text-left
                            md:justify-items-center mt-10 md:mt-16">
              {["Design", "Development", "Marketing", "Deployment"].map((item, idx) => (
              <BoxReveal key={idx} boxColor={"#667eea"} duration={0.5}>
                <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                  <PiCheckBold className="text-xl text-indigo-500"/>{item}
                </p>
              </BoxReveal>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <AnimatedShinyTextImpl/>
          </div>
          <div className="md:flex items-center text-left justify-between gap-y-4 my-5 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-500 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>
              <div className="flex my-6 gap-x-5 w-full">
                <h1 className="text-indigo-500 text-3xl md:text-5xl">
                  <NumberTicker value={1000} className="text-white"/> +
                  <p className="text-gray-500 text-sm md:text-md">
                    Happy Clients
                  </p>
                </h1>
                <div className="w-px bg-gray-300 self-stretch"/>
                <div className="flex-1 min-w-0">
                  <h1 className="text-indigo-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} className="text-white"/> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>
            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos/>
            </section>
          </div>
        </div>
      </main>
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpImpl/>
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div key={service.title}
                   className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4
                              cursor-pointer hover:scale-105 transition-transform rounded-md">
                <Image src={service.icon}
                       width={10000}
                       height={10000}
                       className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                       alt="image"
                />
                <h1 className="text-xl font-medium text-gray-600">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
      <section className="py-20">
        <ScrollBasedVelocityImpl/>
      </section>
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white">
              Our
            </span>
            <span className="text-indigo-500 flex gap-x-1 items-center">
            <Image src={"/icons/squiggle.svg"}
                   width={10000}
                   height={10000}
                   className="w-6"
                   alt="image"
            />
            Creative
            <Image src={"/icons/star.svg"}
                   width={10000}
                   height={10000}
                   className="w-6 mb-8"
                   alt="image"
            />
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 via-white to-white">
              Process
            </span>
          </h1>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get noticed.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full order-2 md:order-1">
              <AnimatedBeamImpl/>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealImpl/>
            </div>
          </div>
        </main>
      </Element>
      <Element name="guarantees">
        <ShootingStarsAndStarsBackgroundImpl/>
      </Element>
      <section className="my-10 md:py-10 xl:w-4/5 2xl:w-[80%] md:mx-auto">
        <LetsMakeThingsHappenSection/>
      </section>
      <Footer/>
    </div>
  );
}