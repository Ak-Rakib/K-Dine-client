/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaWaveSquare, FaReceipt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

// eslint-disable-next-line react/prop-types
const Chef = ({ chefs }) => {
  // eslint-disable-next-line react/prop-types
  const { experience, id, likes, name, numRecipes, photo } = chefs;
  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <figure>
          <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <img src={photo} alt="chef" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex items-center">
            <FaWaveSquare className="text-[#FC4F00] pe-1" />
            <p>{experience}</p>
          </div>
          <div className="flex items-center">
            <FaReceipt className="text-[#FC4F00] pe-1" />
            <p>{numRecipes}</p>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-[#FC4F00] pe-1" />
            <p>{likes}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/recipes/${id}`} className="btn  bg-[#FC4F00] border-0">
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
