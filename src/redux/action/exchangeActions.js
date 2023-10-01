// exchangeActions.js

// Action Types
export const SET_CRYPTO1 = 'SET_CRYPTO1';
export const SET_CRYPTO2 = 'SET_CRYPTO2';
export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_COMPARISON_RESULT = 'SET_COMPARISON_RESULT';

// Action Creators
export const setCrypto1 = (crypto1) => ({
  type: SET_CRYPTO1,
  payload: crypto1,
});

export const setCrypto2 = (crypto2) => ({
  type: SET_CRYPTO2,
  payload: crypto2,
});

export const setAmount = (amount) => ({
  type: SET_AMOUNT,
  payload: amount,
});

export const setComparisonResult = (result) => ({
  type: SET_COMPARISON_RESULT,
  payload: result,
});

