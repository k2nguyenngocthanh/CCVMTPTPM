/** @format */

import React, { useEffect, useState } from "react";
import { movieServ } from "../../../Service/movieService";
import ItemMovie from "./ItemMovie";

export default function ListMovie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    movieServ
      .getMovieList()
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <div id="listMovie" className="pt-4">
      <h2 className="text-3xl sm:text-4xl uppercase font-bold text-center mb-4 mt-10">
        Hot Movies
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies.map((item) => {
          return <ItemMovie data={item} key={item.ma_phim} />;
        })}
      </div>
    </div>
  );
}
