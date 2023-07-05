import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import CountriesProvider from './contexts/CountriesContext';

ReactDOM.render(
	<React.StrictMode>
		<CountriesProvider>
			<App />
		</CountriesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
