import React from "react";
import { Route, Routes } from "react-router-dom";
import { actors, movies } from "../../mock";
import ActorList from "./actorList/ActorList";
import MoviesList from "./moviesList/MoviesList";
import style from "./Content.module.scss";
const Content = () => {
  return (
    <div >
      <Routes>
        <Route path="/actor/*" element={<ActorList actors={actors} />}></Route>
        <Route path="/movie/*" element={<MoviesList movies={movies} />}></Route>
      </Routes>
      
    </div>
  );
};

export default Content;
