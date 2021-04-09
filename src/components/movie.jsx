import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import { paginate } from "../utils/paginate";
import Like from "./common/like";
import Pagination from "./common/pagination";
class Movie extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleDeleteMovie = (mov) => {
    const movies = this.state.movies.filter((movie) => movie._id !== mov._id);
    this.setState({ movies });
  };
  handleUpdateMovie = (mov) => {
    const elementsIndex = this.state.movies.findIndex(
      (element) => element._id === mov._id
    );
    this.state.movies[elementsIndex].title = prompt("Enter new Title");
    this.setState({ movies: this.state.movies });
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
  render() {
    if (this.state.movies.length === 0)
      return <p>There is no movies in the database at this time!</p>;
    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="container">
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
