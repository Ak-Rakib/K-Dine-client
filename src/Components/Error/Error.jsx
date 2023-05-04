import React from "react";
import './Error.css';
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-white">
      {/* <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p> */}
      <div className="flex justify-center items-center">
        <img className="h-screen bg-cover bg-no-repeat" src="../../../src/assets/error-img.png" alt="" />
      </div>
    </div>
  );
};

export default Error;
