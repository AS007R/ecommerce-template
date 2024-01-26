import Image from "next/image";
import Link from "next/link";

type dataType = {
  id: number;
  img: string;
  name: string;
  type: string;
  gender: string;
  price: number;
};
type propType = {
  products: dataType[];
};

const Products = ({ products }: propType) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item: dataType) => (
            <div key={item.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt={item.img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/products/${item.id}`}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {item.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.type}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {item.price}
                </p>
              </div>
            </div>
          ))}

          {/* <!-- More products... --> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
