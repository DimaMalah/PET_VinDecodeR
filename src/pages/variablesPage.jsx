import React, { useState, useEffect } from "react"
import Container from "../components/container/Container"
import "./styles/variablesPage.css"
import { Link } from "react-router-dom"


function VariablesPage(props) {
	const { infoCar } = props



	function renderItem(arr) {
		return arr.filter(item => (item["Value"]) && item["Value"] !== "null").map(item =>
			<Link to={`variables/${item["VariableId"]}`}>
				<dt className="variables-page__option-title" key={item["VariableId"]}>{item["Variable"]}
					<dd className="variables-page__option-description">{item["Value"]}</dd>
				</dt>
			</Link>

		)
	}

	return (
		<Container className="variables-page">
			{renderItem(JSON.parse(infoCar))}
		</Container>
	)
}

export { VariablesPage }