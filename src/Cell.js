/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Cell extends Component {
  /**
   * PropTypes are disabled in this component, because having them on slows
   * down the FixedDataTable hugely in DEV mode. You can enable them back for
   * development, but please don't commit this component with enabled propTypes.
   */
  static propTypes_DISABLED_FOR_PERFORMANCE = {
    className: PropTypes.string,

    cell: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),

    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The row index that will be passed to `cellRenderer` to render.
     */
    rowIndex: PropTypes.number.isRequired,
  };

  // shouldComponentUpdate(nextProps) {
  //   return this.props.rowIndex !== nextProps.rowIndex;
  // }

  render() {
    const cellProps = {
      ...this.props,
    };
    let content;
    const td = this.props.rowIndex === -1 ? 'th' : 'td';
    if (React.isValidElement(this.props.cell)) {
      content = React.createElement(td, null, React.cloneElement(this.props.cell, cellProps));
    } else if (typeof this.props.cell === 'function') {
      content = React.createElement(td, null, this.props.cell(cellProps));
    } else {
      content = React.createElement(td, cellProps, this.props.cell);
    }
    return content;
  }
}
