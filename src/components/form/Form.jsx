import React, { useState } from "react"
import "./form.css"
import Container from "../container/Container"


function Form(props) {

	const [inputValue, setInputValue] = useState("")


	function onSubmitHandler(e) {
		e.preventDefault()
		props.vin(inputValue)
		setInputValue("");
	}

	function onChangeHandler(e) {
		setInputValue(e.target.value.toUpperCase())
	}


	return (
		<Container>
			<form onSubmit={onSubmitHandler} className="form">
				<input type="text" onChange={onChangeHandler} title="VIN CONTAINS ONLY FROM INTEGERS AND LETTERS (17 symbols)" pattern="[A-Z,0-9]{17,17}" className="form__input" value={inputValue} placeholder="ENTER VIN" ></input>
				<button className="form__btn" type="submit">DECODE</button>
			</form>
		</Container>
	)
}
export default Form