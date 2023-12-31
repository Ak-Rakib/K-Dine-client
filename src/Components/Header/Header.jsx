// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../../Context/ContextProvider";
import './Header.css'

const Header = () => {
  const { logOut, user } = useContext(AuthProvider);
  const [showName, setShowName] = useState(false);
  console.log(showName);

  function handleMouseEnter() {
    setShowName(true);
  }

  function handleMouseLeave() {
    setShowName(false);
  }

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
            <span className="text-[#FC4F00] text-4xl border-b-4 font-bold">
              K
            </span>
            <span className="font-thin">-Dine</span>
          </a>
        </div>
        <div className="flex-none gap-2">
          <div>
            <NavLink to="/" className="border w-full h-full px-4 py-2 centered uppercase">
              Home
            </NavLink>
            <NavLink to="/blog" className="border w-full h-full px-4 py-2 centered uppercase">
              blog
            </NavLink>
          </div>
          <div>
            {user?.uid ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                    <span style={{ display: showName ? "inline-block" : "none" }}>
                      {user?.displayName}
                    </span>
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
              <div>
                <NavLink
                  to="/login"
                  className="border w-full h-full px-4 py-2 centered uppercase"
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
