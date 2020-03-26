import React, { Component } from "react";
import "./contact.css";
import parrotImg from "../parrot.png";

class Contact extends Component {
	render() {
		return (
			<div className="Contact">
				<div className="insideContainer">
					<div>
						<h3>Contact</h3>
						<p>
							<label>Name: </label> {this.props.name}
						</p>
						<p>
							<label>Age: </label> {this.props.age}
						</p>
					</div>
					<img src={parrotImg}></img>
				</div>
			</div>
		);
	}
}

export default Contact;
