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
    const allMovies = await Tmdb.movieList();
    setMovieList(allMovies);

    const netflixMovies = allMovies.filter(e => e.slug === 'originals')[0].items.results;
    const moviesWithDescription = netflixMovies.filter(e =>  e.overview !== '');

    const randomIndex = Math.round(Math.random() * moviesWithDescription?.length);
    const featured = await Tmdb.movieInfo(moviesWithDescription[randomIndex]?.id);
    setFeaturedMovie(featured);
  }, [])

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
