/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Cell from './Cell';
import PropTypes from 'prop-types';

export default class Row extends Component {
  /**
   * PropTypes are disabled in this component, because having them on slows
   * down the FixedDataTable hugely in DEV mode. You can enable them back for
   * development, but please don't commit this component with enabled propTypes.
   */
  static propTypes_DISABLED_FOR_PERFORMANCE = {
    /**
     * Array of <Column /> for the columns.
     */
    columns: PropTypes.array.isRequired,
    /**
     * The row index.
     */
    index: PropTypes.number.isRequired,

    rowIndex: PropTypes.number.isRequired,

    /**
     * Z-index on which the row will be displayed. Used e.g. for keeping
     * header and footer in front of other rows.
     */
    zIndex: PropTypes.number.isRequired,
  };

  // shouldComponentUpdate(nextProps) {
  // return this.props.rowIndex !== nextProps.rowIndex;
  // }

  renderCell(rowIndex, columnProps, key) {
    return (
      <Cell
        className={columnProps.cellClassName}
        key={key}
        rowIndex={rowIndex}
        columnKey={columnProps.columnKey}
        cell={columnProps.cell}
      />
    );
  }

  render() {
    const {columns} = this.props;
    const cells = new Array(columns.length);

    for (let i = 0, j = columns.length; i < j; i++) {
      const key = `cell_${i}`;
      cells[i] = this.renderCell(this.props.rowIndex, columns[i].props, key);
    }

    return (
      <tr
        className={this.props.className}
        onClick={this.props.onClick ? this._onClick : null}
        onDoubleClick={this.props.onDoubleClick ? this._onDoubleClick : null}
        onMouseDown={this.props.onMouseDown ? this._onMouseDown : null}
        onMouseEnter={this.props.onMouseEnter ? this._onMouseEnter : null}
        onMouseLeave={this.props.onMouseLeave ? this._onMouseLeave : null}
      >
        {cells}
      </tr>
    );
  }
}
