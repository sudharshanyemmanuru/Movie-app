import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({watchListcallBack,removeFromWatchListCallBack,watchList}) => {
  const [movies, setMovies] = useState([]);
  const [pageNumber,setPageNumber]=useState(1)
  function incrementPage(){
    setPageNumber(pageNumber+1)
  }
  function decrementPageNumber(){
    if(pageNumber>1)
      setPageNumber(pageNumber-1)
  }
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDM5ZDE3Nzc2YmM0NzU2Y2I3NjY4ZTZhYTFiZDg0MyIsInN1YiI6IjY2NDA1Y2VkNjg3NjZiNGY0YTU5ODhkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KwHcKbC_v-eYLDC2UI5OCXBRgd1CP3qhB9NLsqIxyxs",
        },
      })
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log("error occured while fetching data!!" + err);
      });
  },[pageNumber]);
  return (
    <div>
      <div className="text-center w-full font-bold m-2 p-5 text-xl">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8px m-10px">
        {movies.map((movie) => {
          return <MovieCard posterPath={movie.poster_path} movieName={movie.original_title} movieObj={movie} watchListCallback={watchListcallBack} removeFromWatchListCallBack={removeFromWatchListCallBack} watchList={watchList}/>;
        })}
      </div>
      <Pagination pageNumber={pageNumber} forwardCallback={incrementPage} backwardCallback={decrementPageNumber}/>
    </div>
  );
};

export default Movies;
