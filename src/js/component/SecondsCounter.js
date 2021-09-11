import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	return (
		<div className="contador row bg-dark text-white m-5 text-center">
			<div className="col">
				<i className="far fa-clock"></i>
			</div>
			<div className="col">0</div>
			<div className="col">0</div>
			<div className="col">0</div>
			<div className="col">0</div>
			<div className="col">0</div>
			<div className="col">0</div>
			<div className="col">{props.contador}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	contador: PropTypes.number
};

export default SecondsCounter;
