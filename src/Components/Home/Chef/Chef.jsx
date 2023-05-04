/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaWaveSquare, FaReceipt, FaHeart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Chef = ({ chefs }) => {
  // eslint-disable-next-line react/prop-types
  const { experience, id, likes, name, numRecipes, photo } = chefs;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="chef" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex items-center">
            <FaWaveSquare className="text-red-600 pe-1" />
            <p>{experience}</p>
          </div>
          <div className="flex items-center">
            <FaReceipt className="text-red-600 pe-1" />
            <p>{numRecipes}</p>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-red-600 pe-1"/>
            <p>{likes}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
