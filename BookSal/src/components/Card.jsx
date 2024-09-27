import React from 'react';
import "../App.css"


const Card = ({futsal}) => {
  
  return (
    <div className="flex items-center justify-between bg-gray-300 rounded-lg p-4 w-full">
      <div className="w-1/5">
        <div className="bg-black h-24 w-full rounded-lg flex items-center justify-center text-white">
          Futsal Image 1
        </div>
      </div>
  
      <div className="flex-1 ml-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold text-lg text-[23px] pt-5">{futsal.name}</div>
          <div className="font-bold text-lg text-right text-[20px] pt-5">{futsal.location}</div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className='pt-4'>{futsal.price}</div>
          <div className="text-center">{futsal.aside}</div>
          <div className="text-right">{futsal.phone}</div>
        </div>
      </div>
    </div>
  );

};
export default Card;