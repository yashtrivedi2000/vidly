import React, { Component } from "react";
class Pagination extends Component {
  getPages = (count, pageSize) => {
    const numberOfPages = Math.ceil(count / pageSize);
    const arr = Array.from({ length: numberOfPages }, (_, index) => index + 1);
    return arr;
  };
  state = {
    pages: this.getPages(this.props.count, this.props.pageSize),
    currentPage: this.props.currentPage,
  };
  render() {
    if (this.state.pages.length == 1) return null;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {this.state.pages.map((page) => (
            <li
              key={page}
              className={
                page === this.props.currentPage
                  ? "page-item active"
                  : "page-item"
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() => this.props.onClick(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
