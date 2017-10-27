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

var _jsxFileName = '/home/mephju/datatrans/basketapp/client/components/Basket/SumItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 20px;\n  background: ', ';\n\n'], ['\n  margin-top: 20px;\n  background: ', ';\n\n']);

var Row = _styledComponents2.default.tr(_templateObject, _colors2.default.pinkLighten4);

var SumItem = function (_Component) {
  (0, _inherits3.default)(SumItem, _Component);

  function SumItem() {
    (0, _classCallCheck3.default)(this, SumItem);

    return (0, _possibleConstructorReturn3.default)(this, (SumItem.__proto__ || (0, _getPrototypeOf2.default)(SumItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(SumItem, [{
    key: 'render',
    value: function render() {
      var total = this.props.total;

      return _react2.default.createElement(Row, { onClick: this.removeProduct, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('td', { colSpan: '3', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, ' Sum '), _react2.default.createElement('td', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, ' ', total.gross, ' '), _react2.default.createElement('td', { colSpan: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, ' ', total.discount, ' '));
    }
  }]);

  return SumItem;
}(_react.Component);

SumItem.propTypes = {
  total: _propTypes2.default.object.isRequired
};

exports.default = SumItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFza2V0L1N1bUl0ZW0uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZmV0Y2giLCJzdHlsZWQiLCJjb2xvcnMiLCJSb3ciLCJ0ciIsInBpbmtMaWdodGVuNCIsIlN1bUl0ZW0iLCJ0b3RhbCIsInByb3BzIiwicmVtb3ZlUHJvZHVjdCIsImdyb3NzIiwiZGlzY291bnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFROzs7O0FBQ1IsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7O0FBRW5CLElBQU0sTUFBTSwyQkFBTixBQUFhLG9CQUVILGlCQUZoQixBQUFNLEFBRWlCOztJLEFBSWpCOzs7Ozs7Ozs7Ozs2QkFFSztVQUFBLEFBRVEsUUFGUixBQUVrQixLQUZsQixBQUVBLE1BRkEsQUFFUSxBQUVmOzs2QkFBUSxjQUFELE9BQUssU0FBUyxLQUFkLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNMO0FBREs7T0FBQSxrQkFDTCxjQUFBLFFBQUksU0FBSixBQUFZO29CQUFaO3NCQUFBO0FBQUE7U0FESyxBQUNMLEFBQ0EsMEJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU0sV0FBTixBQUFZLE9BRlAsQUFFTCxBQUNBLHNCQUFBLGNBQUEsUUFBSSxTQUFKLEFBQVk7b0JBQVo7c0JBQUE7QUFBQTtTQUFrQixXQUFsQixBQUF3QixVQUgxQixBQUFPLEFBR0wsQUFHSDs7Ozs7QUFabUIsQTs7QUFnQnRCLFFBQUEsQUFBUTtTQUNDLG9CQUFBLEFBQVUsT0FEbkIsQUFBb0IsQUFDTSxBQUcxQjtBQUpvQixBQUNsQjs7a0JBR0YsQUFBZSIsImZpbGUiOiJTdW1JdGVtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21lcGhqdS9kYXRhdHJhbnMvYmFza2V0YXBwL2NsaWVudCJ9