import React, { Component } from "react";
class Pagination extends Component {
  getPages = (count, pageSize) => {
    const numberOfPages = Math.ceil(count / pageSize);
    const arr = Array.from({ length: numberOfPages }, (_, index) => index + 1);
    return arr;
  };
  state = {
    pages: this.getPages(this.props.count, this.props.pageSize),
  };
  render() {
    {
      console.log(this.state.pages);
    }
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {this.state.pages.map((page) => (
            <li className="page-item">
              <a className="page-link" href="#">
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
