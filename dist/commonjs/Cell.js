'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */


var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',


    // shouldComponentUpdate(nextProps) {
    //   return this.props.rowIndex !== nextProps.rowIndex;
    // }

    value: function render() {
      var cellProps = _extends({}, this.props);
      var content = void 0;
      var td = this.props.rowIndex === -1 ? 'th' : 'td';
      if (_react2.default.isValidElement(this.props.cell)) {
        content = _react2.default.createElement(td, null, _react2.default.cloneElement(this.props.cell, cellProps));
      } else if (typeof this.props.cell === 'function') {
        content = _react2.default.createElement(td, null, this.props.cell(cellProps));
      } else {
        content = _react2.default.createElement(td, cellProps, this.props.cell);
      }
      return content;
    }
    /**
     * PropTypes are disabled in this component, because having them on slows
     * down the FixedDataTable hugely in DEV mode. You can enable them back for
     * development, but please don't commit this component with enabled propTypes.
     */

  }]);

  return Cell;
}(_react.Component);

Cell.propTypes_DISABLED_FOR_PERFORMANCE = {
  className: _propTypes2.default.string,

  cell: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),

  columnKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  /**
   * The row index that will be passed to `cellRenderer` to render.
   */
  rowIndex: _propTypes2.default.number.isRequired
};
exports.default = Cell;