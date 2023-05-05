// eslint-disable-next-line no-unused-vars
import React from "react";

const Progress = () => {
  return (
    <div className="bg-red-600 p-4 mb-20 text-center">
      <div className="radial-progress bg-primary text-primary-content border-4 border-primary text-white" style={{ "--value": 80 }}>
        Clean
      </div>
      <div className="radial-progress bg-primary text-primary-content border-4 border-primary text-white" style={{ "--value": 70 }}>
        Location
      </div>
      <div className="radial-progress bg-primary text-primary-content border-4 border-primary text-white" style={{ "--value": 90 }}>
        Manner
      </div>
      <div className="radial-progress bg-primary text-primary-content border-4 border-primary text-white" style={{ "--value": 90 }}>
        Design
      </div>
      <div className="radial-progress bg-primary text-primary-content border-4 border-primary text-white" style={{ "--value": 100 }}>
        Food
      </div>
    </div>
  );
};

export default Progress;
