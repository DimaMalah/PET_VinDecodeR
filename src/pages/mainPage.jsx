import Main from "../components/main/Main";
import React, { useState, useEffect } from "react";

function MainPage(props) {
	const { infoCar } = props //--> useStete of App.js
	// const [infoCarClicked, setInfoCarClicked] = useState(infoCar)

	// function getInfoCarClicked(info) {
	// 	return setInfoCarClicked(info)
	// }

	return (
		<Main infoCar={infoCar} />
	)
}
export { MainPage }