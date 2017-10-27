'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = require('react-redux');

var _Basket = require('./Basket/Basket.js');

var _Basket2 = _interopRequireDefault(_Basket);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mephju/datatrans/basketapp/client/components/Main.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 20px;\n  padding: 0 20px;\n'], ['\n  margin: 0 20px;\n  padding: 0 20px;\n']);

var Page = _styledComponents2.default.div(_templateObject);

var Main = function Main(props) {
  return _react2.default.createElement(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), props.children, _react2.default.createElement(_Basket2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Main);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFpbi5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjb25uZWN0IiwiQmFza2V0Iiwic3R5bGVkIiwiUGFnZSIsImRpdiIsIk1haW4iLCJwcm9wcyIsImNoaWxkcmVuIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7Ozs7QUFHUCxJQUFNLE9BQU8sMkJBQVAsQUFBYyxJQUFwQjs7QUFLQSxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFEO3lCQUFZLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ3RCO0FBRHNCO0FBQUEsR0FBQSxrQkFDdEIsQUFBQzs7Z0JBQUQ7a0JBRHNCLEFBQ3RCLEFBQ0M7QUFERDtBQUFBLFlBRHNCLEFBRWYsQUFDUCwwQkFBQSxBQUFDOztnQkFBRDtrQkFIVyxBQUFXLEFBR3RCO0FBQUE7QUFBQTtBQUhGLEFBT0E7OzJDQUF1QixpQkFBQTtTQUFBLEFBQVM7QUFBakIsQ0FBQSxFQUFmLEFBQWUsQUFBd0IiLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXBoanUvZGF0YXRyYW5zL2Jhc2tldGFwcC9jbGllbnQifQ==