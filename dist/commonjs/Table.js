'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HEADER = 'header';
var CELL = 'cell';

var PRE_PAGE = '<';
var NEXT_PAGE = '>';
var FIRST_PAGE = '<<';
var LAST_PAGE = '>>';

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.changePage = function (p) {
      var page = void 0;
      switch (p) {
        case PRE_PAGE:
          page = parseInt(_this.state.paginatorCurrentPage, 10) - 1;
          break;
        case NEXT_PAGE:
          page = parseInt(_this.state.paginatorCurrentPage, 10) + 1;
          break;
        case FIRST_PAGE:
          page = 1;
          break;
        case LAST_PAGE:
          page = _this.state.totalPages;
          break;
        default:
          page = p;
          break;
      }
      _this.setState({
        paginatorCurrentPage: parseInt(page, 10)
      });
    };

    _this.state = _this.calculateState(_this.props);
    return _this;
  }

  _createClass(Table, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.calculateState(nextProps, this.state));
    }
  }, {
    key: 'calculateState',
    value: function calculateState(props, oldState) {
      var init = !oldState;
      var children = [];
      _react.Children.forEach(props.children, function (child, index) {
        if (child == null) {
          return;
        }
        (0, _invariant2.default)(child.type.__TableColumn__, 'childtype should be <Column />');
        children.push(child);
      });

      var columns = children;
      var columnInfo = this.populateColumnsAndColumnData(columns, oldState);

      var totalPages = Math.ceil(props.rowsCount / props.paginatorPageLimit);
      var newState = _extends({}, columnInfo, props, {

        columns: columns,

        totalPages: totalPages
      });

      // update current page, if a different Page was requested
      if (init && props.paginatorPage || oldState && props.paginatorPage !== oldState.paginatorPage) {
        newState.paginatorCurrentPage = props.paginatorPage;
      }
      // update current page, if the requested page exceedes totalPages
      if (newState.paginatorCurrentPage > totalPages) {
        newState.paginatorCurrentPage = totalPages;
      }

      return newState;
    }
  }, {
    key: 'populateColumnsAndColumnData',
    value: function populateColumnsAndColumnData(columns, oldState) {
      return {
        bodyColumns: columns,
        headerColumns: this.selectColumnElement(HEADER, columns)
      };
    }
  }, {
    key: 'selectColumnElement',
    value: function selectColumnElement(type, columns) {
      var newColumns = [];
      for (var i = 0; i < columns.length; ++i) {
        var column = columns[i];
        newColumns.push(_react2.default.cloneElement(column, {
          cell: type ? column.props[type] : column.props[CELL]
        }));
      }
      return newColumns;
    }
  }, {
    key: 'renderRows',
    value: function renderRows() {
      var _state = this.state,
          pagination = _state.pagination,
          paginatorCurrentPage = _state.paginatorCurrentPage,
          paginatorPageLimit = _state.paginatorPageLimit,
          rowsCount = _state.rowsCount;

      var rows = [];
      var i = 0;
      var j = rowsCount;

      if (pagination) {
        i = (paginatorCurrentPage - 1) * paginatorPageLimit;
        j = paginatorCurrentPage * paginatorPageLimit > rowsCount ? rowsCount : (paginatorCurrentPage - 1) * paginatorPageLimit + paginatorPageLimit;
      }

      for (i; i < j; ++i) {
        rows[i] = _react2.default.createElement(_Row2.default, { key: i, columns: this.state.bodyColumns, rowIndex: i });
      }
      return rows;
    }
  }, {
    key: 'render',
    value: function render() {
      var header = _react2.default.createElement(_Row2.default, { key: HEADER, rowIndex: -1, zIndex: 1, columns: this.state.headerColumns });
      var rows = this.renderRows();
      var pagination = this.state.pagination ? _react2.default.createElement(_Pagination2.default, _extends({}, this.state, {
        changePage: this.changePage,
        prePage: PRE_PAGE,
        nextPage: NEXT_PAGE,
        firstPage: FIRST_PAGE,
        lastPage: LAST_PAGE
      })) : null;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          {
            className: (0, _classnames2.default)('table', {
              'table-striped': this.props.striped,
              'table-bordered': this.props.bordered
            })
          },
          _react2.default.createElement(
            'thead',
            null,
            header
          ),
          _react2.default.createElement(
            'tbody',
            null,
            rows
          )
        ),
        pagination
      );
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  bordered: _propTypes2.default.bool,
  pagination: _propTypes2.default.bool,
  paginatorPageLimit: _propTypes2.default.number,
  paginatorPage: _propTypes2.default.number,
  /**
   * Number of rows in the table.
   */
  rowsCount: _propTypes2.default.number.isRequired,
  striped: _propTypes2.default.bool
};
Table.defaultProps = {
  bordered: false,
  pagination: false,
  paginatorPageLimit: 10,
  paginatorPage: 1,
  striped: false
};
exports.default = Table;