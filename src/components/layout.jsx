import Header from "./header/Header";
import Footer from "./footer/Footer";
import React, { Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {

	const [vin, setVin] = useState("")
	function getVin(vin) { return setVin(`${vin}`) }

	const wrapperStyle = { 'minHeight': '100vh', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': "space-between" }
	return (
		<div className="wrapper" style={wrapperStyle}>
			<Header />
			<Outlet vin={getVin} />
			<Footer>Malakhovskyi Dmytro Inc.</Footer>
		</div>

	)
}

export { Layout }