'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _store = require('../../store/store.js');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _BasketItem = require('./BasketItem.js');

var _BasketItem2 = _interopRequireDefault(_BasketItem);

var _connect = require('react-redux/lib/connect/connect.js');

var _connect2 = _interopRequireDefault(_connect);

var _TotalItem = require('./TotalItem.js');

var _TotalItem2 = _interopRequireDefault(_TotalItem);

var _SumItem = require('./SumItem.js');

var _SumItem2 = _interopRequireDefault(_SumItem);

var _colors = require('../../colors.js');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/mephju/datatrans/basketapp/client/components/Basket/Basket.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  list-style: none;\n  background: ', ';\n  padding: 20px;\n'], ['\n  list-style: none;\n  background: ', ';\n  padding: 20px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 0 20px;\n  padding-left: 0;\n  &:last-child {\n    padding-right: 0;\n  }\n\n'], ['\n  padding: 0 20px;\n  padding-left: 0;\n  &:last-child {\n    padding-right: 0;\n  }\n\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 20px;\n  font-style: italic;\n  margin: 20px 0px;\n'], ['\n  font-size: 20px;\n  font-style: italic;\n  margin: 20px 0px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 50px;\n'], ['\n  margin-top: 50px;\n']);

var Table = _styledComponents2.default.table(_templateObject, _colors2.default.pinkLighten5);

var Column = _styledComponents2.default.th(_templateObject2);
var EmptyItem = _styledComponents2.default.span(_templateObject3);

var StyledBasket = _styledComponents2.default.div(_templateObject4);
var Basket = function Basket(props) {
  var basket = props.basket,
      total = props.total;

  return _react2.default.createElement(StyledBasket, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, ' Basket '), _react2.default.createElement(Table, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement('thead', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, ' Product '), _react2.default.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, ' Amount '), _react2.default.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, ' Price '), _react2.default.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, ' Total '), _react2.default.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, ' Discount '), _react2.default.createElement(Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, ' Remove Item '))), _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, basket.length === 0 && _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement('td', { colSpan: '6', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement(EmptyItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, ' Basket is empty '))), basket.map(function (product, index) {
    return _react2.default.createElement(_BasketItem2.default, {
      key: product.id,
      product: product,
      removeProduct: props.removeProduct,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    });
  }), _react2.default.createElement(_SumItem2.default, { total: total, __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), _react2.default.createElement(_TotalItem2.default, { total: total, __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }))));
};

Basket.propTypes = {
  basket: _propTypes2.default.array.isRequired,
  removeProduct: _propTypes2.default.func.isRequired
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    removeProduct: function removeProduct(product) {
      dispatch((0, _store.removeProduct)(product));
    }
  };
};

var mapState = function mapState(state, props) {
  return {
    basket: state.basket,
    total: state.total
  };
};

exports.default = (0, _connect2.default)(mapState, mapDispatch)(Basket);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFza2V0L0Jhc2tldC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmZXRjaCIsInN0eWxlZCIsInJlbW92ZVByb2R1Y3QiLCJpbml0U3RvcmUiLCJ3aXRoUmVkdXgiLCJCYXNrZXRJdGVtIiwiY29ubmVjdCIsIlRvdGFsSXRlbSIsIlN1bUl0ZW0iLCJjb2xvcnMiLCJUYWJsZSIsInRhYmxlIiwicGlua0xpZ2h0ZW41IiwiQ29sdW1uIiwidGgiLCJFbXB0eUl0ZW0iLCJzcGFuIiwiU3R5bGVkQmFza2V0IiwiZGl2IiwiQmFza2V0IiwicHJvcHMiLCJiYXNrZXQiLCJ0b3RhbCIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsImlkIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm1hcERpc3BhdGNoIiwiZGlzcGF0Y2giLCJtYXBTdGF0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVEsQUFBZSxBQUFnQjs7QUFDdkMsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7Ozs7Ozs7Ozs7O0FBRW5CLElBQU0sUUFBUSwyQkFBUixBQUFlLHVCQUVMLGlCQUZoQixBQUFNLEFBRWlCOztBQUl2QixJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsR0FBdEI7QUFRQSxJQUFNLFlBQVksMkJBQVosQUFBbUIsS0FBekI7O0FBTUEsSUFBTSxlQUFlLDJCQUFmLEFBQXNCLElBQTVCO0FBR0EsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBVTtNQUFBLEFBRWpCLFNBRmlCLEFBRUEsTUFGQSxBQUVqQjtNQUZpQixBQUVULFFBRlMsQUFFQSxNQUZBLEFBRVQsQUFFZjs7eUJBQVEsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDTDtBQURLO0FBQUEsR0FBQSxrQkFDTCxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FESyxBQUNMLEFBQ0EsNkJBQUMsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLDhCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZGLEFBRUUsQUFDQSw2QkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FIRixBQUdFLEFBQ0EsNEJBQUMsY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSkYsQUFJRSxBQUNBLDRCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUxGLEFBS0UsQUFDQSwrQkFBQyxjQUFEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FSTixBQUNFLEFBQ0UsQUFNRSxBQUdKLG9DQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLFlBQ0csQUFBTyxXQUFQLEFBQWtCLHFCQUFLLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ3BCO0FBRG9CO0FBQUEsR0FBQSxrQkFDcEIsY0FBQSxRQUFJLFNBQUosQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSFIsQUFDMEIsQUFDcEIsQUFDRSxBQUlMLCtCQUFBLEFBQU8sSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVY7MkJBQ1YsQUFBQztXQUNNLFFBRFAsQUFDZSxBQUNiO2VBRkYsQUFFVyxBQUNUO3FCQUFlLE1BSGpCLEFBR3VCOztrQkFIdkI7b0JBRFUsQUFDVjtBQUFBO0FBQ0UsS0FERjtBQVJKLEFBT0csQUFPRCxzQkFBQSxBQUFDLG1DQUFRLE9BQVQsQUFBZ0I7Z0JBQWhCO2tCQWRGLEFBY0UsQUFDQTtBQURBO3NCQUNBLEFBQUMscUNBQVUsT0FBWCxBQUFrQjtnQkFBbEI7a0JBNUJOLEFBQU8sQUFFTCxBQVdFLEFBZUUsQUFJUDtBQUpPOztBQWhDUjs7QUFzQ0EsT0FBQSxBQUFPO1VBQ0csb0JBQUEsQUFBVSxNQURELEFBQ08sQUFDeEI7aUJBQWUsb0JBQUEsQUFBVSxLQUYzQixBQUFtQixBQUVhO0FBRmIsQUFDakI7O0FBSUYsSUFBTSxjQUFjLFNBQWQsQUFBYyxzQkFBQTs7QUFBYSwwQ0FBQSxBQUNqQixTQUFTLEFBQUU7ZUFBUywwQkFBVCxBQUFTLEFBQWMsQUFBVztBQUR6QyxBQUFhO0FBQUEsQUFDL0I7QUFERjs7QUFJQSxJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFELEFBQVEsT0FBUjs7WUFDUCxNQUQwQixBQUNwQixBQUNkO1dBQU8sTUFGUSxBQUFtQixBQUVyQjtBQUZxQixBQUNsQztBQURGLEFBS0E7O2tCQUFlLHVCQUFBLEFBQ2IsVUFEYSxBQUViLGFBRkYsQUFBZSxBQUdiIiwiZmlsZSI6IkJhc2tldC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXBoanUvZGF0YXRyYW5zL2Jhc2tldGFwcC9jbGllbnQifQ==