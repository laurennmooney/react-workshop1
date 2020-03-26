import React from "react";
import "./App.css";
import Counter from "./components/counter";
import Timer from "./components/timer";
import Vote from "./components/vote";
import Contact from "./components/contact";
import Weather from "./components/weather";

function App() {
	let person = {
		name: "Stephanie",
		age: 27
	};

	let saturday = {
		day: "Saturday",
		condition: "Sunny",
		highF: 60,
		lowF: 32
	};

	let sunday = {
		day: "Sunday",
		condition: "Rainy",
		highF: 45,
		lowF: 30
	};

	return (
		<div className="App">
			<Weather
				day={saturday.day}
				condition={saturday.condition}
				highF={saturday.highF}
				lowF={saturday.lowF}
			/>
			<Weather
				day={sunday.day}
				condition={sunday.condition}
				highF={sunday.highF}
				lowF={sunday.lowF}
			/>

			<Counter />
			<Counter />
			<Counter />

			<Timer />
			<Vote />
			<Contact name="Lauren" age={27} />
			<Contact name="Jeremy" age={26} />
			<Contact name={person.name} age={person.age} />
		</div>
	);
}

export default App;
