// src/actions/chartActions.js

import axios from 'axios';

export const SET_TIME_INTERVAL = 'SET_TIME_INTERVAL';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_CHART_TYPE = 'SET_CHART_TYPE';
export const FETCH_CHART_DATA_REQUEST = 'FETCH_CHART_DATA_REQUEST';
export const FETCH_CHART_DATA_SUCCESS = 'FETCH_CHART_DATA_SUCCESS';
export const FETCH_CHART_DATA_FAILURE = 'FETCH_CHART_DATA_FAILURE';

export const setTimeInterval = (timeInterval) => ({
  type: SET_TIME_INTERVAL,
  payload: timeInterval,
});

export const setCurrency = (currency) => ({
  type: SET_CURRENCY,
  payload: currency,
});

export const setChartType = (chartType) => ({
  type: SET_CHART_TYPE,
  payload: chartType,
});

export const fetchChartDataRequest = () => ({
  type: FETCH_CHART_DATA_REQUEST,
});

export const fetchChartDataSuccess = (chartData) => ({
  type: FETCH_CHART_DATA_SUCCESS,
  payload: chartData,
});

export const fetchChartDataFailure = (error) => ({
  type: FETCH_CHART_DATA_FAILURE,
  payload: error,
});

export const fetchChartData = (currency, timeInterval) => {
  return (dispatch) => {
    dispatch(fetchChartDataRequest());

    // Make an API call to fetch chart data based on the selected currency and time interval.
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${currency}/market_chart`, {
        params: {
          vs_currency: 'usd', // Change to the appropriate currency if needed
          days: timeInterval, // Adjust the API parameter according to your time interval selection
        },
      })
      .then((response) => {
        // Extract the relevant chart data from the API response.
        const chartData = response.data.prices.map((entry) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          price: entry[1],
        }));
        dispatch(fetchChartDataSuccess(chartData));
      })
      .catch((error) => {
        dispatch(fetchChartDataFailure(error));
      });
  };
};
