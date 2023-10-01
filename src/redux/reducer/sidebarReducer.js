// sidebarReducer.js

import { FETCH_CRYPTO_DATA_SUCCESS, FETCH_CRYPTO_DATA_FAILURE } from '../action/sidebarAction';

const initialState = {
  cryptoList: [],
  loading: false,
  error: null,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_DATA_SUCCESS:
      return {
        ...state,
        cryptoList: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CRYPTO_DATA_FAILURE:
      return {
        ...state,
        cryptoList: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
