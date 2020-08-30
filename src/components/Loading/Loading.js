// --- CountryDB - Loading.js --- Final

// Imports
import React from "react";

import "./Loading.css";

import loadingSpinner from "../../assets/Rolling-1s-170px.gif";

// Component
const Loading = () => {
	
	// Render
	return (
		<div className="loading">
			<img src={loadingSpinner} alt="Loading..." />
		</div>
	);
};

export default Loading;
