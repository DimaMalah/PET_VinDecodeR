import "./field.css"
import Container from "../container/Container"
import Result from "./result/Result"
import Lastresult from "./lastresult/Lastresult"
import { useState } from "react"

function Field(props) {

	const { gotBackVin, infoCar } = props
	const [vin, setVin] = useState("")
	function setVincode(num) { return setVin(`${num}`) }

	return (
		<Container className="field">
			<Result vin={props.vin} infoCar={infoCar} />
			<Lastresult vin={vin} getVin={setVincode} gotBackVin={gotBackVin} />
		</Container>

	)
}
export default Field