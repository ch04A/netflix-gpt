import React, { useEffect } from "react";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displyName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email: email,
            displyName: displyName,
            PhotoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribed to the unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchCkick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchCkick}
          >
            {showGptSearch ? "Home" : "Gpt Serarch"}
          </button>
          <img className="w-12 h-12" alt="usericon" src={user?.PhotoURL} />
          <button onClick={handleSignout} className="font-bold text-white">
            (sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
