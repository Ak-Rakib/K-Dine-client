/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
const Recipes = ({ r }) => {
  // eslint-disable-next-line no-unused-vars
  const { description, name, photo } = r;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default Recipes;
