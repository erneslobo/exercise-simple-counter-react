//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter";
import Countdown from "./component/countdown";
import Button from "./component/button";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application

// window.onload = () => {
// 	let seconds = 0;
// 	setInterval(() => {
// 		ReactDOM.render(
// 			<div>
// 				<h1 className="m-5">Timer</h1>
// 				<SecondsCounter seconds={seconds} />
// 				<h1 className="m-5">Countdown Timer</h1>
// 				<Countdown />
// 			</div>,
// 			document.querySelector("#app")
// 		);
// 		seconds++;
// 	}, 1000);
// };

ReactDOM.render(<Home />, document.querySelector("#app"));

//105 - [(105 - (105%10))]/10 - [105-(105%100)/100]
