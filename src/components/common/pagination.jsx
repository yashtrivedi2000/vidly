import PropTypes from "prop-types";
import React, { Component } from "react";
class Pagination extends Component {
  getPages = (count, pageSize) => {
    const numberOfPages = Math.ceil(count / pageSize);
    const arr = Array.from({ length: numberOfPages }, (_, index) => index + 1);
    return arr;
  };

  render() {
    const { currentPage, count, onClick, pageSize } = this.props;
    const pages = this.getPages(count, pageSize);

    if (pages.length === 1) return null;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" href="#" onClick={() => onClick(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
};
export default Pagination;
