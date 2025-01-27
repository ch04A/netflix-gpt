import React from "react";
import Header from "./Header";
import useNowPlayingMoives from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMoives from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
export const Browse = () => {
  useNowPlayingMoives();
  usePopularMoives();
  useTopRated();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
