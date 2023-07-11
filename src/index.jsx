import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

import App from './App';
import CountriesProvider from './contexts/CountriesContext';

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<CountriesProvider>
				<App />
			</CountriesProvider>
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
