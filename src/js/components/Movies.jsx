import React from "react";
import { Movie } from "./Movie.jsx";

function Movies(props) {
  const { movies } = props;

  try {
    return movies.map((movie) => {
      return <Movie key={movie.imdbID} {...movie} />;
    });
  } catch {
    if (/[а-яА-Я]/.test(props.lastSearch)) return <h1 className="blue-text text-darken-2 flow-text">Нельзя на русском ;)</h1>;
    else return <h1 className="blue-text text-darken-2 flow-text">Not found :(</h1>;
  }
}

export { Movies };
