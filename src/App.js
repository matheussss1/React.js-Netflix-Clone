import { useCallback, useEffect, useState } from "react";

import { Tmdb } from "./dataProvider/tmdb.js";
import { MovieRow } from "./components/MovieRow/index.js";
import { FeaturedMovie } from "./components/FeaturedMovie/index.js";
import { Header } from "./components/Header/index.js";
import './App.css';


export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  const loadMovies = useCallback(async() => {
    const list = await Tmdb.movieList();
    setMovieList(list);

    const movieList = list.filter(e => e.slug === 'originals');
    const random = Math.round(Math.random() * movieList[0].items.results.length);
    const featured = await Tmdb.movieInfo(movieList[0].items.results[random].id);
    setFeaturedMovie(featured);
  }, [])

  console.log('app')

  useEffect(() => {
    loadMovies();
  }, [loadMovies])

  return (
    <>
      <Header/>

      {featuredMovie && <FeaturedMovie movie={featuredMovie}/>}

      {movieList.map((i, key) => (
        <MovieRow items={i.items.results} name={i.name} key={key} />
      ))}
    </>
  );
}
