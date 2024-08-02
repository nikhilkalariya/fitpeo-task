import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
const Cardsprogress = () => {
  const cards = [
    { title: 'Net Profit', value: "$ 6759.25", trend: 'up', },

  ];

  return (
    <div className="grid gap-4 mt-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col "
        >
          <div className="flex justify-between">
            <h4 className="font-semibold">{card.title}</h4>
            <CircularProgressbarWithChildren className='h-24 w-24' 
            styles={buildStyles({
              pathColor: "blue",
              trailColor: "lightblue"
            })} value={70}>
              <div className="flex flex-col items-center -mt-2">
                <span className='text-base font-bold'>70%</span>
                <span className='w-14 text-xs text-center text-wrap'>Goal complete</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>

          <div className='flex justify-between'>
            <div className="flex flex-col ">
              <div className="flex text-2xl font-bold">{card.value}</div>
              <span
                className={`text-sm flex items-center gap-2 font-bold ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}
              >
                {card.trend === 'up' ? <FaCaretUp className='h-8 w-8' /> : <FaCaretDown className='h-5 w-5' />}
                3%
              </span>
            </div>
            <div className='text-xs mt-8'>Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Cardsprogress;
