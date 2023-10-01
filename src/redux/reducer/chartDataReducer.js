// src/reducers/chartReducer.js

import {
  SET_TIME_INTERVAL,
  SET_CURRENCY,
  SET_CHART_TYPE,
  FETCH_CHART_DATA_REQUEST,
  FETCH_CHART_DATA_SUCCESS,
  FETCH_CHART_DATA_FAILURE,
} from '../action/chartActions';

const initialState = {
  timeInterval: '1d',
  currency: 'bitcoin',
  chartType: 'line',
  chartData: [],
  loading: false,
  error: null,
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_INTERVAL:
      return { ...state, timeInterval: action.payload };

    case SET_CURRENCY:
      return { ...state, currency: action.payload };

    case SET_CHART_TYPE:
      return { ...state, chartType: action.payload };

    case FETCH_CHART_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_CHART_DATA_SUCCESS:
      return { ...state, loading: false, chartData: action.payload };

    case FETCH_CHART_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default chartReducer;
