import Header from "./header/Header";
import Footer from "./footer/Footer";
import React, { Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {


	const wrapperStyle = { 'minHeight': '100vh', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': "space-between" }
	return (
		<div className="wrapper" style={wrapperStyle}>
			<Header />
			<Outlet />
			<Footer>Malakhovskyi Dmytro Inc.</Footer>
		</div>

	)
}

export { Layout }