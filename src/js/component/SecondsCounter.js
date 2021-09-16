import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	const timer = (
		position0,
		position1,
		position2,
		position3,
		position4,
		position5,
		position6
	) => {
		document.querySelector(".position6").innerHTML = position6;
		document.querySelector(".position5").innerHTML = position5;
		document.querySelector(".position4").innerHTML = position4;
		document.querySelector(".position3").innerHTML = position3;
		document.querySelector(".position2").innerHTML = position2;
		document.querySelector(".position1").innerHTML = position1;
		document.querySelector(".position0").innerHTML = position0;
	};

	let segundos = 0;

	let interval = setInterval(() => {
		let seconds = String(segundos);
		let position0 = seconds.length > 0 ? seconds[seconds.length - 1] : "0";
		let position1 = seconds.length > 1 ? seconds[seconds.length - 2] : "0";
		let position2 = seconds.length > 2 ? seconds[seconds.length - 3] : "0";
		let position3 = seconds.length > 3 ? seconds[seconds.length - 4] : "0";
		let position4 = seconds.length > 4 ? seconds[seconds.length - 5] : "0";
		let position5 = seconds.length > 5 ? seconds[seconds.length - 6] : "0";
		let position6 = seconds.length > 6 ? seconds[seconds.length - 7] : "0";
		timer(
			position0,
			position1,
			position2,
			position3,
			position4,
			position5,
			position6
		);
		segundos++;
	}, 1000);

	return (
		<div className="contador row bg-dark text-white mx-5 text-center">
			<div className="col">
				<i className="far fa-clock"></i>
			</div>
			<div className="col position6">0</div>
			<div className="col position5">0</div>
			<div className="col position4">0</div>
			<div className="col position3">0</div>
			<div className="col position2">0</div>
			<div className="col position1">0</div>
			<div className="col position0">0</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
