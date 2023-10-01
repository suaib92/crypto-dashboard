import { combineReducers } from 'redux';
import exchangeReducer from './exchangeReducer';
import chartDataReducer from './chartDataReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({

  exchange  : exchangeReducer,
  chartData : chartDataReducer,
  sidebar   : sidebarReducer
 
  
  // You can add more reducers here if needed
});

export default rootReducer;

