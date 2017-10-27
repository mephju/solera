'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../components/Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _Main = require('../components/Main.js');

var _Main2 = _interopRequireDefault(_Main);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _ProductItem = require('../components/ProductItem.js');

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store/store.js');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mephju/datatrans/basketapp/client/pages/index.js?entry',
    _this3 = undefined;

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  list-style: none;\n  padding: 0;\n'], ['\n  list-style: none;\n  padding: 0;\n']);

var ProductList = _styledComponents2.default.ul(_templateObject);

var ProductListPage = function (_Component) {
  (0, _inherits3.default)(ProductListPage, _Component);

  function ProductListPage() {
    (0, _classCallCheck3.default)(this, ProductListPage);

    return (0, _possibleConstructorReturn3.default)(this, (ProductListPage.__proto__ || (0, _getPrototypeOf2.default)(ProductListPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductListPage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      return _react2.default.createElement(_Main2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, ' Store Products '), _react2.default.createElement(ProductList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, props.products.entries.map(function (product) {
        return _react2.default.createElement(_ProductItem2.default, {
          key: product.id,
          product: product,
          addProduct: _this2.props.addProduct,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        });
      }))));
    }
  }]);

  return ProductListPage;
}(_react.Component);

ProductListPage.propTypes = {
  products: _propTypes2.default.object.isRequired
};

ProductListPage.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, payload;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('http://localhost:3000/api/products');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          payload = _context.sent;
          return _context.abrupt('return', { products: payload });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this3);
}));

var mapDispatch = function mapDispatch(dispatch) {
  return {
    addProduct: function addProduct(product) {
      dispatch((0, _store.addProduct)(product));
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, mapDispatch)(ProductListPage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNvbXBvbmVudCIsIk1haW4iLCJQcm9wVHlwZXMiLCJmZXRjaCIsIlByb2R1Y3RJdGVtIiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIiwiYWRkUHJvZHVjdCIsInN0eWxlZCIsIlByb2R1Y3RMaXN0IiwidWwiLCJQcm9kdWN0TGlzdFBhZ2UiLCJwcm9wcyIsInByb2R1Y3RzIiwiZW50cmllcyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwicGF5bG9hZCIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUNuQixBQUFROzs7O0FBQ1IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFXLEFBQWlCOztBQUNwQyxBQUFPOzs7Ozs7Ozs7OztBQUVQLElBQU0sY0FBYywyQkFBZCxBQUFxQixHQUEzQjs7SUFJTSxBOzs7Ozs7Ozs7Ozs2QkFFSzttQkFBQTs7VUFBQSxBQUVBLFFBRkEsQUFFUyxLQUZULEFBRUEsQUFFUDs7NkJBQU8sQUFBQzs7b0JBQUQ7c0JBQUEsQUFDTDtBQURLO0FBQUEsT0FBQSxrQkFDTCxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsZUFDRyxBQUFNLFNBQU4sQUFBZSxRQUFmLEFBQXVCLElBQUksbUJBQUE7K0JBQzFCLEFBQUM7ZUFDTSxRQURQLEFBQ2UsQUFDYjttQkFGRixBQUVXLEFBQ1Q7c0JBQVksT0FBQSxBQUFLLE1BSG5CLEFBR3lCOztzQkFIekI7d0JBRDBCLEFBQzFCO0FBQUE7QUFDRSxTQURGO0FBTFIsQUFBTyxBQUNMLEFBRUUsQUFDRyxBQVdSOzs7OztBQXJCMkIsQTs7QUF5QjlCLGdCQUFBLEFBQWdCO1lBQ0osb0JBQUEsQUFBVSxPQUR0QixBQUE0QixBQUNDO0FBREQsQUFDMUI7O0FBR0YsZ0JBQUEsQUFBZ0IsMkZBQWtCLG1CQUFBO1dBQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO2lCQUNiLGlDQURhLEFBQ2IsQUFBTTs7YUFBbkI7QUFEMEIseUJBQUE7MEJBQUE7aUJBRVYsSUFGVSxBQUVWLEFBQUk7O2FBQXBCO0FBRjBCLDZCQUFBOzJDQUl6QixFQUFFLFVBSnVCLEFBSXpCLEFBQVk7O2FBSmE7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQWxDOztBQVFBLElBQU0sY0FBYyxTQUFkLEFBQWMsc0JBQUE7O0FBQWEsb0NBQUEsQUFDcEIsU0FBUyxBQUFFO2VBQVMsdUJBQVQsQUFBUyxBQUFXLEFBQVc7QUFEbkMsQUFBYTtBQUFBLEFBQy9CO0FBREYsQUFLQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixNQUFyQixBQUEyQixhQUExQyxBQUFlLEFBQXdDIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21lcGhqdS9kYXRhdHJhbnMvYmFza2V0YXBwL2NsaWVudCJ9