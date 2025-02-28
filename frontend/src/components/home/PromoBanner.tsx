export const PromoBanner = () => {
  return (
    <section className="rounded-[20px] bg-[#c0ddff] self-stretch flex flex-col items-center mt-[57px] mr-[30px] py-[15px] px-[70px] pb-[25px]">
      <div className="w-[755px] max-w-full">
        <div className="flex gap-5">
          <div className="flex flex-col w-[41%]">
            <img 
              src="/src/assets/Watch.png" 
              alt="Fast Sales promotion" 
              className="aspect-[0.92] object-contain w-full flex-grow"
            />
          </div>
          <div className="self-center w-full ml-5">
            <h2 className="text-black self-stretch m-auto font-bold text-[80px]">
              Fast Sales
            </h2>
            <h3 className="text-black self-stretch m-auto font-bold text-[40px]">
              Yanns tech Hub Sales.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};