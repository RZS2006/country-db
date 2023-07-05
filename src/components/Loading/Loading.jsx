import React from 'react';

import './Loading.css';

// Component
const Loading = () => {
	// Render
	return (
		<div className="loading">
			<div aria-label="Loading..." className="spinner"></div>
		</div>
	);
};

export default Loading;
