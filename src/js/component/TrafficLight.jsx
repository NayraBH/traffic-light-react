import React, { useState } from "react";

import "../../styles/TrafficLight.css";

const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [hide, setHide] = useState("hide");
	const [colors, setColors] = useState(["red", "yellow", "green"]);

	let indexOfColor = 0;

	const cycle = () => {
		setInterval(changeColor, 1500);
	};

	const changeColor = () => {
		let color = colors[indexOfColor];
		setSelectedColor(color);
		if (indexOfColor === colors.length - 1) indexOfColor = 0;
		else indexOfColor++;
	};

	const showPurple = () => {
		setHide("");
		setColors(["red", "yellow", "green", "purple"]);
	};

	return (
		<div className="container">
			<div className="post"></div>
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" +
						(selectedColor === "red" ? " glow-red" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(selectedColor === "yellow" ? " glow-yellow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(selectedColor === "green" ? " glow-green" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("purple")}
					className={
						hide +
						" light purple" +
						(selectedColor === "purple" ? " glow-purple" : "")
					}></div>
				<button className="btn" onClick={cycle}>
					Automatic
				</button>
				<button className="btn" onClick={showPurple}>
					Add purple
				</button>
			</div>
		</div>
	);
};

export default TrafficLight;
