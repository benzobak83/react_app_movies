import React from "react";

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID,
    Type: type,
    Poster: poster,
  } = props;
  console.log(poster);

  return (
    <div className="card movie" id={imdbID}>
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={
            poster == "N/A"
              ? `https://via.placeholder.com/307x433.png?text=${title}`
              : poster
          }
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
