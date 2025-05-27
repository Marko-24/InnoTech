import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {WordFadeIn} from "@/components/ui/word-fade-in";
import {BlurFadeImpl} from "@/components/implementations/blur-fade-impl";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const Showcase = () => {
  return (
    <div className="overflow-clip inset-0 -z-10 min-h-screen w-full items-center text-white [background:radial-gradient(275%_275%_at_50%_10%,#000_16%,#63e_40%)]">
      <Navbar/>
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn className="text-3xl pt-20 text-white lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20"
                      words="Design & Code That Helps Your Business Grow"/>
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          Have a look at some of our recent projects.
        </p>
        <BlurFadeImpl/>
      </section>
      <section className="my-10 md:py-10 xl:w-4/5 2xl:w-[80%] md:mx-auto">
        <LetsMakeThingsHappenSection/>
      </section>
      <Footer/>
    </div>
  );
};

export default Showcase;