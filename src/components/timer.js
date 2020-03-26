import React, { Component } from "react";
import "./timer.css";

class Timer extends Component {
	state = {
		startTime: null,
		elapsedTime: 0
	};

	handleStart = () => {
		this.setState({
			startTime: new Date(),
			elapsedTime: 0
		});
		this.interval = setInterval(this.timerTick, 1000);
	};

	handleStop = () => {
		this.setState({ startTime: null });
		clearInterval(this.interval);
	};

	timerTick = () => {
		this.setState(prev => {
			return { elapsedTime: prev.elapsedTime + 1 };
		});
	};

	render() {
		let startTime = this.state.startTime
			? this.state.startTime.toLocaleTimeString()
			: "Stopped";

		return (
			<div className="Timer">
				<h3 className="header">Start Time</h3>
				<p className="time">{startTime}</p>
				<h3 className="header">Elapsed</h3>
				<p className="time">{this.state.elapsedTime} s</p>
				<div className="buttons">
					{this.state.startTime === null ? (
						<button onClick={this.handleStart}>Start</button>
					) : (
						<button onClick={this.handleStop}>Stop</button>
					)}
				</div>
			</div>
		);
	}
}

export default Timer;
