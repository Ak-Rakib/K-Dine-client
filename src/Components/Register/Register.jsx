import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/ContextProvider";

const Register = () => {

  const {signUp, userUpdateProfile} = useContext(AuthProvider);
    const [error, setError] = useState('')


  const signUpHandler = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signUp(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        updateProfileHandler(name, photoURL)
        form.reset();
    })
    .catch(error => {
        console.log(error)
        setError(error.message);
    });
}


const updateProfileHandler = (name, photoURL) => {
  const profile = {
    displayName : name,
    photoURL : photoURL
  }
  userUpdateProfile(profile)
  .then(()=> {})
  .catch(error => console.log(error));
}


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-center">
              Welcome to our registration page!
            </h1>
            <p className="py-6 text-center">
              Please fill out the form below to create your account:
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#FC4F00]">
            <form onSubmit={signUpHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                <label className="label">
                  <p href="#" className="label-text-alt text-white">
                    We'll never share your Name.
                  </p>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">photoURL</span>
                </label>
                <input
                  type="Photo"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                <label className="label">
                  <p href="#" className="label-text-alt text-white">
                    We'll never share your photo.
                  </p>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                <label className="label">
                  <p href="#" className="label-text-alt text-white">
                    We'll never share your email with anyone else.
                  </p>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  { error ?
                    <p
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    {error}
                  </p>
                  :
                  null
                  }
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
