import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggitions from "./GptMovieSuggitions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggitions />
    </div>
  );
};

export default GptSearch;
