import React from 'react'

const CaraouselCard = ({ imageSrc, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg font-poppins">
      <div>
        <img src={imageSrc} className="h-[300px] object-cover" alt="imagecard" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
}


export default CaraouselCard