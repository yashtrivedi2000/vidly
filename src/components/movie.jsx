import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
class Movie extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };

  handleDeleteMovie = (mov) => {
    const movies = this.state.movies.filter((movie) => movie._id !== mov._id);
    console.log(movies);
    this.setState({ movies });
  };
  handleUpdateMovie = (mov) => {
    const elementsIndex = this.state.movies.findIndex(
      (element) => element._id == mov._id
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
  render() {
    if (this.state.movies.length === 0)
      return <p>There is no movies in the database at this time!</p>;
    return (
      <div className="container">
        <p>There are {this.state.movies.length} movies on the list</p>

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
            {console.log(this.state.movies)}
            {this.state.movies.map((movie) => (
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
          count={this.state.movies.length}
          pageSize={this.state.pageSize}
        />
      </div>
    );
  }
}

export default Movie;
