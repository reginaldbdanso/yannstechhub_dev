import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CategorySection = () => {
  const categories = [
    { name: 'Phones', image: '/src/assets/Rectangle 9.png' },
    { name: 'Computers', image: '/src/assets/Rectangle 9.png' },
    { name: 'Accessories', image: '/src/assets/Rectangle 9.png' },
    { name: 'Laptops', image: '/src/assets/Rectangle 9.png' },
    { name: 'Monitors', image: '/src/assets/Rectangle 9.png' },
    { name: 'Network', image: '/src/assets/Rectangle 9.png' },
    { name: 'PC Games', image: '/src/assets/Rectangle 9.png' },
  ];

  return (
    <section className="flex w-full max-w-[80%] mx-[10%] flex-col mt-5 self-center justify-center">
      <div className="self-stretch flex flex-wrap gap-3.5">
        <div className="flex flex-col flex-1">
          <h3 className="text-black mt-[109px] font-bold text-2xl font-sans">
            Browse by Category <br />
            Shop.<span className="text-[#bbbbbb]">the best way to buy the products you love.</span>
          </h3>
          
          <div className="self-end flex mt-6 gap-3.5">
            <button className="bg-gray-200 aspect-[1.31] object-contain w-[47px] rounded-[15px] p-3.5">
              <ChevronLeft className="w-full h-full" />
            </button>
            <button className="bg-gray-200 aspect-[1.31] object-contain w-[47px] rounded-[15px] p-3.5">
              <ChevronRight className="w-full h-full" />
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="rounded-lg bg-gray-200 flex items-center w-[124px] flex-col justify-center py-3.5">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="aspect-[1.16] object-contain w-[94px] rounded-lg"
                  />
                </div>
                <h2 className="text-black self-center mt-2 font-bold text-sm">
                  {category.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};