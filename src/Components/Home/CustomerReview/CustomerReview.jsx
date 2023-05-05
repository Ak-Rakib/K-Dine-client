/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
const CustomerReview = ({ user }) => {
  const { name, text, photo } = user;
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-5">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src={photo} />
              </div>
            </div>
            <div className="text-sm">
              <p className="text-gray-900 leading-none font-bold">{name}</p>
              {/* <p className="text-gray-600">{rating} stars</p> */}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
