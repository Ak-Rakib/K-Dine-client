/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line no-unused-vars
const Recipes = ({ r }) => {
  // eslint-disable-next-line no-unused-vars
  const { name, photo, ingredients, method, rating } = r;
  
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteHandler = () => {
    setIsFavorite(true);
    toast('Recipe added to favorites!');
  }
  return (
    <React.Fragment>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h1 className="font-bold">Ingredients</h1>
          <p>
            {
              // eslint-disable-next-line react/jsx-key
              ingredients?.slice(0, 5).map(i =>
                 // eslint-disable-next-line react/jsx-key
                 <div className="flex justify-between">
                  <li>{i.name}</li>
                  </div>
                 )
            }
            </p>
            <h1 className="font-bold">Methods:</h1>
          <p>
            {
              // eslint-disable-next-line react/jsx-key
              method?.slice(0, 5).map(m =>
                 // eslint-disable-next-line react/jsx-key
                 <div className="flex justify-between">
                  <li>{m.step}</li>
                  </div>
                 )
            }
            </p>
          <div className="card-actions justify-end items-center">
            <div className="badge badge-outline">Rating:{rating}</div>
            <div onClick={favoriteHandler} disabled={isFavorite} className="badge badge-outline btn btn-outline">{isFavorite ? 'Favorited!' : 'Add to Favorites'}</div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recipes;
