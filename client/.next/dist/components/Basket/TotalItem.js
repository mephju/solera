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

var _colors = require('../../colors.js');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mephju/datatrans/basketapp/client/components/Basket/TotalItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: ', ';\n'], ['\n  background: ', ';\n']);

var Row = _styledComponents2.default.tr(_templateObject, _colors2.default.pinkLighten4);

var TotalItem = function (_Component) {
  (0, _inherits3.default)(TotalItem, _Component);

  function TotalItem() {
    (0, _classCallCheck3.default)(this, TotalItem);

    return (0, _possibleConstructorReturn3.default)(this, (TotalItem.__proto__ || (0, _getPrototypeOf2.default)(TotalItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(TotalItem, [{
    key: 'render',
    value: function render() {
      var total = this.props.total;

      return _react2.default.createElement(Row, { onClick: this.removeProduct, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('td', { colSpan: '3', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, ' Total '), _react2.default.createElement('td', { colSpan: '3', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, ' ', total.net, ' '));
    }
  }]);

  return TotalItem;
}(_react.Component);

TotalItem.propTypes = {
  total: _propTypes2.default.object.isRequired
};

exports.default = TotalItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFza2V0L1RvdGFsSXRlbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmZXRjaCIsInN0eWxlZCIsImNvbG9ycyIsIlJvdyIsInRyIiwicGlua0xpZ2h0ZW40IiwiVG90YWxJdGVtIiwidG90YWwiLCJwcm9wcyIsInJlbW92ZVByb2R1Y3QiLCJuZXQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7O0FBRW5CLElBQU0sTUFBTSwyQkFBTixBQUFhLG9CQUNILGlCQURoQixBQUFNLEFBQ2lCOztJQUdqQixBOzs7Ozs7Ozs7Ozs2QkFFSztVQUFBLEFBRVEsUUFGUixBQUVrQixLQUZsQixBQUVBLE1BRkEsQUFFUSxBQUVmOzs2QkFBUSxjQUFELE9BQUssU0FBUyxLQUFkLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNMO0FBREs7T0FBQSxrQkFDTCxjQUFBLFFBQUksU0FBSixBQUFZO29CQUFaO3NCQUFBO0FBQUE7U0FESyxBQUNMLEFBQ0EsNEJBQUEsY0FBQSxRQUFJLFNBQUosQUFBWTtvQkFBWjtzQkFBQTtBQUFBO1NBQWtCLFdBQWxCLEFBQXdCLEtBRjFCLEFBQU8sQUFFTCxBQUdIOzs7OztBQVhxQixBOztBQWV4QixVQUFBLEFBQVU7U0FDRCxvQkFBQSxBQUFVLE9BRG5CLEFBQXNCLEFBQ0ksQUFHMUI7QUFKc0IsQUFDcEI7O2tCQUdGLEFBQWUiLCJmaWxlIjoiVG90YWxJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21lcGhqdS9kYXRhdHJhbnMvYmFza2V0YXBwL2NsaWVudCJ9