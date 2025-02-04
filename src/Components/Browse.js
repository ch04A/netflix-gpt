import React from "react";
import Header from "./Header";
import useNowPlayingMoives from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMoives from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
export const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMoives();
  usePopularMoives();
  useTopRated();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
