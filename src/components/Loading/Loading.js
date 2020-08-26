// --- CountryDB - Loading.js ---

// Imports
import React from "react";

import "./Loading.css";

import loader from "../../assets/Rolling-1s-170px.gif";

// Component
const Loading = () => {
	
	// Render
	return (
		<div className="loading">
			<img src={loader} alt="loading" />
		</div>
	);
};

export default Loading;
