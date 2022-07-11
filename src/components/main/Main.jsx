import React, { useState, useEffect } from "react"
import "./main.css"
import Container from "../container/Container"
import Field from "../field/Field"
import Form from "../form/Form.jsx"


function Main(props) {
	const { infoCar } = props
	const [vin, setVin] = useState("")


	function getVin(vin) {
		return setVin(vin)
	}

	// useEffect(() => { infoCar(vin) })

	// function getVinFromLastResltTablet(vinFromInput, vinFromTablet) {
	// 	if (vinFromInput) return infoCar(vinFromInput)
	// 	if (vinFromTablet) return infoCar(vinFromTablet)
	// }


	return (

		<main className="main__wrapper">
			<Form vin={getVin} />
			<Field vin={vin} infoCar={infoCar} />
		</main>


	)
}
export default Main