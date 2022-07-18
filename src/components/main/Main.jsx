import React, { useState, useEffect } from "react"
import "./main.css"
import Container from "../container/Container"
import Field from "../field/Field"
import Form from "../form/Form.jsx"


function Main(props) {
	const { infoCar } = props //set the json to-->MainPage--> useStete of App.js 
	const [vinFromForm, setVinFromForm] = useState("")//--from-->Form, передаем в Field для рендера
	const [jsonFromTablets, setJsonFromTablets] = useState("") //--set here the Json from Field (from <Result/> or <LastResult/>)

	function getVinFromForm(num) {//сетим vin из формы в --> Main
		return setVinFromForm(num)
	}

	function setJson(json) {
		return setJsonFromTablets(json)
	}

	useEffect(() => infoCar(jsonFromTablets))

	return (

		<main className="main__wrapper">
			<Form getVinFromForm={getVinFromForm} />
			<Field setVin={vinFromForm} infoCar={setJson} />
		</main>
	)
}
export default Main