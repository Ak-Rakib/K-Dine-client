// eslint-disable-next-line no-unused-vars
import React from "react";

const Progress = () => {
  return (
    <div className="bg-[#FC4F00] lg:p-4 mb-20 text-center lg:flex lg:justify-around py-5 rounded-lg">
      <div className="radial-progress bg-black text-primary-content   text-gray-400" style={{ "--value": 80 }}>
        Clean
      </div>
      <div className="radial-progress bg-black text-primary-content   text-gray-400" style={{ "--value": 70 }}>
        Location
      </div>
      <div className="radial-progress bg-black text-primary-content   text-gray-400" style={{ "--value": 90 }}>
        Manner
      </div>
      <div className="radial-progress bg-black text-primary-content   text-gray-400" style={{ "--value": 90 }}>
        Design
      </div>
      <div className="radial-progress bg-black text-primary-content   text-gray-400" style={{ "--value": 100 }}>
        Food
      </div>
    </div>
  );
};

export default Progress;
