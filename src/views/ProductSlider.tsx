import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type dataType = {
  id: number;
  img: string;
  name: string;
  type: string;
  gender: string;
  price: number;
};
type propData = {
  data: dataType[];
};

const ProductSlider = ({ data }: propData) => {
  return (
    <section className="mb-10">
      <center className="mt-20 mb-10">
        <p className="font-bold text-xs tracking-wider text-[#0062F5]">
          PRODUCTS
        </p>
        <h3 className="scroll-m-20 text-4xl font-semibold tracking-wide mt-4">
          Check What We Have
        </h3>
      </center>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((d: dataType) => (
            <CarouselItem key={d.id} className="md:basis-1/2 lg:basis-1/3">
              <div>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <div className="">
                      <div className="w-[300px] cursor-pointer rounded-lg bg-white  shadow duration-150 hover:scale-105 hover:shadow-md">
                        <Image
                          src={d.img}
                          width={400}
                          height={90}
                          alt="Picture of the author"
                        />
                        <p className="my-4 pl-4 font-bold text-Black">
                          {d.name}
                        </p>
                        <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                          ${d.price}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default ProductSlider;
