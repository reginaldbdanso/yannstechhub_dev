export const Features = () => {
  const features = [
    {
      icon: '/src/assets/delivery.png',
      title: 'Free Delivery',
      description: 'And free returns. See checkout for delivery dates.'
    },
    {
      icon: '/src/assets/0-percent.png',
      title: 'Pay 0% interest for up to 24months',
      description: 'Choose any items of your choice without paying any interest.'
    },
    {
      icon: '/src/assets/support.png',
      title: 'Customer Support',
      description: 'Helping customers resolve issues with products or services.'
    }
  ];

  return (
    <section className="flex flex-col w-full mt-[76px] items-center">
      <div className="gap-[50px] w-[80%] self-center items-center flex">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col w-1/3">
            <div className="flex flex-grow flex-col text-black justify-start font-inter text-[15px]">
              <div className="flex max-w-full flex-col items-center">
                <img src={feature.icon} alt="" className="aspect-square object-contain w-[81px]" />
                <h3 className="font-semibold mt-3">{feature.title}</h3>
                <p className="font-normal text-center self-stretch mt-[-7px]">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};