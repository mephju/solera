'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addDiscount = function addDiscount(product) {

  var discountApplications = parseInt(product.amount / 3);

  var discount = product.id === 'papaya' ? discountApplications * product.price : 0;
  product.discount = discount;
  return product;
};

var getTotal = function getTotal(basket) {
  var sums = basket.reduce(function (acc, item) {
    return {
      gross: acc.gross + item.amount * item.price,
      discount: acc.discount + item.discount
    };
  }, { gross: 0, discount: 0 });

  return (0, _extends3.default)({}, sums, { net: sums.gross - sums.discount });
};

var addProductReducer = function addProductReducer(product, basket) {
  var item = basket.find(function (item) {
    return item.id === product.id;
  }) || (0, _extends3.default)({}, product, { amount: 0 });
  var amount = item.amount + 1;
  var newItem = (0, _extends3.default)({}, item, { amount: amount });

  addDiscount(newItem);

  // not yet present in basket?
  if (amount === 1) return [].concat((0, _toConsumableArray3.default)(basket), [newItem]);

  return basket.map(function (item) {
    return item.id === product.id ? newItem : item;
  });
};

var removeProductReducer = function removeProductReducer(product, basket) {
  var newBasket = null;

  // does product need to be removed?
  if (product.amount === 1) {
    newBasket = basket.filter(function (i) {
      return i.id !== product.id;
    });
  } else {
    var amount = product.amount - 1;
    var newItem = (0, _extends3.default)({}, product, { amount: amount });
    addDiscount(newItem);
    newBasket = basket.map(function (i) {
      return i.id !== product.id ? i : newItem;
    });
  }

  return newBasket;
};

exports.default = {
  addProduct: function addProduct(state, action) {
    var product = action.product;

    var basket = addProductReducer(product, state.basket);
    return { basket: basket, total: getTotal(basket) };
  },
  removeProduct: function removeProduct(state, action) {
    var basket = removeProductReducer(action.product, state.basket);
    return { basket: basket, total: getTotal(basket) };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3JlZHVjZXJzLmpzIl0sIm5hbWVzIjpbImFkZERpc2NvdW50IiwicHJvZHVjdCIsImRpc2NvdW50QXBwbGljYXRpb25zIiwicGFyc2VJbnQiLCJhbW91bnQiLCJkaXNjb3VudCIsImlkIiwicHJpY2UiLCJnZXRUb3RhbCIsInN1bXMiLCJiYXNrZXQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwiZ3Jvc3MiLCJuZXQiLCJhZGRQcm9kdWN0UmVkdWNlciIsImZpbmQiLCJuZXdJdGVtIiwibWFwIiwicmVtb3ZlUHJvZHVjdFJlZHVjZXIiLCJuZXdCYXNrZXQiLCJmaWx0ZXIiLCJpIiwiYWRkUHJvZHVjdCIsInN0YXRlIiwiYWN0aW9uIiwidG90YWwiLCJyZW1vdmVQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsU0FBWSxBQUUvQjs7TUFBTSx1QkFBdUIsU0FBUyxRQUFBLEFBQVEsU0FBOUMsQUFBNkIsQUFBMEIsQUFFdkQ7O01BQU0sV0FBVyxRQUFBLEFBQVEsT0FBUixBQUFlLFdBQzlCLHVCQUF1QixRQURSLEFBQ2dCLFFBRGpDLEFBRUUsQUFDRjtVQUFBLEFBQVEsV0FBUixBQUFtQixBQUNuQjtTQUFBLEFBQU8sQUFDUjtBQVREOztBQVdBLElBQU0sV0FBVyxTQUFYLEFBQVcsaUJBQVUsQUFDekI7TUFBTSxjQUFPLEFBQU8sT0FBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLE1BQU47O2FBQ2xCLElBQUEsQUFBSSxRQUFRLEtBQUEsQUFBSyxTQUFTLEtBRFEsQUFDSCxBQUN0QztnQkFBVSxJQUFBLEFBQUksV0FBVyxLQUZBLEFBQWdCLEFBRVg7QUFGVyxBQUN6QztBQURXLEdBQUEsRUFHVCxFQUFDLE9BQUQsQUFBUSxHQUFHLFVBSGYsQUFBYSxBQUdULEFBQXFCLEFBRXpCOztvQ0FBQSxBQUFXLFFBQU0sS0FBSyxLQUFBLEFBQUssUUFBUSxLQUFuQyxBQUF3QyxBQUN6QztBQVBEOztBQVVBLElBQU0sb0JBQW9CLFNBQXBCLEFBQW9CLGtCQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDN0M7TUFBTSxjQUFPLEFBQU8sS0FBSyxnQkFBQTtXQUFRLEtBQUEsQUFBSyxPQUFPLFFBQXBCLEFBQTRCO0FBQXhDLEdBQUEsZ0NBQUEsQUFBbUQsV0FBUyxRQUF6RSxBQUFhLEFBQW9FLEFBQ2pGO01BQU0sU0FBUyxLQUFBLEFBQUssU0FBcEIsQUFBNkIsQUFDN0I7TUFBTSxxQ0FBQSxBQUFjLFFBQU0sUUFBMUIsQUFBTSxBQUVOOztjQUFBLEFBQVksQUFFWjs7QUFDQTtNQUFHLFdBQUgsQUFBYyxHQUFHLGtEQUFBLEFBQVcsVUFBWCxBQUFtQixBQUVwQzs7Z0JBQU8sQUFBTyxJQUFJLGdCQUFBO1dBQVEsS0FBQSxBQUFLLE9BQU8sUUFBWixBQUFvQixLQUFwQixBQUF5QixVQUFqQyxBQUEyQztBQUE3RCxBQUFPLEFBQ1IsR0FEUTtBQVZUOztBQWFBLElBQU0sdUJBQXVCLFNBQXZCLEFBQXVCLHFCQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDaEQ7TUFBSSxZQUFKLEFBQWdCLEFBRWhCOztBQUNBO01BQUcsUUFBQSxBQUFRLFdBQVgsQUFBc0IsR0FBRyxBQUN2Qjt1QkFBWSxBQUFPLE9BQU8sYUFBQTthQUFLLEVBQUEsQUFBRSxPQUFPLFFBQWQsQUFBc0I7QUFBaEQsQUFBWSxBQUNiLEtBRGE7QUFEZCxTQUVPLEFBQ0w7UUFBTSxTQUFTLFFBQUEsQUFBUSxTQUF2QixBQUFnQyxBQUNoQztRQUFNLHFDQUFBLEFBQWUsV0FBUyxRQUE5QixBQUFNLEFBQ047Z0JBQUEsQUFBWSxBQUNaO3VCQUFZLEFBQU8sSUFBSSxhQUFBO2FBQUssRUFBQSxBQUFFLE9BQU8sUUFBVCxBQUFpQixLQUFqQixBQUFzQixJQUEzQixBQUErQjtBQUF0RCxBQUFZLEFBQ2IsS0FEYTtBQUdkOztTQUFBLEFBQU8sQUFDUjtBQWRELEFBZ0JBOzs7QUFBZSxrQ0FBQSxBQUNGLE9BREUsQUFDSyxRQUFRO1FBQUEsQUFDakIsVUFEaUIsQUFDTixPQURNLEFBQ2pCLEFBQ1A7O1FBQU0sU0FBUyxrQkFBQSxBQUFrQixTQUFTLE1BQTFDLEFBQWUsQUFBaUMsQUFDaEQ7V0FBTyxFQUFFLFFBQUYsUUFBVSxPQUFPLFNBQXhCLEFBQU8sQUFBaUIsQUFBUyxBQUVsQztBQU5ZLEFBT2I7QUFQYSx3Q0FBQSxBQU9DLE9BUEQsQUFPUSxRQUFRLEFBQzNCO1FBQU0sU0FBUyxxQkFBcUIsT0FBckIsQUFBNEIsU0FBUyxNQUFwRCxBQUFlLEFBQTJDLEFBQzFEO1dBQU8sRUFBRSxRQUFGLFFBQVUsT0FBTyxTQUF4QixBQUFPLEFBQWlCLEFBQVMsQUFDbEM7QUFWSCxBQUFlO0FBQUEsQUFDYiIsImZpbGUiOiJyZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tZXBoanUvZGF0YXRyYW5zL2Jhc2tldGFwcC9jbGllbnQifQ==