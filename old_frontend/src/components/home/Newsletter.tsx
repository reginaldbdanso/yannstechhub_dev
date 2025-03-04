export const Newsletter = () => {
  return (
    <section className="bg-[#191919] flex mt-[107px] w-full flex-col items-center font-inter text-white font-bold text-center justify-center py-[78px]">
      <div className="flex w-[542px] max-w-full flex-col items-center">
        <h2 className="text-xl">Subscribe for Newsletter</h2>
        <p className="text-xs font-medium mt-1">
          Subscribe to get latest updates and information.
        </p>
        <form className="bg-white self-stretch flex mt-3.5 items-end text-[15px] text-black">
          <input
            type="email"
            placeholder="Enter your email"
            className="self-stretch px-2.5 w-[542px] flex border-none text-[15px] text-black"
            required
          />
          <button
            type="submit"
            className="self-end bg-[#c0ddff] px-10 py-3 border-none cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};