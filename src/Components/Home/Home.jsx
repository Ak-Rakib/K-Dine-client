/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef/Chef";
import CustomerReview from "./CustomerReview/CustomerReview";
import Progress from "./Progress/Progress";

const Home = () => {
  const allChefs = useLoaderData();

  const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch("https://k-dine-server-ak-rakib.vercel.app/reviews")
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
      <Banner></Banner>

      <div>
        <h1 className="mb-2 mt-10 text-center">
          Our{" "}
          <span className="font-bold text-[#FC4F00] text-2xl border-b-2">
            Best Chefs
          </span>
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Chefs are skilled culinary professionals who create and prepare
          delicious and visually appealing dishes for their patrons. They are
          responsible for designing menus, sourcing ingredients, cooking meals,
          and ensuring that their dishes meet high standards of quality and
          taste.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 place-items-center">
          {
            // eslint-disable-next-line react/jsx-key
            allChefs?.map((chefs) => (
              <Chef key={chefs.id} chefs={chefs}></Chef>
            ))
          }
        </div>
      </div>
      <div>
      <h1 className="mb-2 mt-10 text-center">
          Our{" "}
          <span className="font-bold text-[#FC4F00] text-2xl border-b-2">
            Customer Review
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
      <div className=" mb-20 p-4">
        {users?.slice(0, 3).map((user) => (
          <CustomerReview key={user.id} user={user}></CustomerReview>
        ))}
      </div>

      <div>
      <h1 className="mb-2 mt-10 text-center">
          Our{" "}
          <span className="font-bold text-[#FC4F00] text-2xl border-b-2">
            Customer Rating
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
      <Progress></Progress>
    </React.Fragment>
  );
};

export default Home;
