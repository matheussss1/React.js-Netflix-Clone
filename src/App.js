import { useEffect, useState } from "react";

import { Tmdb } from "./dataProvider/tmdb.js";
import { MovieRow } from "./components/MovieRow/index.js";
import { FeaturedMovie } from "./components/FeaturedMovie/index.js";
import { Header } from "./components/Header/index.js";
import './App.css';


export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    async function loadMovies(){
      const list = await Tmdb.movieList();
      setMovieList(list);

      const featured = list.filter(e => e.slug === 'originals');
      const random = Math.round(Math.random() * featured[0].items.results.length);

      setFeaturedMovie(featured[0].items.results[random]);
    }

    loadMovies();
  }, [])

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
