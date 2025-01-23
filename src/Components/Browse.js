import React from "react";
import Header from "./Header";
import useNowPlayingMoives from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
export const Browse = () => {
  useNowPlayingMoives();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
