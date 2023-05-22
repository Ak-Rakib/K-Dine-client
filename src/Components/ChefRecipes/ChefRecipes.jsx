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
    <React.Fragment>
      <div className="mb-20">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={photo} className="lg:max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-[#FC4F00]">
                Hello I'm{" "}
                <span
                  className="font-tine text-black
              "
                >
                  {name}
                </span>
              </h1>
              <h1 className="font-bold text-3xl mt-5">My Data</h1>
              <div className="flex items-center">
                <FaWaveSquare className=" pe-1 text-[#FC4F00]" />
                <p className="font-bold">{experience}</p>
              </div>
              <div className="flex items-center">
                <FaReceipt className=" pe-1 text-[#FC4F00]" />
                <p className="font-bold">{numRecipes}</p>
              </div>
              <div className="flex items-center">
                <FaHeart className="pe-1 text-[#FC4F00]" />
                <p className="font-bold">{likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      <h1 className="mb-2 mt-10 text-center">
          My{" "}
          <span className="font-bold text-[#FC4F00] text-2xl border-b-2">
            Top Three Recipes
          </span>
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Chefs are skilled culinary professionals who create and prepare
          delicious and visually appealing dishes for their patrons. They are
          responsible for designing menus, sourcing ingredients, cooking meals,
          and ensuring that their dishes meet high standards of quality and
          taste.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 place-items-center">
        {
            // eslint-disable-next-line react/jsx-key
            users.slice(0, 3).map(r => <Recipes
                key={r.id}
                r = {r}
            ></Recipes>)
        }
      </div>
    </React.Fragment>
  );
};

export default ChefRecipes;
