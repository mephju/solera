'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _RemoveButton = require('./RemoveButton.js');

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mephju/datatrans/basketapp/client/components/Basket/BasketItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 5px;\n  background: pink;\n  color: white;\n  font-weight: bold;\n  padding: 5px 20px;\n  margin-right: 20px;\n  cursor: pointer;\n'], ['\n  border-radius: 5px;\n  background: pink;\n  color: white;\n  font-weight: bold;\n  padding: 5px 20px;\n  margin-right: 20px;\n  cursor: pointer;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var AddButton = _styledComponents2.default.button(_templateObject);

var Row = _styledComponents2.default.tr(_templateObject2);

var Basket = function (_Component) {
  (0, _inherits3.default)(Basket, _Component);

  function Basket(props) {
    (0, _classCallCheck3.default)(this, Basket);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Basket.__proto__ || (0, _getPrototypeOf2.default)(Basket)).call(this, props));

    _this.removeProduct = _this.removeProduct.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Basket, [{
    key: 'removeProduct',
    value: function removeProduct() {
      this.props.removeProduct(this.props.product);
    }
  }, {
    key: 'render',
    value: function render() {
      var product = this.props.product;

      return _react2.default.createElement(Row, { onClick: this.removeProduct, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, ' ', product.name, ' '), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, ' ', product.amount, ' '), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, ' ', product.price, ' '), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, ' ', product.price * product.amount, ' '), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, ' ', product.discount, ' '), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_RemoveButton2.default, { onClick: this.removeProduct, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })));
    }
  }]);

  return Basket;
}(_react.Component);

Basket.propTypes = {
  removeProduct: _propTypes2.default.func.isRequired,
  product: _propTypes2.default.object.isRequired
};

exports.default = Basket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFza2V0L0Jhc2tldEl0ZW0uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZmV0Y2giLCJzdHlsZWQiLCJSZW1vdmVCdXR0b24iLCJBZGRCdXR0b24iLCJidXR0b24iLCJSb3ciLCJ0ciIsIkJhc2tldCIsInByb3BzIiwicmVtb3ZlUHJvZHVjdCIsImJpbmQiLCJwcm9kdWN0IiwibmFtZSIsImFtb3VudCIsInByaWNlIiwiZGlzY291bnQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sWUFBWSwyQkFBWixBQUFtQixPQUF6Qjs7QUFVQSxJQUFNLE1BQU0sMkJBQU4sQUFBYSxHQUFuQjs7SSxBQUdNO2tDQUVKOztrQkFBQSxBQUFZLE9BQU87d0NBQUE7O3NJQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLLGdCQUFlLE1BQUEsQUFBSyxjQUFMLEFBQW1CLEtBSHRCLEFBR2pCO1dBQ0Q7Ozs7O29DQUVlLEFBQ2Q7V0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFjLEtBQUEsQUFBSyxNQUE5QixBQUFvQyxBQUNyQzs7Ozs2QkFFUTtVQUFBLEFBRVEsVUFGUixBQUVvQixLQUZwQixBQUVBLE1BRkEsQUFFUSxBQUVmOzs2QkFBUSxjQUFELE9BQUssU0FBUyxLQUFkLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNMO0FBREs7T0FBQSxrQkFDTCxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBTSxhQUFOLEFBQWMsTUFEVCxBQUNMLEFBQ0Esc0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU0sYUFBTixBQUFjLFFBRlQsQUFFTCxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFNLGFBQU4sQUFBYyxPQUhULEFBR0wsQUFDQSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBTSxhQUFBLEFBQVEsUUFBUSxRQUF0QixBQUE4QixRQUp6QixBQUlMLEFBQ0Esc0JBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU0sYUFBTixBQUFjLFVBTFQsQUFLTCxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsd0NBQWEsU0FBUyxLQUF2QixBQUE0QjtvQkFBNUI7c0JBUEosQUFBTyxBQU1MLEFBQ0UsQUFJTDtBQUpLOzs7Ozs7QUF2QmEsQTs7QUErQnJCLE9BQUEsQUFBTztpQkFDVSxvQkFBQSxBQUFVLEtBRFIsQUFDYSxBQUM5QjtXQUFTLG9CQUFBLEFBQVUsT0FGckIsQUFBbUIsQUFFUyxBQUc1QjtBQUxtQixBQUNqQjs7a0JBSUYsQUFBZSIsImZpbGUiOiJCYXNrZXRJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21lcGhqdS9kYXRhdHJhbnMvYmFza2V0YXBwL2NsaWVudCJ9