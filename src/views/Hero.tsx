import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className="Hero relative py-14 lg:h-[85vh] ">
      <div className="ContentArea  m-auto h-full flex gap-10 items-center justify-center">
        <div className="flex-1 ">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-5 py-2 text-base font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Sale 70%
          </span>
          <h1 className="scroll-m-20 text-5xl font-bold mt-7 tracking-wider lg:text-5xl">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 max-w-[400px] [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className="h-14 px-7 mt-7 rounded-none">
            <ShoppingCart className="mr-2" />
            Start SHopping
          </Button>
          <div className=" flex gap-8 mt-14">
            <Image
              src="/hl1.webp"
              width={100}
              height={90}
              alt="Picture of the author"
            />
            <Image
              src="/hl2.webp"
              width={100}
              height={90}
              alt="Picture of the author"
            />
            <Image
              src="/hl3.webp"
              width={100}
              height={90}
              alt="Picture of the author"
            />
            <Image
              src="/hl4.webp"
              width={100}
              height={90}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex-1 hidden lg:flex justify-center ">
          <div className="  bg-pink-100 w-[500px] h-[500px] rounded-full">
            <Image
              src="/products/hero.webp"
              width={600}
              height={90}
              alt="Picture of the author"
              className="absolute top-0 -translate-x-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
