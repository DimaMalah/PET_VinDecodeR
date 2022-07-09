import Header from "./header/Header";
import Footer from "./footer/Footer";
import React, { Link, Outlet } from "react-router-dom";

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