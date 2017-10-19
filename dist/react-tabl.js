/**
 * ReactTabl v0.6.0 
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactTabl"] = factory(require("react"));
	else
		root["ReactTabl"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(9)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.Column = undefined;

var _Column = __webpack_require__(4);

var _Column2 = _interopRequireDefault(_Column);

var _Table = __webpack_require__(5);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Column = _Column2.default;
exports.Table = _Table2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Column = function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'td',
        null,
        'Column'
      );
    }
  }], [{
    key: '__TableColumn__',
    value: function __TableColumn__() {
      return true;
    }
  }]);

  return Column;
}(_react.Component);

exports.default = Column;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Pagination = __webpack_require__(6);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Row = __webpack_require__(13);

var _Row2 = _interopRequireDefault(_Row);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _invariant = __webpack_require__(15);

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pagination = __webpack_require__(7);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Pagination2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageButton = __webpack_require__(8);

var _PageButton2 = _interopRequireDefault(_PageButton);

var _propTypes = __webpack_require__(1);

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call.apply(_ref, [this].concat(args))), _this), _this.pageBtnClick = function (e) {
      e.preventDefault();
      if (!_this.props.disabled) {
        _this.props.changePage(e.currentTarget.textContent);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageButton, [{
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)('page-item', {
        active: this.props.active,
        disabled: this.props.disabled,
        hidden: this.props.hidden
      });
      return _react2.default.createElement(
        'li',
        { className: classes, title: this.props.title },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.pageBtnClick, className: 'page-link' },
          this.props.children
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = {
  title: _propTypes2.default.string,
  changePage: _propTypes2.default.func,
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

exports.default = PageButton;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(11);
var ReactPropTypesSecret = __webpack_require__(12);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Cell = __webpack_require__(14);

var _Cell2 = _interopRequireDefault(_Cell);

var _propTypes = __webpack_require__(1);

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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ })
/******/ ]);
});