import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRatedMoives = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getTopRatedMoives();
  }, []);
};
export default useTopRated;
