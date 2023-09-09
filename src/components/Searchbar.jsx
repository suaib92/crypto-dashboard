import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/markets`, {
          params: {
            vs_currency: 'usd',
            ids: searchQuery,
          },
        })
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCardClick = (coin) => {
    setSelectedCoin(coin);
  };

  const closeCard = () => {
    setSelectedCoin(null);
  };

  return (
    
    
    <div className="relative w-11/12 mr-2 pb-3 pt-0 pl-5 py-5 ml-5 z-10 ">
       
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 bottom-2 w-4 h-4 my-auto text-gray-400 left-8 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
  <input
    type="text"
    placeholder="Search for a cryptocurrency"
    onChange={handleSearchChange}
    className="w-full h-11 py-1 pl-10 border rounded-md outline-none focus:border-black shadow-md"
  />

      {searchResults.length > 0 && (
        <div className="mt-2  absolute">
          {searchResults.map((result) => (
            <div
              key={result.id}
              onClick={() => handleCardClick(result)}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
      )}

      {selectedCoin && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-md ">
          <div className="bg-white p-4 rounded-lg shadow-lg ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={closeCard}
            >
              Close
            </button>
            <h2 className="text-xl font-semibold mb-2">
              {selectedCoin.name} ({selectedCoin.symbol})
            </h2>
            <p className="mb-2">Current Price: ${selectedCoin.current_price}</p>
            <p className="mb-2">Market Cap: ${selectedCoin.market_cap}</p>
            <p className="mb-2">
              24h Change: {selectedCoin.price_change_percentage_24h}%
            </p>
          </div>
        </div>
      )}
      </div>
    
   
  );
}

export default Searchbar;
