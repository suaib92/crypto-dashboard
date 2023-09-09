import React, { useState, useEffect } from 'react';
import axios from 'axios';

// This is a functional component named Sidebar that takes a "selectedCurrency" prop.
const Sidebar = ({ selectedCurrency }) => {
  // State variable to store the list of cryptocurrencies.
  const [cryptoList, setCryptoList] = useState([]);

  // useEffect is used for side effects in a React component.
  useEffect(() => {
    // Define the fetchCryptoData function here

    const fetchCryptoData = (currency) => {
      // Make an HTTP GET request to the CoinGecko API to fetch cryptocurrency data.
      axios
        .get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: currency,           // The selected currency for comparison.
            order: 'market_cap_desc',        // Order by market capitalization descending.
            per_page: 1000,                   // Limit the number of results per page to 10.
            page: 1,                        // Fetch the first page of results.
          },
        })
        .then((response) => {
          const updatedCryptoList = response.data.map((crypto) => {
            // Calculate daily price change as a percentage.
            const dailyPriceChange = ((crypto.current_price - crypto.low_24h) / crypto.low_24h) * 100;

            // Determine whether the price has gone up or down.
            const priceChangeDirection = dailyPriceChange >= 0 ? 'up' : 'down';

            return {
              ...crypto,
              dailyPriceChange,
              priceChangeDirection,
            };
          });
          setCryptoList(updatedCryptoList);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    fetchCryptoData(selectedCurrency);
  }, [selectedCurrency]);

  const formatCurrency = (value, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });
    return formatter.format(value);
  };
  // Render the component with the fetched cryptocurrency data.
  return (
    <div className=" w-full   p-4 shadow-md bg-white">
      <h1 className=' font-extrabold text-center text-2xl shadow-sm mb-2 '>Top Cryptocurrencies by Market Cap</h1>

      <div className="crypto-list space-y-4 overflow-scroll ">
        {/* Map over the "cryptoList" to render each cryptocurrency */}
        {cryptoList.map((crypto) => (
          <div key={crypto.id} className="flex items-center  space-x-4">
            <div className="w-12 h-12 mr-3">
              <img src={crypto.image} alt={crypto.name} />
            </div>
           
            <div>
              <p>{crypto.name} </p>
              <p>Mkt Cap: {formatCurrency(crypto.market_cap, selectedCurrency)}</p>
              </div>
              <p>
                {crypto.priceChangeDirection === 'up' ? (
                  <span ><img className='h-5 w-5' src="./up.png" alt="" /></span>
                ) : (
                  <span ><img className='h-5 w-5' src="./Down.png" alt="" /></span>
                )}{' '}
                {Math.abs(crypto.dailyPriceChange).toFixed(2)}%
              </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Sidebar component as the default export of this module.
export default Sidebar;
