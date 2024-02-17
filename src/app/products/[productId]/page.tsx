"use client";
import Image from "next/image";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

type dataType = {
  id: number;
  img: string;
  name: string;
  type: string;
  gender: string;
  price: number;
};

const products: dataType[] = [
  {
    id: 1,
    img: "/products/p1.png",
    name: "Brushed Raglan Sweatshirt",
    type: "Sweater",
    gender: "f",
    price: 195,
  },
  {
    id: 2,
    img: "/products/p2.png",
    name: "Cameryn Sash Tie Dress",
    type: "Dress",
    gender: "f",
    price: 545,
  },
  {
    id: 3,
    img: "/products/p3.png",
    name: "Flex Sweatshirt",
    type: "Sweater",
    gender: "f",
    price: 175,
  },
  {
    id: 4,
    img: "/products/p4.png",
    name: "Flex Sweatpants",
    type: "Pants",
    gender: "f",
    price: 175,
  },
  {
    id: 5,
    img: "/products/p5.png",
    name: "Pink Fleece Sweatpants",
    type: "Pants",
    gender: "f",
    price: 195,
  },
  {
    id: 6,
    img: "/products/p6.png",
    name: "Lite Sweatpants",
    type: "Pants",
    gender: "f",
    price: 150,
  },
  {
    id: 7,
    img: "/products/p7.png",
    name: "Imperial Alpaca Hoodie",
    type: "Jackets",
    gender: "f",
    price: 525,
  },
  {
    id: 8,
    img: "/products/p8.png",
    name: "Flex Push Button Bomber",
    type: "Jackets",
    gender: "m",
    price: 225,
  },
  {
    id: 9,
    img: "/products/p9.png",
    name: "Muscle Tank",
    type: "T Shirts",
    gender: "f",
    price: 75,
  },
  {
    id: 10,
    img: "/products/p10.png",
    name: "Brushed Bomber",
    type: "Jackets",
    gender: "f",
    price: 225,
  },
  {
    id: 11,
    img: "/products/p11.png",
    name: "Raglan Sweatshirt",
    type: "Sweater",
    gender: "m",
    price: 195,
  },
];

const ProductDetail = ({ params }: { params: { productId: string } }) => {
  const id: number = Number(params.productId);
  const product: dataType = products[id - 1];

  const [quantity, setQuantity] = useState(1);
  const handleInc = () => {
    setQuantity(quantity + 1);
  };
  const handleDec = () => {
    if (quantity <= 1) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <section className="flex flex-col lg:flex-row bg-gray-100 lg:h-[600px] min-h-[600px] w-full">
        <div className="flex lg:w-2/3">
          <div className="h-full w-16  md:w-40 ">
            <Image
              src={product.img}
              width={100}
              height={100}
              alt="Png"
              className="m-3 mt-7 md:m-7"
            />
            <Image
              src={product.img}
              width={100}
              height={100}
              alt="Png"
              className="m-3 mt-7 md:m-7"
            />

            <Image
              src={product.img}
              width={100}
              height={100}
              alt="Png"
              className="m-3 mt-7 md:m-7"
            />
          </div>
          <div className="h-full  w-full p-7">
            <Image
              src={product.img}
              width={700}
              height={100}
              alt="Png"
              className=" lg:w-[80%] w-[90%] "
            />
          </div>
        </div>
        <div className="md:py-20 pb-3">
          <div className="">
            <h2 className="scroll-m-20 pb-2 text-3xl tracking-wider  first:mt-0">
              {product.name}
            </h2>
            <h3 className="scroll-m-20 text-gray-400 text-2xl font-semibold">
              {product.type}
            </h3>
          </div>
          <div className="md:mt-10 mt-5">
            <h4 className="scroll-m-20 text-md font-bold tracking-wider">
              SELECT SIZE
            </h4>
            <ToggleGroup type="single" className="justify-start">
              <ToggleGroupItem
                value="italic"
                aria-label="Toggle italic"
                className="hover:bg-white rounded-full hover:shadow-xl text-center"
              >
                <p className="h-4  text-md w-4 font-bold">SM</p>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="italic"
                aria-label="Toggle italic"
                className="hover:bg-white rounded-full hover:shadow-xl"
              >
                <p className="h-4  text-md w-4 font-bold">S</p>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="underline"
                aria-label="Toggle underline"
                className="hover:bg-white rounded-full hover:shadow-xl"
              >
                <p className="h-4  text-md w-4 font-bold">M</p>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="underline"
                aria-label="Toggle underline"
                className="hover:bg-white rounded-full hover:shadow-xl"
              >
                <p className="h-4  text-md w-4 font-bold">L</p>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="underline"
                aria-label="Toggle underline"
                className="hover:bg-white rounded-full hover:shadow-xl"
              >
                <p className="h-4  text-md w-4 font-bold">XL</p>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="md:mt-10 mt-5 flex items-center gap-3">
            <h4 className="scroll-m-20 text-lg mr-6 font-extrabold tracking-wider">
              Quantity:
            </h4>
            <Button
              variant="outline"
              size="icon"
              onClick={handleDec}
              className="bg-transparent border-black border-2 rounded-full text-xl "
            >
              -
            </Button>
            <p className="text-xl">{quantity}</p>
            <Button
              variant="outline"
              size="icon"
              onClick={handleInc}
              className="bg-transparent border-black border-2 rounded-full text-xl "
            >
              +
            </Button>
          </div>
          <div className="flex gap-5 md:mt-10 mt-5 items-center">
            <Button className="h-10 px-4 rounded-none">
              <ShoppingCart className="mr-2" />
              Start Shopping
            </Button>
            <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
              ${product.price}
            </h2>
          </div>
        </div>
      </section>
      <section className="lg:h-[500px] min-h-[500px] bg-gray-100 my-6 md:p-7 p-3">
        <div className="border-gray-300 border-b-2 relative flex items-center">
          <h3 className="absolute  scroll-m-20 text-2xl font-semibold tracking-tight">
            Product Information
          </h3>
          <h1 className="  scroll-m-20 text-4xl text-gray-200 font-extrabold tracking-tight lg:text-8xl">
            Owerview
          </h1>
        </div>
        <div className="flex w-full mt-5 md:mt-10">
          <div className="w-1/3">
            <h3 className="scroll-m-20 text-lg text-gray-500 font-semibold tracking-wide">
              PRODUCT DETAILS
            </h3>
          </div>
          <div className=" w-2/3">
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="flex w-full mt-5 md:mt-10">
          <div className="w-1/3">
            <h3 className="scroll-m-20 text-lg text-gray-500 font-semibold tracking-wide">
              PRODUCT CARE
            </h3>
          </div>
          <div className=" w-2/3">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>consectetur adipiscing elit</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
