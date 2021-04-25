import React, { Component } from "react";
import { getGenres } from "../Starter Code/services/fakeGenreService";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import { paginate } from "../utils/paginate";
import Like from "./common/like";
import Pagination from "./common/pagination";
import Genre from "./genre";
class Movie extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    currentGenre: "All Genres",
  };

  handleDeleteMovie = (mov) => {
    const movies = this.state.movies.filter((movie) => movie._id !== mov._id);
    this.setState({ movies });
  };
  handleUpdateMovie = (mov) => {
    const movies = [...this.state.movies];
    const elementsIndex = this.state.movies.findIndex(
      (element) => element._id === mov._id
    );
    movies[elementsIndex].title = prompt("Enter new Title");
    this.setState({ movies });
  };

  handleClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].isLiked = movie.isLiked ? false : true;
    this.setState({ movies });
  };
  handlePagination = (page) => {
    this.setState({ currentPage: page });
  };
  handleClickGenre = (genre) => {
    console.log("Genre:", genre.name);
    this.setState({ currentGenre: genre.name });
  };
  render() {
    if (this.state.movies.length === 0)
      return <p>There is no movies in the database at this time!</p>;
    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize,
      this.state.currentGenre
    );
    return (
      <div className="container">
        <Genre
          onClickGenre={this.handleClickGenre}
          genres={this.state.genres}
          currentGenre={this.state.currentGenre}
        />
        <p>There are {movies.length} movies on the list</p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like movie={movie} onClick={() => this.handleClick(movie)} />
                </td>
                <td>
                  <button
                    key={movie._id}
                    onClick={() => this.handleDeleteMovie(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleUpdateMovie(movie)}
                    className="btn btn-danger"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={this.state.currentPage}
          count={this.state.movies.length}
          pageSize={this.state.pageSize}
          onClick={this.handlePagination}
        />
      </div>
    );
  }
}

export default Movie;
