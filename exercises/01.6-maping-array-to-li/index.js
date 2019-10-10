import React from "react";
import ReactDOM from "react-dom";
const animals = ["Horse", "Turtle", "Elephant", "Monkey", 34];
/**
 * change the content of the map function
 **/
const animalsInHTML = animals.map((animal, i) => {
	return (
		<>
			<div className="card mb-3 w-25" key={i}>
				<div className="card-header">{animal}</div>
				<div className="card-body">fhgfyt</div>
				<div className="card-footer">
					<div className="btn btn-success">{animal}</div>
				</div>
			</div>
			<div>h</div>
		</>
	);
});
ReactDOM.render(<div>{animalsInHTML}</div>, document.querySelector("#myDiv"));
