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

				<nav className="nav">
					<Container>
						<ul className="nav__list">
							<li className="nav__item"><Link to="/" className="nav__link">home</Link></li>
							<li className="nav__item"><Link to="/nav_menu" className="nav__link">nav menu</Link></li>
							<li className="nav__item"><Link to="/some_menu" className="nav__link">some menu</Link></li>
							<li className="nav__item"><Link to="/nav_menu" className="nav__link">nav menu</Link></li>
						</ul>
					</Container>
				</nav>
			</header>
		</>
	)
}

export default Header