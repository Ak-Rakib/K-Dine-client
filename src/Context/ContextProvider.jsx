// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
export const AuthProvider = createContext()

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  const logInWithGoogle = (Provider) => {
    setLoad(true);
    return signInWithPopup(auth, Provider);
  };

  const logInWithGithub = (Provider) => {
    setLoad(true);
    return signInWithPopup(auth, Provider);
  };

  const signUp = (email, password) => {
    setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoad(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user details:", currentUser);
      setUser(currentUser);
      setLoad(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const Info = {
    user,
    load,
    logInWithGithub,
    logInWithGoogle,
    signUp,
    signIn,
    logOut,
    userUpdateProfile,
  };
  return (
    <div>
      <AuthProvider.Provider value={Info}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default ContextProvider;
