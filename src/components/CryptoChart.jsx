import React,{ useState, useEffect }  from "react";
import { useDispatch,  useSelector } from "react-redux";
import { fetchChartData } from "../redux/action/chartActions";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CryptoChart = () => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState('bitcoin');
  const [timeInterval, setTimeInterval] = useState('1d');
  const [chartType, setChartType] = useState('line');
  const timeIntervals = [
    { value: '1d', label: '1D' },
    { value: '7d', label: '1W' },
    { value: '30d', label: '1M' },
    { value: '180d', label: '6M' },
    { value: '365d', label: '1Y' },
  ];

  useEffect(() => {
    fetchData(currency, timeInterval);
  }, [currency, timeInterval]);

  

  const fetchData = (selectedCurrency, selectedTimeInterval) => {
    dispatch(fetchChartData(selectedCurrency, selectedTimeInterval));

    console.log(selectedCurrency,selectedTimeInterval)
  };
  

  const chartData = useSelector((state) => state.chartData.chartData);

  const renderChart = () => {
    if (!Array.isArray(chartData) || chartData.length === 0) {
      return <div>No data available.</div>;
    }
 console.log('render',chartData[0])
    switch (chartType) {
      case "line":
        return (
          <LineChart
            data={chartData}
            
          >
           
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="rgb(75, 192, 192)"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        );

      case "bar":
        return (
          <BarChart
            data={chartData}
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" /> <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="rgb(75, 192, 192)" />
          </BarChart>
        );

      case "area":
        return (
          <AreaChart
            data={chartData}
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis /> <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="rgb(75, 192, 192)"
            />
          </AreaChart>
        );

      default:
        return null;
    }
  };

  return (
    <> <div className="border shadow-md border-r-1  bg-white  ml-1   ">
      <div className="  md:flex  sm:cols-2 sm:gap-10 ">
        <div className=" pt-4 ml-20">
          {timeIntervals.map((interval) => (
            <button
              key={interval.value}
              onClick={() => setTimeInterval(interval.value)}
              className={`ring-1 ring-gray-200 bg-gray-100 px-4 py-1 rounded-md  mx-3 mr-2 mt-1 mb-1 pb-1.5 ${
                timeInterval === interval.value
                  ? "bg-blue-500 text-white"
                  : "text-gray-700"
              }`}
            >
              {interval.label}
            </button> 
          ))}
        </div>
        <div className="sm:col-span-2 flex justify-center  right-24 gap-2 my-4  align-sub">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="ring-1 ring-gray-200 bg-gray-100 rounded focus:outline-none font-semibold"
          >
             <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
             <option value="binancecoin">Binance Coin</option>
            <option value="ripple">Ripple</option>
          </select>

          <select
            className="ring-1 ring-gray-200 bg-gray-100 rounded focus:outline-none px-2 py-2 font-semibold"
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="area">Area Chart</option>
          </select>
         
        </div>
      </div>

<div style={{ width: "100%", height: 270 }} className="relative bottom-9 h-60 top-1">
<ResponsiveContainer>{renderChart()}</ResponsiveContainer>
</div>
      </div>
    </>
  );
};

export default CryptoChart;



