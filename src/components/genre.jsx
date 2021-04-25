import React, { Component } from "react";
class Genre extends Component {
  render() {
    let genres = this.props.genres;

    let currentGenre = this.props.currentGenre;
    return (
      <ul className="list-group">
        <li
          className={
            currentGenre === "All Genres"
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          All Genres
        </li>
        {genres.map((genre) => (
          <li
            key={genre._id}
            className={
              genre.name === this.currentGenre
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
