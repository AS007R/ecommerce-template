const NewsLetter = () => {
  return (
    <section className="2xl:mx-auto 2xl:container mx-4 py-16">
      <div className="w-full relative flex items-center justify-center">
        <div className="text-black md:my-16 lg:py-6 py-4 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <h1 className="text-4xl font-semibold leading-9  text-center">
            Subscribe Our Newsletter
          </h1>
          <h1 className=" absolute text-gray-100 -z-10 md:text-9xl text-7xl font-bold leading-9  text-center">
            Newsletter
          </h1>
          <p className="text-base leading-normal text-center  mt-6">
            Get the latest information and promo offers directly
          </p>
          <div className=" flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-8 space-y-4 sm:space-y-0">
            <input
              className="border-[1px] border-black text-base w-full font-medium leading-none text-black p-2 focus:outline-none bg-transparent placeholder-black"
              placeholder="Email Address"
            />
            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-black sm:border-transparent w-44 sm:w-auto bg-black text-white ml-2 py-1.5 px-6 hover:bg-opacity-75">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
