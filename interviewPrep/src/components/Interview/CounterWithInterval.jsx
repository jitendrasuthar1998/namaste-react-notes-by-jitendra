// Filename - CounterWithInterval.js

import React, { useState, useEffect } from "react";

const CounterWithInterval = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		//Implementing the setInterval method
		const interval = setInterval(() => {
			setCount(count + 1);
		}, 1000);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [count]);

	return (
		<div
			style={{
				display: "flexbox",
				margin: "auto",
				textAlign: "center",
			}}
		>
			<h1 style={{ color: "green" }}>
				GeeksforGeeks
			</h1>
			<h3>
				React Example for using setInterval method
			</h3>
			<h1>{count}</h1>
		</div>
	);
};

export default CounterWithInterval;
