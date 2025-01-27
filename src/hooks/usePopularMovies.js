import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMoives = () => {
  const dispatch = useDispatch();

  const getPopularMoives = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMoives();
  }, []);
};
export default usePopularMoives;
