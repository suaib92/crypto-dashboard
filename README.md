In the project directory, you can run:

npm start Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any line errors in the console.

npm test Launches the test runner in the interactive watch mode. See the section about running tests for more information.

npm run build Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Cryptocurrency Market Analysis
Welcome to the Cryptocurrency Market Analysis project. This application provides users with the ability to track and analyze cryptocurrency market changes over different timeframes, including 1 day, 1 week, 1 month, 6 months, and 1 year.

Table of Contents
Overview
Features
Getting Started
Usage
Contributing
License
Overview
The Cryptocurrency Market Analysis project is a web-based tool designed to help cryptocurrency enthusiasts, investors, and traders monitor price fluctuations and trends over specific time periods. It aims to provide valuable insights into the market's performance for various cryptocurrencies.

Features
Timeframe Analysis: View price changes for your selected cryptocurrency over different timeframes, including 1 day, 1 week, 1 month, 6 months, and 1 year.

User-Friendly Interface: An intuitive and easy-to-use interface makes it accessible for both beginners and experienced users.

Cryptocurrency Selection: Select from a wide range of cryptocurrencies to track and analyze.

Price Charts: Visualize price changes with interactive charts for each selected timeframe.

Getting Started
To get started with the Cryptocurrency Market Analysis tool, follow these steps:

Clone the repository to your local machine:

git clone https://github.com/suaib92/crypto-dashboard




                          CryptoChart Component                                     
The CryptoChart component is a React-based cryptocurrency chart display component that allows users to visualize cryptocurrency price data over various time intervals. It leverages the Recharts library for rendering interactive and animated charts.

Features Display cryptocurrency price data using Line, Bar, or Area charts. Select different time intervals (1D, 1W, 1M, 6M, 1Y) for data visualization. Choose between multiple cryptocurrencies (Bitcoin, Ethereum, Binance Coin, Ripple). Responsive design for optimal viewing on various screen sizes. Usage Install the required dependencies (React, Redux, Recharts). Import the CryptoChart component into your application. Include the component in your desired React component or route. Configure the Redux store and chart data fetching logic with the chartActions.js file. Customize the component to fit your application's styling and requirements. Components and Libraries Used React: A JavaScript library for building user interfaces. Redux: A predictable state container for managing application state. Recharts: A charting library built on React components for data visualization.

                  CryptoExchangeComparison Component
The CryptoExchangeComparison component is a React-based component that allows users to compare the exchange rates between two cryptocurrencies and perform a simple conversion. It is used for visualizing and calculating the exchange rates between selected cryptocurrencies.

Features Select two cryptocurrencies to compare. Enter an amount for the selected cryptocurrency. Calculate the equivalent amount in the other cryptocurrency based on exchange rates. Display the result of the conversion. Toggle visibility of exchange rates. Usage Import the CryptoExchangeComparison component into your React application. Include the component in your desired React component or route. Configure the Redux store and exchange rate data fetching logic with the exchangeActions.js file. Customize the component to fit your application's styling and requirements. Components and Libraries Used React: A JavaScript library for building user interfaces. Redux: A predictable state container for managing application state. Component Structure Crypto Selection: Users can select two cryptocurrencies for comparison. Amount Input: Users can enter the amount of the first cryptocurrency. Exchange Button: Users can perform the conversion. Comparison Result: Displays the result of the conversion. Show/Hide Exchange Rates: Toggle visibility of exchange rates. Exchange Rates: Displays exchange rates when shown.

                      CurrencyDropdown Component
The CurrencyDropdown component is a React-based dropdown component that allows users to select a currency for viewing cryptocurrency prices in different fiat currencies. It is used to change the currency denomination for the cryptocurrency data displayed in the application.

Features Provides a dropdown list of supported fiat currencies (USD, INR, EUR). Allows users to select their preferred currency. Automatically updates the selected currency in the Redux store. Usage Import the CurrencyDropdown component into your React application. Include the component in your desired React component or route. Configure the Redux store and currency selection logic with the currencyActions.js file. Customize the component to fit your application's styling and requirements. Components and Libraries Used React: A JavaScript library for building user interfaces. Redux: A predictable state container for managing application state. Component Structure Dropdown Selection: Users can select one of the available fiat currencies. Redux Integration: Automatically updates the selected currency in the Redux store.

                          Main Component
The Main component serves as the main layout for your crypto dashboard application. It integrates various sub-components to provide users with a comprehensive view of cryptocurrency data.

Features Header: Displays the title "CRYPTO DASHBOARD" in a blue header with a hover effect. Currency Dropdown: Allows users to select their preferred fiat currency (USD, INR, EUR). Searchbar: Enables users to search for specific cryptocurrencies. CryptoChart: Displays cryptocurrency price charts. PieChart: Shows a pie chart for cryptocurrency portfolio distribution. CryptoExchangeComparison: Compares exchange rates for different cryptocurrencies. CryptoSidebar: Provides a sidebar for navigation and additional information. Footer: Displays a copyright notice and the current year. Styling The component utilizes Tailwind CSS classes for styling, including background colors, text colors, font weights, and hover effects. Usage Import the necessary sub-components such as Searchbar, CryptoSidebar, CryptoExchangeComparison, PieChart, CryptoChart, and CurrencyDropdown. Set up state for selectedCurrency to manage the user's selected currency. Implement the handleCurrencyChange function to update the selected currency based on user input. Compose the layout with header, content, and footer sections. Customize the component's appearance and behavior according to your application's design.

                         Component Name: Navbar
Features: Logo: Displays a logo image on the left side of the navigation bar. The logo is centered vertically. Styling: Utilizes Tailwind CSS classes for styling, including width, margin, padding, shadow, and border properties. Usage: Import the necessary React library and modules. Include an image (logo) inside the navigation bar. Customize the styling and appearance of the navigation bar and logo as needed for your web application.

                          Component Name: CryptoPieChart
Features: Chart Library: Utilizes Chart.js and the react-chartjs-2 library for creating and rendering the pie chart. Data Labels: Includes data labels with custom formatting using the chartjs-plugin-datalabels plugin. Legend: Displays a legend on the right side of the chart. Structure: The component renders a div element with a border, shadow, and rounded corners to create a visually appealing container for the pie chart. Inside the container, there is a title "Portfolio" and the pie chart itself. Chart Data: The pie chart displays data for three assets: Tether, Luna, and Ethereum. Each asset has an associated value in the portfolio. Styling: Utilizes Tailwind CSS classes for styling, including border, shadow, and text color properties. The legend is displayed on the right side of the chart and uses point-style circles for labels. Chart Options: The chart options include configurations for maintaining the aspect ratio and customizing legend and data label styles. The legend is displayed with circular point-style labels. Data labels are shown with custom formatting, including bold titles and white text color.

                         Component Name: Searchbar
Description: The Searchbar component is a user interface element used for inputting and searching cryptocurrency data using the CoinGecko API. It provides real-time search functionality and displays search results based on user input.

Features:

Input Field: A text input field allows users to enter search queries. Search Button: A "Search" button triggers the search for cryptocurrency data when clicked. Live Search: As the user types in the input field, the component makes real-time requests to the CoinGecko API to retrieve matching cryptocurrency data. Search Results: When the API responds with data, it is displayed as search results, including the cryptocurrency's name and an image. Error Handling: Error handling is implemented to catch and log any API request errors. Functionality:

Users can type search queries into the input field. Clicking the "Search" button triggers an API request to CoinGecko. The API response, if successful, is displayed as search results. Styling:

The component is styled using Tailwind CSS classes for consistent and visually appealing design. It includes styling for the input field, button, and search results. API Integration:

The component uses the Axios library to make asynchronous API requests to the CoinGecko API. It queries the API for cryptocurrency data based on the user's search query and displays the results. This Searchbar component enhances the user experience by providing a user-friendly interface for searching cryptocurrency data, displaying real-time results, and handling potential API errors.

                        Component Name: CryptoSidebar
Description: The CryptoSidebar component is a user interface element designed to display information about the top cryptocurrencies by market capitalization. It integrates with Redux to fetch cryptocurrency data, format it, and present it in a visually appealing way. Additionally, it calculates whether each cryptocurrency is in profit or loss based on current and previous prices and provides corresponding icons.

Key Features:

Redux Integration: Utilizes the useSelector hook to access selected currency, cryptocurrency data, loading state, and error state from the Redux store. Dispatches actions using the useDispatch hook.

Asynchronous Data Fetching: Uses the useEffect hook to trigger the fetching of cryptocurrency data from the API whenever the selected currency changes.

Currency Formatting: Implements a formatCurrency function to format currency values in a user-friendly style.

Profit/Loss Calculation: Calculates whether each cryptocurrency is in profit or loss by comparing current and previous prices.

Dynamic Rendering: Conditionally renders content based on the loading and error states. Displays loading message while data is being fetched and error message in case of API errors.

Cryptocurrency List: Renders a list of cryptocurrencies with their logos, names, symbols, and market capitalization.

Profit/Loss Indication: Adds a green "▲" icon for profit and a red "▼" icon for loss next to each cryptocurrency, along with a textual indicator.

Styling:

Employs Tailwind CSS classes to style the component, providing a responsive and visually appealing design. Summary:

The CryptoSidebar component is an integral part of a cryptocurrency-related application. It fetches and presents real-time data for the top cryptocurrencies, including market cap, and indicates whether each cryptocurrency is in profit or loss through icons and text. Its integration with Redux ensures data consistency and responsiveness, offering users valuable insights into the cryptocurrency market.
