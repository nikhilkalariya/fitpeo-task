import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { HiCurrencyDollar, HiShoppingBag } from 'react-icons/hi2';

const Cards = () => {
  const cards = [
    { title: 'Total Orders', value: 75, trend: 'up',icon:<HiShoppingBag className='h-14 w-14 p-2 rounded-2xl bg-blue-900/55  fill-blue-700'/> },
    { title: 'Total Delivered', value: 70, trend: 'down',icon:<HiShoppingBag className='h-14 w-14 p-2 rounded-2xl bg-green-800/55 fill-green-700'/>},
    { title: 'Total Cancelled', value: 50, trend: 'up', icon:<HiShoppingBag className='h-14 w-14 p-2 rounded-2xl bg-red-800/55 fill-red-700'/> },
    { title: 'Total Revenue', value: '$12k', trend: 'down', icon:<HiCurrencyDollar className='h-14 w-14 p-2 rounded-2xl bg-pink-800/55 fill-pink-700'/> },

  ];

  return (
    <div className=" bg-black grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col gap-3 "
        > 
          <span>{card.icon}</span>
          <h4 className="text-xs">{card.title}</h4>


          <div className="flex justify-between">
            <div className="flex  text-xl font-medium">{card.value}</div>
            <span
              className={`text-sm flex items-center gap-2 font-bold ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
            >
              {card.trend === 'up' ? <FaCaretUp className='h-7 w-7' /> : <FaCaretDown className='h-7 w-7' />}
              3%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
