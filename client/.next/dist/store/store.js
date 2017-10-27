'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.removeProduct = exports.addProduct = exports.reducer = exports.types = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  basket: [],
  total: { gross: 0, net: 0, discount: 0 }
};

var types = exports.types = {
  addProduct: 'addProduct',
  removeProduct: 'removeProduct'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  console.debug('reducer', action);
  var actionReducer = _reducers2.default[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

// ACTIONS
var addProduct = exports.addProduct = function addProduct(product) {
  return function (dispatch) {
    return dispatch({ type: types.addProduct, product: product });
  };
};

var removeProduct = exports.removeProduct = function removeProduct(product) {
  return function (dispatch) {
    return dispatch({ type: types.removeProduct, product: product });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsInJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwiYmFza2V0IiwidG90YWwiLCJncm9zcyIsIm5ldCIsImRpc2NvdW50IiwidHlwZXMiLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJkZWJ1ZyIsImFjdGlvblJlZHVjZXIiLCJ0eXBlIiwicHJvZHVjdCIsImRpc3BhdGNoIiwiaW5pdFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBUyxBQUFhOztBQUN0QixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7OztBQUVyQixJQUFNO1VBQWUsQUFDWCxBQUNSO1NBQU8sRUFBQyxPQUFELEFBQVEsR0FBRyxLQUFYLEFBQWdCLEdBQUcsVUFGNUIsQUFBcUIsQUFFWixBQUE2QixBQUd0QztBQUxxQixBQUNuQjs7QUFJSyxJQUFNO2NBQVEsQUFDUCxBQUNaO2lCQUFlLEFBTWpCOztBQVJPLEFBQWMsQUFTckI7QUFUcUIsQUFDbkIsTUFRVyw0QkFBVSxTQUFWLEFBQVUsVUFBa0M7TUFBakMsQUFBaUMsNEVBQXpCLEFBQXlCO01BQVgsQUFBVyxtQkFFdkQ7O1VBQUEsQUFBUSxNQUFSLEFBQWMsV0FBZCxBQUF5QixBQUN6QjtNQUFNLGdCQUFnQixtQkFBUyxPQUEvQixBQUFzQixBQUFnQixBQUN0QztTQUFPLGdCQUFnQixjQUFBLEFBQWMsT0FBOUIsQUFBZ0IsQUFBcUIsVUFBNUMsQUFBc0QsQUFDdkQ7QUFMTSxDQUFBOztBQU9QLEFBQ0E7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxXQUFBLEFBQUMsU0FBRDtTQUFhLG9CQUFZLEFBQ2pEO1dBQU8sU0FBUyxFQUFFLE1BQU0sTUFBUixBQUFjLFlBQVksU0FBMUMsQUFBTyxBQUFTLEFBQ2pCO0FBRnlCO0FBQW5CLEFBSVA7O0FBQU8sSUFBTSx3Q0FBZ0IsU0FBaEIsQUFBZ0IsdUJBQUE7U0FBVyxvQkFBWSxBQUNsRDtXQUFPLFNBQVMsRUFBRSxNQUFNLE1BQVIsQUFBYyxlQUFlLFNBQTdDLEFBQU8sQUFBUyxBQUNqQjtBQUY0QjtBQUF0QixBQUlQOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFlBQWlDO01BQWhDLEFBQWdDLG1GQUFqQixBQUFpQixBQUN4RDs7U0FBTyx3QkFBQSxBQUNMLFNBREssQUFFTCxjQUNBLGlEQUhGLEFBQU8sQUFHTCxBQUFvQixBQUFnQixBQUV2QztBQU5NIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21lcGhqdS9kYXRhdHJhbnMvYmFza2V0YXBwL2NsaWVudCJ9