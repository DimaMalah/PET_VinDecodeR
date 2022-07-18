import React, { useState, useEffect } from "react"
import Container from "../components/container/Container"
import "./styles/variablesPage.css"
import { Link } from "react-router-dom"


function VariablesPage(props) {
	const { infoCar } = props //<---vincode  from --Result--

	function renderItem(json) {
		return json.filter(item => (item["Value"]) && item["Value"] !== "null").map(item =>
			<Link to={`variables/${item["VariableId"]}`} key={item["VariableId"]}>
				<ul className="variables-page__option-title" key={item["VariableId"]}>{item["Variable"]}
					<li className="variables-page__option-description" >{item["Value"]}</li>
				</ul>
			</Link>

		)
	}

	return (

		<Container className="variables-page">
			{renderItem((infoCar))}
			{console.log(infoCar)}
		</Container>
	)
}

export { VariablesPage }