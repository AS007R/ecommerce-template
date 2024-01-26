import { Button } from "@/components/ui/button";
import Image from "next/image";

const Promotion = () => {
  return (
    <section>
      <center className="mt-20 mb-10">
        <p className="font-bold text-xs tracking-wider text-[#0062F5]">
          PROMOTIONS
        </p>
        <h3 className="scroll-m-20 text-4xl font-semibold tracking-wide mt-4">
          Our Promotions Events
        </h3>
      </center>
      <div className="my-5 flex flex-col lg:flex-row  w-full gap-8">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex justify-between w-full h-52 bg-[#D6D6D8]">
            <div className=" flex-1 flex flex-col gap-3 justify-center pl-10">
              <h3 className="scroll-m-20 text-3xl font-bold">GET UP TO 60%</h3>
              <p className="text-lg">For the summer season</p>
            </div>
            <div>
              <Image
                src="/event1.webp"
                width={268}
                height={200}
                alt="event 60 % off"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-center w-full h-52 bg-black text-white">
            <h3 className="scroll-m-20 text-3xl font-bold">GET UP TO 60%</h3>
            <p className="text-lg">For the summer season</p>
            <Button
              size="sm"
              className="bg-[#474747] w-64 text-lg font-bold tracking-wider"
            >
              DINE WEEKEND SALE
            </Button>
          </div>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row space-y-3 sm:space-y-0 gap-5">
          <div className="flex flex-col items-center h-[436px] flex-1 bg-[#EFE1C7] px-3 py-6">
            <div className="w-full">
              <p>Flex Sweatshirt</p>
              <p className="font-bold">
                <span className="font-normal line-through ">$100.00</span>{" "}
                $75.00
              </p>
            </div>
            <Image
              src="/event2.webp"
              width={268}
              height={200}
              alt="event 60 % off"
              className="mt-5"
            />
          </div>
          <div className="h-[436px] flex flex-col items-center flex-1 bg-[#D7D7D9] py-6 px-3">
            <div className="w-full">
              <p>Flex Push Button Bomber</p>
              <p className="font-bold">
                <span className="font-normal line-through ">$225.00</span>{" "}
                $190.00
              </p>
            </div>
            <Image
              src="/event3.webp"
              width={268}
              height={200}
              alt="event 60 % off"
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
