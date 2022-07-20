import Container from "../components/container/Container"
import BackBTN from "../components/backBTN/backBTN"
import "./styles/variableIdPage.css"
import { useEffect, useState } from "react"

function VariableIdPage(props) {

	const { id, infoCar } = props
	const [item, setItem] = useState("")

	const style = {
		backgroundColor: "#e0e0e0",
		color: "black",
		fontSize: "18px",
	}


	useEffect(() => {
		fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json")
			.then(response => response.json())
			.then(res => JSON.stringify(res))
			.then(res => JSON.parse(res))
			.then(res => res["Results"])
			.then(res => res.filter(item => item["ID"] == id))
			.then(res => setItem(res[0]["Description"]))
	})



	function renderItem(elem) {
		return <p className="variables-page__option-title description" >{elem.replace(/<\/?[a-zA-Z]+>/gi, '')}</p>
	}


	return (
		<Container className="variables-page" style={{ justifyContent: "flex-start" }}>
			<div className="variables-page">
				<BackBTN navigate="/PET_VinDecodeR/variables"></BackBTN>
				{renderItem(item)}
			</div>

		</Container>
	)
}

export { VariableIdPage }