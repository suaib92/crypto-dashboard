import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setCrypto1, setCrypto2,setAmount,setComparisonResult } from '../redux/action/exchangeActions';

const CryptoExchangeComparison = () => {
  const dispatch = useDispatch();

  const [showExchangeRates, setShowExchangeRates] = useState(false);
  const [amountInput, setAmountInput] = useState('1');

  const crypto1 = useSelector((state) => state.exchange.crypto1);
  const crypto2 = useSelector((state) => state.exchange.crypto2);
  const comparisonResult = useSelector((state) => state.exchange.comparisonResult);
  const exchangeRates = useSelector((state) => state.exchange.exchangeRates);

  const handleAmountChange = (event) => {
    setAmountInput(event.target.value);
  };


  const handleCompare = () => {
    const rate1Sell = exchangeRates[crypto1]?.sell || 0;
    const rate2Buy = exchangeRates[crypto2]?.buy || 1;

    if (!isNaN(amountInput)) {
      const result1 = (amountInput * rate1Sell) / rate2Buy;

      dispatch(setComparisonResult(result1.toFixed(2)));
    } else {
      dispatch(setComparisonResult('Invalid input'));
    }
  };

  const handleShowExchangeRates = () => {
    setShowExchangeRates(!showExchangeRates);
  };


  return (
    <div className="container shadow-md border rounded-md bg-white h-64 top-2 relative mb-5 ">
      <h2 className='text-green-500 font-bold ml-4 text-xl'>Exchange Coins</h2>
      <label htmlFor="crypto1" className='relative   left-2 top-6 font-bold text-orange-500 '>Sell</label>
      <select id="crypto1" value={crypto1} className='relative top-6 left-8 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36 mr-60 '  onChange={(e) => dispatch(setCrypto1(e.target.value))}>
        
      <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      
      </select>
<br />
      <label htmlFor="crypto2" className='relative top-8 font-bold text-teal-600 left-2 '>Buy</label>
      <select id="crypto2" value={crypto2} className='relative top-8 left-8 shadow-md rounded-md border-solid bg-white border-radius h-9 w-36 mr-60'   onChange={(e) => dispatch(setCrypto2(e.target.value))}
      >
       
       <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="pi">Pi</option>
        <option value="tether">Tether</option>
      
      </select>
<br />
      <label htmlFor="amount" className='relative left-56 bottom-20 italic hover:not-italic> '>Enter value:</label> <br />
      <input
        type="number"
        id="amount"
        placeholder="Enter amount"
        className='relative left-56 bottom-20 shadow-md rounded-md border-solid bg-white border-radius h-10 w-28 '
        value={amountInput}
        onChange={handleAmountChange}
      />

      <button id="compare" className=' relative top-4 right-9 left-9 shadow-md rounded-md border-solid bg-blue-400 border-radius h-9 w-28 ' onClick={handleCompare}>
       Exchange 
      </button>

      <div id="comparison-result" className='relative left-56 bottom-14 font-bold'>{comparisonResult}</div>
      
    


    </div>

    
  );
};

export default CryptoExchangeComparison;
