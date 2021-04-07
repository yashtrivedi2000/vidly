import React, { Component } from "react";
class Like extends Component {
  render = () => {
    return <div>{this.handleLike(this.props.movie)}</div>;
  };
  handleLike = (movie) => {
    if (movie.isLiked)
      return (
        <i
          className="fa fa-heart"
          aria-hidden="true"
          onClick={() => this.props.onClick(movie)}
        ></i>
      );
    else
      return (
        <i
          className="fa fa-heart-o"
          aria-hidden="true"
          onClick={() => this.props.onClick(movie)}
        ></i>
      );
  };
}

export default Like;
