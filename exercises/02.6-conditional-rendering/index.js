import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = props => {
	let alertClasses = "alert";
	if (props.color == "red") alertClasses += " alert-danger";
	if (props.color == "orange") alertClasses += " alert-warning";
	return (
		<div className={alertClasses} role="alert">
			{props.text}
			{props.color}
		</div>
	);
};
Alert.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
