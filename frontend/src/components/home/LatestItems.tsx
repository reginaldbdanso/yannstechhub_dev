export const LatestItems = () => {
  return (
    <section className="text-black mt-[109px] font-bold text-2xl font-sans flex flex-col self-stretch justify-between">
      <h3>
        Our Latest Items. <span className="text-[#bbbbbb]">Have A Look At What's New, Now.</span>
      </h3>
      
      <div className="mt-3.5 w-full">
        <div className="flex items-stretch justify-between gap-5">
          <div className="flex flex-col items-start w-[40%]">
            <a href="#top-rated" className="text-black no-underline mb-2.5">Top Rated</a>
            <img src="/src/assets/Rectangle 17.png" alt="Featured Item" className="aspect-[0.87] object-contain w-full rounded-[20px] flex-grow" />
          </div>

          <div className="flex flex-col w-[32%] ml-5">
            <a href="#latest-arrivals" className="text-black no-underline">Latest Arrivals</a>
            <div className="rounded-[20px] bg-[#d9d9d9] flex flex-col m-0 gap-2 p-10">
              <div className="flex gap-2.5">
                <img src="/src/assets/Rectangle 51.png" alt="Item 1" className="aspect-[0.68] object-contain w-[136px] rounded-lg" />
                <img src="/src/assets/Rectangle 52.png" alt="Item 2" className="aspect-[0.68] object-contain w-[136px] rounded-lg" />
              </div>
              <div className="flex gap-2.5">
                <img src="/src/assets/Rectangle 53.png" alt="Item 3" className="aspect-[0.68] object-contain w-[136px] rounded-lg" />
                <img src="/src/assets/Rectangle 54.png" alt="Item 4" className="aspect-[0.68] object-contain w-[136px] rounded-lg" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[29%] ml-5">
            <a href="#best-deals" className="text-black no-underline">Best Deals</a>
            <div className="flex flex-grow flex-col">
              <img src="/src/assets/Rectangle 49.png" alt="Item 5" className="aspect-[1.33] object-contain w-full rounded-[20px]" />
              <img src="/src/assets/Rectangle 50.png" alt="Item 6" className="aspect-[1.32] object-contain w-full rounded-[20px] mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};