import Products from "@/components/products";
import Image from "next/image";

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

const Child = () => {
  const childProd: dataType[] = products.filter(
    (item: dataType) => item.gender === "c"
  );
  return <Products products={childProd} />;
};

export default Child;
