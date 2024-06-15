import React from "react";

const MovieCard = ({
  posterPath,
  movieName,
  movieObj,
  watchListCallback,
  removeFromWatchListCallBack,
  watchList,
}) => {
  function isPresent(movie) {
    for (let i = 0; i<watchList.length; i++) {
      console.log('Watch list length from movie card'+watchList[i])
      if (watchList[i].original_title === movie.original_title) return true;
    }
    return false;
  }
  return (
    <div
      className="h-[60vh] w-[200px] rounded-xl bg-cover bg-center hover:cursor-pointer hover:scale-110 duraation-300 ml-5"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60">
        {movieObj.original_title}
      </div>
      {!isPresent(movieObj) ? (
        <div
          onClick={() => watchListCallback(movieObj)}
          className="bg-black-500/60 border-b-2 flex justify-center rounded-lg"
        >
          &#128525;
        </div>
      ) : (
        <div
          onClick={() => removeFromWatchListCallBack(movieObj)}
          className="bg-black-500/60 border-b-2 flex justify-center rounded-lg"
        >
          ❌
        </div>
      )}
    </div>
  );
};
export default MovieCard;
