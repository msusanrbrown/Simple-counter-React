//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

function SecondsCounter(props) {
	const sa = props.seconds
		.toString()
		.padStart(6, "0")
		.split("");

	const sa1 = sa.map((element, i) => {
		return <div key={i}>{element}</div>;
	});
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			{sa1}
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
//render your react application

const start = Date.now();

setInterval(() => {
	const millis = Date.now() - start;
	const seconds = Math.floor(millis / 1000);
	ReactDOM.render(
		<SecondsCounter seconds={seconds} />,
		document.querySelector("#app")
	);
}, 1000);
