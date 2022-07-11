import Main from "../components/main/Main";
import React, { useState, useEffect } from "react";

function MainPage(props) {
	const { infoCar } = props

	return (
		<Main infoCar={infoCar} />
	)
}
export { MainPage }