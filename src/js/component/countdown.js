import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SecondsCounter from "./SecondsCounter";
import Button from "./button";

const Countdown = props => {
	const [seconds, setSeconds] = useState(0);

	let handleStartClick = () => {
		document.querySelector("input").value = "";
		setInterval(() => {
			setSeconds(seconds - 1);
			console.log(seconds);
		}, 1000);
	};

	return (
		<div>
			<input
				className="mx-5 mb-5"
				type="text"
				id="secondsCountDown"
				placeholder="Enter seconds to countdown"
				onChange={e => setSeconds(parseInt(e.target.value))}></input>
			<Button
				text="Start"
				buttonClass="btn-success"
				handleStartClick={handleStartClick}
			/>
			<Button text="Stop" buttonClass="btn-danger" />
			<Button text="Resume" buttonClass="btn-primary" />
			<Button text="Reset" buttonClass="btn-secondary" />
			<SecondsCounter seconds={seconds} />
		</div>
	);
};

Countdown.propTypes = {
	seconds: PropTypes.number
};

export default Countdown;
