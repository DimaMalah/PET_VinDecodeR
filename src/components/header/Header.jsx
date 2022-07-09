import React from "react"
import "./header.css"
import img from "../../img/vin-decoder.svg"
import Container from "../container/Container"
import { Link } from "react-router-dom"

function Header() {

	return (
		<>
			<header className="header">
				<Container>
					<span className="header__title">VinDECODER</span>
					<img src={img} className="header__logo-image" alt="logo" />
				</Container>
			</header>
			<nav className="nav">
				<Container>
					<ul className="nav__list">
						<li className="nav__item"><Link to="/" className="nav__link">home</Link></li>
						<li className="nav__item"><Link to="/variables" className="nav__link">car brands</Link></li>
						<li className="nav__item"><a href="#" className="nav__link">some menu</a></li>
						<li className="nav__item"><a href="#" className="nav__link">nav menu</a></li>
					</ul>
				</Container>
			</nav>
		</>
	)
}

export default Header