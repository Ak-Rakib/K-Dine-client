import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Welcome to our registration page!
            </h1>
            <p className="py-6">
              Please fill out the form below to create your account:
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-600">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                <label className="label">
                  <p
                    href="#"
                    className="label-text-alt text-white"
                  >
                    We'll never share your email with anyone else.
                  </p>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-white">
                Have an account? please do <Link to="/login">LogIn</Link>{" "}
              </p>
              <br />
              <br />
              <div className="form-control mt-6">
                <button className="btn btn-outline text-white">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
