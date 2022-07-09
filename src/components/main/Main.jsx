import React, { useState, useEffect } from "react"
import "./main.css"
import Container from "../container/Container"
import Field from "../field/Field"
import Form from "../form/Form.jsx"


function Main(props) {
	const [vin, setVin] = useState("")


	function getVin(vin) { return setVin(vin) }
	return (

		<main className="main__wrapper">
			<Form vin={getVin} />
			<Field vin={vin} />
		</main>


	)
}
export default Main