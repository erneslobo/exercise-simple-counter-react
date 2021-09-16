import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	let seconds = String(props.seconds);

	return (
		<div className="contador row bg-dark text-white mx-5 text-center">
			<div className="col">
				<i className="far fa-clock"></i>
			</div>
			<div className="col position6">
				{seconds.length > 6 ? seconds[seconds.length - 7] : "0"}
			</div>
			<div className="col position5">
				{seconds.length > 5 ? seconds[seconds.length - 6] : "0"}
			</div>
			<div className="col position4">
				{seconds.length > 4 ? seconds[seconds.length - 5] : "0"}
			</div>
			<div className="col position3">
				{seconds.length > 3 ? seconds[seconds.length - 4] : "0"}
			</div>
			<div className="col position2">
				{seconds.length > 2 ? seconds[seconds.length - 3] : "0"}
			</div>
			<div className="col position1">
				{seconds.length > 1 ? seconds[seconds.length - 2] : "0"}
			</div>
			<div className="col position0">
				{seconds.length > 0 ? seconds[seconds.length - 1] : "0"}
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
