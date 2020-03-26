import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
	render() {
		let condition = this.props.condition === "Sunny" ? " sunny" : " rainy";

		return (
			<div className={"Weather" + condition}>
				<h2 id="day">{this.props.day}</h2>
				<h3 className="condition">{this.props.condition}</h3>
				<p>
					<label>High: </label> {this.props.highF} F (
					{convertTempFtoC(this.props.highF)} C)
				</p>
				<p>
					<label>Low: </label> {this.props.lowF} (
					{convertTempFtoC(this.props.lowF)} C)
				</p>
			</div>
		);
	}
}

function convertTempFtoC(temp) {
	return Math.round(temp - 32 * (5 / 9));
}

export default Weather;
