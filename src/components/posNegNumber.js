import React, { Component } from "react";
import "./posNegNumber.css";

class PosNegNumber extends Component {
	render() {
		return (
			<div className="PosNegNumber">
				<span className={colorBasedOnNumber(this.props.number)}>
					{this.props.number}
				</span>
			</div>
		);
	}
}

function colorBasedOnNumber(number) {
	if (number === 0) {
		return "zero";
	} else if (number > 0) {
		return "positive";
	} else if (number < 0) {
		return "negative";
	}
}

export default PosNegNumber;
