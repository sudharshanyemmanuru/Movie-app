import React from "react";

const WatchListedMovie = ({movie}) => {
    console.log('poster'+movie.poster_path)
  return (
    <div className="w-full">
      <tr className="border-b-2">
        <td className="flex items-center px-6 py-4">
          <img
            src={new URL(`https://image.tmdb.org/t/p/original/${movie.poster_path}`)}
            alt=""
            className="h-[13rem] w-[10rem]"
          />
          <div className="mx-8">{movie.original_title}</div>
        </td>
        <td>5.0</td>
        <td>Famous</td>
        <td>Action</td>
        <td>
          <button className="border-none outline-none text-red-800">
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
};

export default WatchListedMovie;
