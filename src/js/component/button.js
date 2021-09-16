import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonClass, text }) => {
	return (
		<button type="button" className={`btn ${buttonClass} mx-2`}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	buttonClass: PropTypes.string
};

export default Button;
