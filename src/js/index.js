//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let contador = 0;

setInterval(function() {
	ReactDOM.render(
		<Home contador={contador} />,
		document.querySelector("#app")
	);
	contador++;
}, 1000);
