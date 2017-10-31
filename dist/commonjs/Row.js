'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */


var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'renderCell',


    // shouldComponentUpdate(nextProps) {
    // return this.props.rowIndex !== nextProps.rowIndex;
    // }

    value: function renderCell(rowIndex, columnProps, key) {
      return _react2.default.createElement(_Cell2.default, {
        className: columnProps.cellClassName,
        key: key,
        rowIndex: rowIndex,
        columnKey: columnProps.columnKey,
        cell: columnProps.cell
      });
    }
    /**
     * PropTypes are disabled in this component, because having them on slows
     * down the FixedDataTable hugely in DEV mode. You can enable them back for
     * development, but please don't commit this component with enabled propTypes.
     */

  }, {
    key: 'render',
    value: function render() {
      var columns = this.props.columns;

      var cells = new Array(columns.length);

      for (var i = 0, j = columns.length; i < j; i++) {
        var key = 'cell_' + i;
        cells[i] = this.renderCell(this.props.rowIndex, columns[i].props, key);
      }

      return _react2.default.createElement(
        'tr',
        {
          className: this.props.className,
          onClick: this.props.onClick ? this._onClick : null,
          onDoubleClick: this.props.onDoubleClick ? this._onDoubleClick : null,
          onMouseDown: this.props.onMouseDown ? this._onMouseDown : null,
          onMouseEnter: this.props.onMouseEnter ? this._onMouseEnter : null,
          onMouseLeave: this.props.onMouseLeave ? this._onMouseLeave : null
        },
        cells
      );
    }
  }]);

  return Row;
}(_react.Component);

Row.propTypes_DISABLED_FOR_PERFORMANCE = {
  /**
   * Array of <Column /> for the columns.
   */
  columns: _propTypes2.default.array.isRequired,
  /**
   * The row index.
   */
  index: _propTypes2.default.number.isRequired,

  rowIndex: _propTypes2.default.number.isRequired,

  /**
   * Z-index on which the row will be displayed. Used e.g. for keeping
   * header and footer in front of other rows.
   */
  zIndex: _propTypes2.default.number.isRequired
};
exports.default = Row;