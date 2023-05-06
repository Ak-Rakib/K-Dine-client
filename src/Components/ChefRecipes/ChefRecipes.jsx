// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FaHeart, FaReceipt, FaWaveSquare } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes/Recipes";

const ChefRecipes = () => {
  // eslint-disable-next-line no-unused-vars
  const { experience, id, likes, name, numRecipes, photo } = useLoaderData();

  const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch("https://k-dine-server-ak-rakib.vercel.app/recipes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <div>
      <div className="mb-20">
        <div className="hero min-h-screen bg-red-600">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-white">
                Welcome To{" "}
                <span className="text-6xl shadow-2xl bg-white text-red-600 rounded-lg p-2">
                  K
                </span>
                <span
                  className="font-tine text-black
              "
                >
                  -Dine
                </span>
              </h1>
              <h1 className="font-bold text-3xl">{name}</h1>
              <div className="flex items-center">
                <FaWaveSquare className=" pe-1" />
                <p className="font-bold">{experience}</p>
              </div>
              <div className="flex items-center">
                <FaReceipt className=" pe-1" />
                <p className="font-bold">{numRecipes}</p>
              </div>
              <div className="flex items-center">
                <FaHeart className="pe-1" />
                <p className="font-bold">{likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {
            // eslint-disable-next-line react/jsx-key
            users.slice(0, 3).map(r => <Recipes
                key={r.id}
                r = {r}
            ></Recipes>)
        }
      </div>
    </div>
  );
};

export default ChefRecipes;
