import React from "react";
import { Movies } from "../components/Movies.jsx";
import { Search } from "../components/Search.jsx";
import { Preloader } from "../components/Preloader.jsx";

class Main extends React.Component {
  state = {
    movies: [],
    isLoading: true,
  };

  url = {
    api: process.env.REACT_APP_KEY_LOCAL,
    search: "simpsons",
  };

  refreshMovies = (search, type = "all") => {
    if (search === "") search = this.url.search;
    this.setState({ isLoading: true });
    console.log(type);

    fetch(
      `http://www.omdbapi.com/?apikey=${this.url.api}&s=${search}${
        type === "all" ? "" : `&type=${type}`
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, isLoading: false }));
  };

  componentDidMount() {
    this.refreshMovies(this.url.search);
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        <div className="container">
          <Search refresh={this.refreshMovies} />
        </div>
        <div className="content container">
          {isLoading ? <Preloader /> : <Movies movies={movies} />}
        </div>
      </>
    );
  }
}

export { Main };
