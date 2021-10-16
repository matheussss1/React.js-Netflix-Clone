import { useEffect, useState } from "react";
import { Tmdb } from "./dataProvider/tmdb.js";


export const App = () => {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    
    async function loadMovies(){
      const list = await Tmdb.movieList();
      setMovieList(list);
    }
    loadMovies();
  }, [])

  return (
    <div>
      {movieList.map((e, key) => {(
        <h1 key={key}>
          {e.slug}
        </h1>
      )})}  
    </div>
  );
}
