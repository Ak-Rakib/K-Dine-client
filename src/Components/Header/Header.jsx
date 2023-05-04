// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/ContextProvider";

const Header = () => {
  const { logOut, user } = useContext(AuthProvider);
  // console.log(user)
  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="normal-case text-xl">
            <span className="text-red-600 text-4xl border-b-4 font-bold">
              K
            </span>
            <span className="font-thin">-Dine</span>
          </a>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div> */}
          <Link to="/" className="btn btn-outline">
            Home
          </Link>
          <Link to="/blog" className="btn btn-outline">
            Blog
          </Link>
          <div>
            {user?.uid ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={logOutHandler}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
