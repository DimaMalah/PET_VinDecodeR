import Header from "./header/Header";
import Footer from "./footer/Footer";
import React, { Link, Outlet } from "react-router-dom";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer>Malakhovskyi Dmytro Inc.</Footer>
		</>

	)
}

export { Layout }