import "./field.css"
import Container from "../container/Container"
import Result from "./result/Result"
import Lastresult from "./lastresult/Lastresult"
import { useState, useEffect } from "react"

function Field(props) {

	const { infoCar } = props //-->Main--->MainPage-->useState of App.js ------(JSON)-------
	const { setVin } = props // vincode from Form

	const [jsonResult, setJsonResult] = useState("") //-----------------(-----Result-----)
	const [jsonLastResult, setJsonLastResult] = useState("") //----------------------(-----LastResult-----)


	function jsonResultFunc(json) { // --- set the JSON from big tablet (-----Result-----)
		return setJsonResult(json)
	}

	function jsonLastResultFunc(json) { // --- set the JSON from small clicked tablet (-----LastResult-----)
		return setJsonLastResult(json)
	}

	function wichJson(result, lastResult) {
		return infoCar(result || lastResult)
	}

	useEffect(() => wichJson(jsonResult, jsonLastResult))



	return (
		<Container className="field">
			<Result setVin={setVin} infoCar={jsonResultFunc} />
			<Lastresult getInfoCar={jsonLastResultFunc} />
		</Container>

	)
}
export default Field