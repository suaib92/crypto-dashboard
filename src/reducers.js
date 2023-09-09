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
  };
  
  const rootReducer = (state = initialState, action) => {
    // Handle actions if needed
    return state;
  };
  
  export default rootReducer;
  