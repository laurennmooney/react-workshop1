import React, { Component } from "react";
import "./vote.css";

class Vote extends Component {
	state = {
		frontEnd: 0,
		java: 0,
		csharp: 0
	};

	// handleVote = choice => {
	// 	this.setState(prev => {

	// 		if (choice === "frontend") {
	// 			return { frontEnd: prev.frontEnd + 1 };
	// 		} else if (choice === "java") {
	// 			return { java: prev.java + 1 };
	// 		} else if (choice === "csharp") {
	// 			return { csharp: prev.csharp + 1 };
	// 		}
	// 	});
	// };

	handleVote = vote => {
		this.setState(prev => ({ [vote]: prev[vote] + 1 }));
	};

	render() {
		let totalVotes = this.state.frontEnd + this.state.java + this.state.csharp;
		let votePercentages = {
			frontend: percentage(this.state.frontEnd, totalVotes),
			java: percentage(this.state.java, totalVotes),
			csharp: percentage(this.state.csharp, totalVotes)
		};

		return (
			<div className="Vote">
				<div className="option">
					<h3>Front-End</h3>
					<div className="voteCounts">
						<p>{this.state.frontEnd}</p>
						<p>({votePercentages.frontend})</p>
					</div>
				</div>
				<p
					className="votesBar frontend"
					style={{ width: votePercentages.frontend }}
				></p>
				<div className="option">
					<h3>Java</h3>
					<div className="voteCounts">
						<p>{this.state.java}</p>
						<p>({votePercentages.java}%)</p>
					</div>
				</div>
				<p
					className="votesBar java"
					style={{ width: votePercentages.java }}
				></p>
				<div className="option">
					<h3>C#</h3>
					<div className="voteCounts">
						<p>{this.state.csharp}</p>
						<p>({votePercentages.csharp}%)</p>
					</div>
				</div>
				<p
					className="votesBar csharp"
					style={{ width: votePercentages.csharp }}
				></p>

				<div className="choiceButtons">
					<button
						className="frontend"
						onClick={() => this.handleVote("frontEnd")}
					>
						Front-End
					</button>
					<button className="java" onClick={() => this.handleVote("java")}>
						Java
					</button>
					<button className="csharp" onClick={() => this.handleVote("csharp")}>
						C#
					</button>
				</div>
			</div>
		);
	}
}

function percentage(n, total) {
	if (n > 0) {
		return ((n / total) * 100).toFixed(1) + "%";
	} else {
		return 0;
	}
}

export default Vote;
