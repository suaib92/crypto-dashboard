// exchangeReducer.js

import {
  SET_CRYPTO1,
  SET_CRYPTO2,
  SET_AMOUNT,
  SET_COMPARISON_RESULT,
} from '../action/exchangeActions';

const initialState = {
  exchangeRates: {
    bitcoin: {
      buy: 45000,
      sell: 43000,
    },
    ethereum: {
      buy: 3000,
      sell: 2800,
    },
    tether: {
      buy: 1,
      sell: 1,
    },
    pi: {
      buy: 0.01,
      sell: 0.008,
    },
  },
  crypto1: 'bitcoin',
  crypto2: 'tether',
  amount: '1',
  comparisonResult: '',
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CRYPTO1:
      return {
        ...state,
        crypto1: action.payload,
      };
    case SET_CRYPTO2:
      return {
        ...state,
        crypto2: action.payload,
      };
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case SET_COMPARISON_RESULT:
      return {
        ...state,
        comparisonResult: action.payload,
      };
    default:
      return state;
  }
};

export default exchangeReducer;
