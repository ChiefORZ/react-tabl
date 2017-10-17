import React, { Component, Children as ReactChildren } from 'react';

import Pagination from './Pagination';
import PropTypes from 'prop-types';
import Row from './Row';
import cx from 'classnames';
import invariant from 'invariant';

const HEADER = 'header';
const CELL = 'cell';

const PRE_PAGE = '<';
const NEXT_PAGE = '>';
const FIRST_PAGE = '<<';
const LAST_PAGE = '>>';

class Table extends Component {
  static propTypes = {
    bordered: PropTypes.bool,
    pagination: PropTypes.bool,
    paginatorPageLimit: PropTypes.number,
    paginatorPage: PropTypes.number,
    /**
     * Number of rows in the table.
     */
    rowsCount: PropTypes.number.isRequired,
    striped: PropTypes.bool,
  };

  static defaultProps = {
    bordered: false,
    pagination: false,
    paginatorPageLimit: 10,
    paginatorPage: 1,
    striped: false,
  };

  constructor(props) {
    super(props);
    this.state = this.calculateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.calculateState(nextProps, this.state));
  }

  changePage = p => {
    let page;
    switch (p) {
      case PRE_PAGE:
        page = parseInt(this.state.paginatorCurrentPage, 10) - 1;
        break;
      case NEXT_PAGE:
        page = parseInt(this.state.paginatorCurrentPage, 10) + 1;
        break;
      case FIRST_PAGE:
        page = 1;
        break;
      case LAST_PAGE:
        page = this.state.totalPages;
        break;
      default:
        page = p;
        break;
    }
    this.setState({
      paginatorCurrentPage: parseInt(page, 10),
    });
  };

  calculateState(props, oldState) {
    const init = !oldState;
    const children = [];
    ReactChildren.forEach(props.children, (child, index) => {
      if (child == null) {
        return;
      }
      invariant(child.type.__TableColumn__, 'childtype should be <Column />');
      children.push(child);
    });

    const columns = children;
    const columnInfo = this.populateColumnsAndColumnData(columns, oldState);

    const totalPages = Math.ceil(props.rowsCount / props.paginatorPageLimit);
    const newState = {
      ...columnInfo,
      ...props,

      columns,

      totalPages,
    };

    // update current page, if a different Page was requested
    if (
      (init && props.paginatorPage) ||
      (oldState && props.paginatorPage !== oldState.paginatorPage)
    ) {
      newState.paginatorCurrentPage = props.paginatorPage;
    }
    // update current page, if the requested page exceedes totalPages
    if (newState.paginatorCurrentPage > totalPages) {
      newState.paginatorCurrentPage = totalPages;
    }

    return newState;
  }

  populateColumnsAndColumnData(columns, oldState) {
    return {
      bodyColumns: columns,
      headerColumns: this.selectColumnElement(HEADER, columns),
    };
  }

  selectColumnElement(type, columns) {
    const newColumns = [];
    for (let i = 0; i < columns.length; ++i) {
      const column = columns[i];
      newColumns.push(
        React.cloneElement(column, {
          cell: type ? column.props[type] : column.props[CELL],
        })
      );
    }
    return newColumns;
  }

  renderRows() {
    const { pagination, paginatorCurrentPage, paginatorPageLimit, rowsCount } = this.state;
    const rows = [];
    let i = 0;
    let j = rowsCount;

    if (pagination) {
      i = (paginatorCurrentPage - 1) * paginatorPageLimit;
      j =
        paginatorCurrentPage * paginatorPageLimit > rowsCount
          ? rowsCount
          : (paginatorCurrentPage - 1) * paginatorPageLimit + paginatorPageLimit;
    }

    for (i; i < j; ++i) {
      rows[i] = <Row key={i} columns={this.state.bodyColumns} rowIndex={i} />;
    }
    return rows;
  }

  render() {
    const header = <Row key={HEADER} rowIndex={-1} zIndex={1} columns={this.state.headerColumns} />;
    const rows = this.renderRows();
    const pagination = this.state.pagination ? (
      <Pagination
        {...this.state}
        changePage={this.changePage}
        prePage={PRE_PAGE}
        nextPage={NEXT_PAGE}
        firstPage={FIRST_PAGE}
        lastPage={LAST_PAGE}
      />
    ) : null;
    return (
      <div>
        <table
          className={cx('table', {
            'table-striped': this.props.striped,
            'table-bordered': this.props.bordered,
          })}
        >
          <thead>{header}</thead>
          <tbody>{rows}</tbody>
        </table>
        {pagination}
      </div>
    );
  }
}

export default Table;
