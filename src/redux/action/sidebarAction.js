// sidebarActions.js

export const FETCH_CRYPTO_DATA_SUCCESS = 'FETCH_CRYPTO_DATA_SUCCESS';
export const FETCH_CRYPTO_DATA_FAILURE = 'FETCH_CRYPTO_DATA_FAILURE';

export const fetchCryptoDataSuccess = (cryptoList) => ({
  type: FETCH_CRYPTO_DATA_SUCCESS,
  payload: cryptoList,
});

export const fetchCryptoDataFailure = (error) => ({
  type: FETCH_CRYPTO_DATA_FAILURE,
  payload: error,
});
