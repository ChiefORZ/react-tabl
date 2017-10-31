'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageButton = require('./PageButton');

var _PageButton2 = _interopRequireDefault(_PageButton);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageStartIndex = 1;
var paginationSize = 5;

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'getPages',
    value: function getPages() {
      var pages = void 0;
      var endPage = this.props.totalPages;
      if (endPage <= 0) return [];
      var startPage = Math.max(this.props.paginatorCurrentPage - Math.floor(paginationSize / 2), pageStartIndex);
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

      for (var i = startPage; i <= endPage; i++) {
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.lastPage = pageStartIndex + this.props.totalPages - 1;
      var pages = this.getPages();
      var isStart = function isStart(page, _ref) {
        var paginatorCurrentPage = _ref.paginatorCurrentPage,
            firstPage = _ref.firstPage,
            prePage = _ref.prePage;
        return paginatorCurrentPage === pageStartIndex && (page === firstPage || page === prePage);
      };
      var isEnd = function isEnd(page, _ref2) {
        var paginatorCurrentPage = _ref2.paginatorCurrentPage,
            nextPage = _ref2.nextPage,
            lastPage = _ref2.lastPage;
        return paginatorCurrentPage === _this2.lastPage && (page === nextPage || page === lastPage);
      };
      var pageBtns = pages.map(function (page) {
        var isActive = page === _this2.props.paginatorCurrentPage;
        var isDisabled = isStart(page, _this2.props) || isEnd(page, _this2.props) ? true : false;
        return _react2.default.createElement(
          _PageButton2.default,
          {
            key: page,
            title: '' + page,
            changePage: _this2.props.changePage,
            active: isActive,
            disabled: isDisabled
          },
          page
        );
      });
      return _react2.default.createElement(
        'center',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'pagination' },
          pageBtns
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  changePage: _propTypes2.default.func.isRequired,
  paginatorPageLimit: _propTypes2.default.number.isRequired,
  paginatorCurrentPage: _propTypes2.default.number.isRequired,
  rowsCount: _propTypes2.default.number.isRequired,
  totalPages: _propTypes2.default.number.isRequired
};
exports.default = Pagination;