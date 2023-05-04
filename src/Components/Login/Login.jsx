import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Context/ContextProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, logInWithGoogle, logInWithGithub } = useContext(AuthProvider);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // useTitle('LogIn');

  const googleHandler = () => {
    logInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => console.log(error));
  };

  const githubHandler = () => {
    logInWithGithub(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => console.log(error));
  };

  const signInHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome to our login page!!</h1>
            <p className="py-6">
              Please enter your credentials below to access your account:
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-600">
            <form onSubmit={signInHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
                <label className="label">
                  <p href="#" className="label-text-alt  text-white">
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
                  {error.providerId ? null : (
                    <p href="#" className="label-text-alt link link-hover">
                      {error}
                    </p>
                  )}
                </label>
              </div>
              <p className="text-white">
                Have'nt any account? please do{" "}
                <Link to="/register">Register</Link>{" "}
              </p>
              <br />
              <br />
              <div className="form-control mt-6">
                <button className="btn btn-outline text-white mb-8">
                  Login
                </button>
                <button
                  type="submit"
                  onClick={googleHandler}
                  className="btn btn-outline text-white mb-4"
                >
                  Continue With Google
                </button>
                <button
                  type="submit"
                  onClick={githubHandler}
                  className="btn btn-outline text-white mb-4"
                >
                  Continue With Github
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
