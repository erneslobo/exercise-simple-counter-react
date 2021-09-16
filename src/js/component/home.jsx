import React from "react";
import SecondsCounter from "./SecondsCounter";
import Button from "./button";

//create your first component
const Home = () => {
	return (
		<div>
			<h1 className="m-5">Timer</h1>
			<SecondsCounter />
			<input
				className="m-5"
				type="text"
				id="secondsCountDown"
				placeholder="Enter seconds to countdown"></input>
			<Button text="Start" buttonClass="btn-success" />
			<Button text="Stop" buttonClass="btn-danger" />
			<Button text="Resume" buttonClass="btn-primary" />
			<Button text="Reset" buttonClass="btn-secondary" />
		</div>
	);
};

export default Home;
