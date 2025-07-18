import React from 'react';
import Marquee from 'react-fast-marquee';


const marqueeItems = [
  { image: '/bybit.webp' },
  { image: '/gate.webp' },
  { image: '/htx.webp' },
  { image: '/kucoin.webp' },
  { image: '/okx.webp' },
  { image: '/bybit.webp' },
  { image: '/gate.webp' },
  { image: '/htx.webp' },
  { image: '/kucoin.webp' },
  { image: '/okx.webp' },
];

const Marque = () => {
  return (
    <div className="w-full py-3 bg-gray-900 border-y border-gray-800">
      <Marquee gradient={false} speed={40} pauseOnHover={true} className="">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 mx-6 w-full "
          >
            <div className=" border-2 border-[#7beefc]/30 rounded-xl  bg-gray-900">
              <img 
                src={item.image} 
                alt={item.text}
                className=" w-[165px] h-[45px] bg-gray-500 rounded-xl px-6 pb-1"
              />
            </div>

       
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;