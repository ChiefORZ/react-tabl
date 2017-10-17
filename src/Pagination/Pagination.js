import React, { Component } from 'react';

import PageButton from './PageButton';
import PropTypes from 'prop-types';

const pageStartIndex = 1;
const paginationSize = 5;

class Pagination extends Component {
  static propTypes = {
    changePage: PropTypes.func.isRequired,
    paginatorPageLimit: PropTypes.number.isRequired,
    paginatorCurrentPage: PropTypes.number.isRequired,
    rowsCount: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  };

  getPages() {
    let pages;
    let endPage = this.props.totalPages;
    if (endPage <= 0) return [];
    let startPage = Math.max(
      this.props.paginatorCurrentPage - Math.floor(paginationSize / 2),
      pageStartIndex
    );
    endPage = startPage + paginationSize - 1;
    if (endPage > this.lastPage) {
      endPage = this.lastPage;
      startPage = endPage - paginationSize + 1;
    }
    if (startPage !== pageStartIndex && this.props.totalPages > paginationSize) {
      pages = [this.props.firstPage, this.props.prePage];
    } else if (this.props.totalPages > 1) {
      pages = [this.props.prePage];
    } else {
      pages = [];
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i >= pageStartIndex) pages.push(i);
    }

    if (endPage <= this.lastPage && pages.length > 1) {
      pages.push(this.props.nextPage);
    }
    if (endPage !== this.lastPage) {
      pages.push(this.props.lastPage);
    }
    return pages;
  }

  render() {
    this.lastPage = pageStartIndex + this.props.totalPages - 1;
    const pages = this.getPages();
    const isStart = (page, { paginatorCurrentPage, firstPage, prePage }) =>
      paginatorCurrentPage === pageStartIndex && (page === firstPage || page === prePage);
    const isEnd = (page, { paginatorCurrentPage, nextPage, lastPage }) =>
      paginatorCurrentPage === this.lastPage && (page === nextPage || page === lastPage);
    const pageBtns = pages.map(page => {
      const isActive = page === this.props.paginatorCurrentPage;
      const isDisabled = isStart(page, this.props) || isEnd(page, this.props) ? true : false;
      return (
        <PageButton
          key={page}
          title={`${page}`}
          changePage={this.props.changePage}
          active={isActive}
          disabled={isDisabled}
        >
          {page}
        </PageButton>
      );
    });
    return (
      <center>
        <ul className="pagination">{pageBtns}</ul>
      </center>
    );
  }
}

export default Pagination;
