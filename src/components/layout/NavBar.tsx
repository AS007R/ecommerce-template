"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className=" mx-auto max-w-[1345px] px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className=" absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setOpen(!open)}
            >
              {/* <!--Icon when menu is closed--> */}
              {open ? <X /> : <Menu />}

              {/* <!--Icon when menu is open.--> */}
            </button>
          </div>
          <div className="  flex gap-7 items-center justify-center w-full sm:w-auto sm:items-stretch sm:justify-start">
            <div className=" flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  src="/Logo.webp"
                  width={150}
                  height={90}
                  alt="Picture of the author"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex md:space-x-3 space-x-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link
                href="/men"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm lg:text-lg font-medium"
                aria-current="page"
              >
                Men
              </Link>
              <Link
                href="/women"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm lg:text-lg font-medium"
              >
                Women
              </Link>
              <Link
                href="/child"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm lg:text-lg font-medium"
              >
                Childern
              </Link>
              <Link
                href="/products"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm lg:text-lg font-medium"
              >
                All Products
              </Link>
            </div>
          </div>
          <div className="lg:block hidden">
            <form
              className=" flex item-center border-slate-400 border-2 rounded-lg px-1"
              action="action_page.php"
            >
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <Search />
              </button>
            </form>
          </div>
          <div className=" absolute w-auto inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full text-black p-2 bg-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`sm:hidden absolute w-full text-black z-10 bg-[#ffffff] ${
          !open
            ? "-translate-x-[100%] ease-in duration-1000"
            : "translate-x-0 ease-in duration-1000"
        } `}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            href="#"
            className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Women
          </Link>
          <Link
            href="#"
            className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Men
          </Link>
          <Link
            href="#"
            className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Children
          </Link>
          <Link
            href="#"
            className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            All Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
