import { Card, CardContent } from "@/components/ui/card";

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
      <center className="flex overflow-hidden p-5 gap-3 logos">
        {data.map((d: dataType) => (
          <div key={d.id} className="md:basis-1/2 lg:basis-1/3 logos-slide">
            <div>
              <Card className="shadow duration-150 hover:scale-105 hover:shadow-md">
                <CardContent className="flex items-center justify-center">
                  <div className="">
                    <div
                      className="w-[300px] mt-5 px-2 cursor-pointer rounded-lg bg-white  
                    "
                    >
                      <Image
                        src={d.img}
                        width={400}
                        height={90}
                        alt="Picture of the author"
                      />
                      <p className="my-4 pl-4 font-bold text-Black">{d.name}</p>
                      <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                        ${d.price}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </center>
    </section>
  );
};

export default ProductSlider;
