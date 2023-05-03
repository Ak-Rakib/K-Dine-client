import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="normal-case text-xl"><span className="text-red-600 text-4xl border-b-4 font-bold">K</span><span className="font-thin">-Dine</span></a>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div> */}
          <Link className="btn btn-outline">Home</Link>
          <Link className="btn btn-outline">Blog</Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
