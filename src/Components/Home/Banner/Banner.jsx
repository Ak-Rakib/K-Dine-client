// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../../../src/assets/cover-img.jpg"
            className="lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-[#FC4F00]">
              Welcome To <span className="text-6xl shadow-2xl text-[#FC4F00] rounded-lg p-2">K</span>
              <span className="font-tine text-black
              ">-Dine</span>
            </h1>
            <p className="py-6 text-[#FC4F00]">
              From savory appetizers to mouth-watering entrees and decadent
              desserts, our menu has something for everyone. Whether you're in
              the mood for a juicy steak, a fresh seafood dish, or a hearty
              vegetarian option, we have you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
