/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from 'react-icons/fa';

// eslint-disable-next-line no-unused-vars
const CustomerReview = ({ user }) => {
  const { name, text, photo } = user;
  return (
    <div>
      <div className="bg-[#FC4F00] shadow-lg rounded-lg overflow-hidden mb-5">
        <div className="px-6 py-4">
          <div className="flex items-center">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src={photo} />
              </div>
            </div>
            <div className="text-sm ms-2">
              <p className="text-white leading-none font-bold text-2xl">{name}</p>
              <div className="text-yellow-500 flex">
                <FaStar />   
                <FaStar />   
                <FaStar />   
                <FaStar />      
              </div>
            </div>
          </div>
          <div className="mt-4 pl-24">
            <p className="text-white">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
