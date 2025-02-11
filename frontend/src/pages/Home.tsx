import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CategorySection } from '../components/home/CategorySection';
import { LatestItems } from '../components/home/LatestItems';
import { ProductGrid } from '../components/home/ProductGrid';
import { PromoBanner } from '../components/home/PromoBanner';
import { Features } from '../components/home/Features';
import { Newsletter } from '../components/home/Newsletter';

export const Home = () => {
  return (
    <div className="bg-white flex flex-col pb-8">
      <main className="flex w-full flex-col items-center">
        <section className="bg-[#010103] py-0 px-1.5 pb-9 h-screen w-full">
          <div className="flex gap-[-60px] md:flex-row flex-col">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="flex flex-col relative min-h-[675px] mt-2 w-full py-4 pl-6 items-center">
                <img 
                  src="/src/assets/Airpods.png" 
                  alt="Hero background" 
                  className="absolute inset-0 h-full w-full self-center items-center justify-center object-cover object-left"
                />
                
                <div className="relative self-center flex w-[316px] max-w-full gap-1.5 mt-[550px] ml-5">
                  <img src="/src/assets/Rectangle 15.png" alt="Product thumbnail" className="aspect-[1.25] object-contain w-[129px] rounded-lg max-w-full" />
                  <img src="/src/assets/Rectangle 16.png" alt="Product thumbnail" className="aspect-[0.85] object-contain w-22 rounded-lg" />
                  <img src="/src/assets/Rectangle 17.png" alt="Product thumbnail" className="aspect-[0.85] object-contain w-22 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-1/2 md:pr-[90px]">
              <div className="flex w-full flex-col">
                <div className="flex">
                  <div className="flex gap-5">
                    <div className="flex flex-col w-[55%]">
                      <h1 className="text-white z-10 mt-[290px] -mr-[69px] font-bold text-[70px] font-sans">
                        Apple <br /> Airpods Pro
                      </h1>
                    </div>
                    <div className="flex flex-col w-[45%] ml-5">
                      <img 
                        src="/src/assets/b8fe31b5f460d63a4fa2222d46967b54 1.png" 
                        alt="Airpods Pro" 
                        className="aspect-[0.83] object-contain w-full flex-grow"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-white self-start font-normal text-xl w-4/5">
                  Lorem ipsum dolor sit amet consectetur. Quam accumsan ornare diam
                  et quis aliquam. Diam tincidunt accumsan enim tristique velit
                  proin luctus massa auctor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CategorySection />
        <LatestItems />
        <ProductGrid />
        <PromoBanner />
        <Features />
        <Newsletter />
      </main>
    </div>
  );
};