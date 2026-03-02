import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Latest = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-0">
      <div className="flex justify-between items-end mt-20 mb-12">
        <h1 className="text-3xl md:text-5xl font-black clashDisplay text-[#25324B]">
          Latest <span className="text-[#26A4FF]">jobs open</span>
        </h1>
        <div className="text-[#4640DE] hidden  clashDisplay font-bold md:flex gap-2 items-center cursor-pointer">
          Show all jobs <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default Latest;