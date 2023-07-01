import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import './Alert.css';

// Component
const Alert = () => {
	// Render
	return (
		<section className="alert">
			<div className="container">
				<div className="alert__flex-container">
					<FontAwesomeIcon icon={faExclamationCircle} />
					<span className="alert__text">
						CountryDB ran into a problem:
					</span>
					<span className="alert__text-bold">
						Unable to load countries
					</span>
				</div>
			</div>
		</section>
	);
};

export default Alert;
