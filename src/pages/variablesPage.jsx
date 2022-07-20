import React, { useState, useEffect } from "react"
import Container from "../components/container/Container"
import BackBTN from "../components/backBTN/backBTN"
import "./styles/variablesPage.css"
import { useNavigate } from "react-router-dom"



function VariablesPage(props) {
	const { infoCar } = props //<---vincode  from --Result--
	const { varId } = props
	let navigate = useNavigate()


	function filterValue(item) {
		if (!item) return item = "-"
		return item
	}

	function renderItem(json) {

		return json.map(item =>
			<a href="#" onClick={handleClick} key={item["VariableId"]}>
				<ul className="variables-page__option-title" key={item["VariableId"]}>{filterValue(item["Variable"])}
					<li className="variables-page__option-description" active="nonActive">{filterValue(item["Value"])}</li>
					<li className="variables-page__id" style={{ display: "none" }}>{filterValue(item["VariableId"])}</li>
				</ul>
			</a>
		)
	}

	function handleClick(e) {
		varId(e.target.lastChild.innerHTML)
		setTimeout(() => navigate(`${e.target.lastChild.innerHTML}`), 0)
	}

	return (
		<Container className="variables-page">
			<BackBTN navigate="../"></BackBTN>
			{renderItem(infoCar)}
		</Container>
	)
}

export { VariablesPage }