import React from "react";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="hero min-h-screen bg-red-600">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../../../src/assets/cover-img.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-white">
              Welcome To <span className="text-6xl shadow-2xl bg-white text-red-600 rounded-lg p-2">K</span>
              <span className="font-tine text-black
              ">-Dine</span>
            </h1>
            <p className="py-6 text-white">
              From savory appetizers to mouth-watering entrees and decadent
              desserts, our menu has something for everyone. Whether you're in
              the mood for a juicy steak, a fresh seafood dish, or a hearty
              vegetarian option, we have you covered.
              <br />
              <br />
              Come visit us today and discover why <span className="text-2xl shadow-2xl bg-white text-red-600 rounded-lg p-2">K</span>
              <span className="font-tine text-black">-Dine</span> is the
              perfect destination for all your dining needs.
            </p>
            <button className="btn btn-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
