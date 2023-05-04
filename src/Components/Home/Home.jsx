// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef/Chef";


const Home = () => {
  const allChefs = useLoaderData();
  console.log(allChefs);
  return (
    <div>
      <Banner></Banner>
      <h1 className="mb-2 mt-10 text-center">
        Our{" "}
        <span className="font-bold text-red-600 text-2xl border-b-2">
          Best Chefs
        </span>
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Chefs are skilled culinary professionals who create and prepare
        delicious and visually appealing dishes for their patrons. They are
        responsible for designing menus, sourcing ingredients, cooking meals,
        and ensuring that their dishes meet high standards of quality and taste.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        {
          // eslint-disable-next-line react/jsx-key
          allChefs?.map((chefs) => (
            <Chef key={chefs.id} chefs={chefs}></Chef>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
