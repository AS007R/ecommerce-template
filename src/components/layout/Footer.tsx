import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <footer className="bg-white dark:bg-gray-900">
        <div className="container px-4 max-w-[1345px] sm:px-6 lg:px-8 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div>
              <Image
                src="/Logo.webp"
                width={150}
                height={90}
                alt="Picture of the author"
              />

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 ">
                <p className="text-gray-500 mb-2">
                  Small, artisan label that offers a thoughtfully curated
                  collection of high quality everyday essentials made.
                </p>

                <div className="icons flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <Twitter fill="black" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <Facebook fill="black" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    <Linkedin fill="black" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Terms of Use
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  How it Works
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Support Carrer
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  24h Service
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Quick Chat
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Whatsapp
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Support 24h
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p>Copyright © 2022 Dine Market</p>
            <p>
              Design by.{" "}
              <span className="font-bold text-lg">Weird Design Studio</span>
            </p>
            <p>
              Code by.{" "}
              <span className="font-bold text-lg"> AS007R on github</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
