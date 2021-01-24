import "./App.css";
import React, { useState } from "react";
import Rhino from "./Rhino";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [rhinos, setRhino] = useState([]);

	let getRandomInt = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	};
	const addRhinos = () => {
		setRhino(
			rhinos.concat({
				id: uuidv4(),
				top: getRandomInt(document.body.clientHeight),
				left: getRandomInt(document.body.clientWidth),
			})
		);
	};

	const removeRhino = (id) => {
		setRhino(rhinos.filter((rhino) => rhino.id !== id));
	};

	return (
		<div className="App">
			<header className="App-header">
				{rhinos.map((rhino, index) => {
					return (
						<Rhino
							rhino={rhino}
							key={index}
							removeRhino={removeRhino}
						/>
					);
				})}

				<button onClick={addRhinos}>Add rhinos</button>
			</header>
		</div>
	);
}

export default App;
