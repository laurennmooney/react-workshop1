import React, { Component } from "react";
import "./counter.css";
import PosNegNumber from "./posNegNumber";

class Counter extends Component {
	state = {
		count: 0
	};

	handleReset = () => {
		this.setState({ count: 0 });
	};

	handleUp = () => {
		this.setState(prev => {
			return { count: prev.count + 1 };
		});
	};

	handleDown = () => {
		this.setState(prev => {
			return { count: prev.count - 1 };
		});
	};

	// can combine these two functions into one, and pass the handler a parameter
	// in order to use this in your component, you have to add an arrow function in the JSX: {() => this.functionName(parameter)}
	handleCount = diff => {
		this.setState(prev => {
			return { count: prev.count + diff };
		});
	};

	render() {
		let countClass = this.state.count < 0 ? "negative" : null;

		return (
			<div className="Counter">
				{/* <h3>Counter</h3> */}
				{/* <p className={countClass}>{this.state.count}</p> */}
				<PosNegNumber number={this.state.count} />
				<button onClick={() => this.handleCount(-1)}>Down</button>
				<button onClick={this.handleReset}>Reset</button>

				{/* {this.state.count !== 0 && (
					<button onClick={this.handleReset}>Reset</button>
				)} */}
				<button onClick={() => this.handleCount(1)}>Up</button>
			</div>
		);
	}
}

export default Counter;
