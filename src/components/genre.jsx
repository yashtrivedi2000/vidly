import React, { Component } from "react";
class Genre extends Component {
  render() {
    let genres = this.props.genres;

    let currentGenre = this.props.currentGenre;
    console.log(currentGenre);
    return (
      <ul className="list-group">
        <li
          className={
            currentGenre === "All Genres"
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() =>
            this.props.onClickGenre({ _id: 1, name: "All Genres" })
          }
        >
          All Genres
        </li>
        {genres.map((genre) => (
          <li
            key={genre._id}
            className={
              genre.name === currentGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => this.props.onClickGenre(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genre;
