import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Quality = () => {
  return (
    <section className="my-10">
      <h2 className="m-auto text-center lg:w-[800px] scroll-m-20 border-b pb-2 lg:text-5xl md:text-3xl text-2xl font-bold tracking-wider first:mt-0">
        Unique and Authentic Vintage Designer Jewellery
      </h2>
      <div className="flex flex-col lg:flex-row mt-5 relative">
        <h3 className=" absolute text-gray-200 -z-10 top-1 text-8xl w-36 font-extrabold tracking-widest">
          Different from others
        </h3>
        <div className="lg:flex-1 my-3 flex flex-wrap lg:gap-10 justify-between">
          <div className="lg:w-[35%] w-[40%] p-0 lg:pr-3 mb-7">
            <h3 className="text-lg mb-2 font-bold tracking-wide">
              Using Good Quality Materials
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:w-[35%] w-[40%] pr-3 mb-7">
            <h3 className="text-lg mb-2 font-bold tracking-wide">
              Modern Fashion Design
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:w-[35%] w-[40%] pr-3 mb-7">
            <h3 className="text-lg mb-2 font-bold tracking-wide">
              100% Handmade Products
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="lg:w-[35%] w-[40%] pr-3 mb-7">
            <h3 className="text-lg mb-2 font-bold tracking-wide">
              Discount for Bulk Orders
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col md:flex-row gap-8">
          <Image
            src="/feature.webp"
            width={270}
            height={90}
            alt="Picture of the author"
            className="m-auto"
          />
          <div className="flex-1 flex flex-col justify-center gap-4">
            <p className="text-justify">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href="/products">
              <Button className="w-44 rounded-none">See All Products</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
