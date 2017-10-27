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

var _colors = require('../colors.js');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mephju/datatrans/basketapp/client/components/ProductItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-radius: 5px;\n  border: 2px solid ', ';\n  background: ', ';\n  color: white;\n  font-weight: bold;\n  padding: 5px 20px;\n  margin-right: 20px;\n  cursor: pointer;\n\n'], ['\n  border-radius: 5px;\n  border: 2px solid ', ';\n  background: ', ';\n  color: white;\n  font-weight: bold;\n  padding: 5px 20px;\n  margin-right: 20px;\n  cursor: pointer;\n\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 5px;\n\n\n'], ['\n  margin-bottom: 5px;\n\n\n']);

var AddButton = _styledComponents2.default.button(_templateObject, _colors2.default.pinkDarken3, _colors2.default.pink);

var Li = _styledComponents2.default.li(_templateObject2);

var ProductItem = function (_Component) {
  (0, _inherits3.default)(ProductItem, _Component);

  function ProductItem(props) {
    (0, _classCallCheck3.default)(this, ProductItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProductItem.__proto__ || (0, _getPrototypeOf2.default)(ProductItem)).call(this, props));

    _this.addProduct = _this.addProduct.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ProductItem, [{
    key: 'addProduct',
    value: function addProduct() {
      this.props.addProduct(this.props.product);
    }
  }, {
    key: 'render',
    value: function render() {
      var product = this.props.product;

      return _react2.default.createElement(Li, { key: product.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(AddButton, { onClick: this.addProduct, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, ' Buy '), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, ' ', product.name, ' '), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, ' ', product.price, ' '));
    }
  }]);

  return ProductItem;
}(_react.Component);

ProductItem.propTypes = {
  product: _propTypes2.default.object.isRequired,
  addProduct: _propTypes2.default.func.isRequired
};

exports.default = ProductItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZmV0Y2giLCJzdHlsZWQiLCJjb2xvcnMiLCJBZGRCdXR0b24iLCJidXR0b24iLCJwaW5rRGFya2VuMyIsInBpbmsiLCJMaSIsImxpIiwiUHJvZHVjdEl0ZW0iLCJwcm9wcyIsImFkZFByb2R1Y3QiLCJiaW5kIiwicHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVE7Ozs7QUFDUixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7Ozs7O0FBRW5CLElBQU0sWUFBWSwyQkFBWixBQUFtQix3QkFFSCxpQkFGaEIsQUFFdUIsYUFDYixpQkFIaEIsQUFBTSxBQUdpQjs7QUFTdkIsSUFBTSxLQUFLLDJCQUFMLEFBQVksR0FBbEI7O0lBTU0sQTt1Q0FFSjs7dUJBQUEsQUFBWSxPQUFPO3dDQUFBOztnSkFBQSxBQUNYLEFBRU47O1VBQUEsQUFBSyxhQUFhLE1BQUEsQUFBSyxXQUFMLEFBQWdCLEtBSGpCLEFBR2pCO1dBQ0Q7Ozs7O2lDQUVZLEFBQ1g7V0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxBQUNsQzs7Ozs2QkFFUTtVQUFBLEFBRVEsVUFGUixBQUVvQixLQUZwQixBQUVBLE1BRkEsQUFFUSxBQUVmOzs2QkFBUSxjQUFELE1BQUksS0FBSyxRQUFULEFBQWlCO29CQUFqQjtzQkFBQSxBQUNMO0FBREs7T0FBQSxrQkFDSixjQUFELGFBQVcsU0FBUyxLQUFwQixBQUF5QjtvQkFBekI7c0JBQUE7QUFBQTtTQURLLEFBQ0wsQUFDQSwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBUSxhQUFSLEFBQWdCLE1BRlgsQUFFTCxBQUNBLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFRLGFBQVIsQUFBZ0IsT0FIbEIsQUFBTyxBQUdMLEFBRUg7Ozs7O0FBckJ1QixBOztBQXlCMUIsWUFBQSxBQUFZO1dBQ0Qsb0JBQUEsQUFBVSxPQURHLEFBQ0ksQUFDMUI7Y0FBWSxvQkFBQSxBQUFVLEtBRnhCLEFBQXdCLEFBRUssQUFHN0I7QUFMd0IsQUFDdEI7O2tCQUlGLEFBQWUiLCJmaWxlIjoiUHJvZHVjdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWVwaGp1L2RhdGF0cmFucy9iYXNrZXRhcHAvY2xpZW50In0=