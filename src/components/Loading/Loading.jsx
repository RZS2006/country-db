import React from 'react';

import './Loading.css';

const Loading = () => {
	return (
		<div className="loading">
			<div aria-label="Loading..." className="spinner"></div>
		</div>
	);
};

export default Loading;
