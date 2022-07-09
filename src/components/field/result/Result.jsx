import React, { useState, useEffect } from "react"
import "./result.css"

function Result(props) {

	const { vin } = props
	const [vincode, setVincode] = useState(vin)
	const [brand, setBrand] = useState("")
	const [model, setModel] = useState("")
	const [year, setYear] = useState("")
	const [error, setError] = useState("")
	const [id, setId] = useState(0)
	const DB_CARS = "saved_data"


	useEffect(() => {
		if (vin) {
			fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json `)
				.then(response => response.json())
				.then(json => json['Results'])
				.then(results => results.filter((obj) => obj['Variable'] == 'Make' || obj['Variable'] == 'Model' || obj['Variable'] == 'Model Year'))
				.then(result => {
					for (let i in result) {
						if (result[i]['Variable'] === "Make") setBrand(result[i]['Value'])
						if (result[i]['Variable'] === "Model") setModel(result[i]['Value'])
						if (result[i]['Variable'] === "Model Year") setYear(result[i]['Value'])
						setId(id + 1)
					}
				})
				.catch(err => setError(err))
		}
	}, [vin])

	function hendleClick() {
		const carData = { "brand": brand, "model": model, "year": year, "id": id, "vincode": vin }
		saveDataToLS(carData)
		setVincode("")
		setBrand("")
	}

	function saveDataToLS(obj) {
		if (localStorage[DB_CARS]) {// если в localStorage уже что-то есть...
			const data = JSON.parse(localStorage[DB_CARS]) //...парсим данные из lS в массив обьектов...
			obj["id"] = data[0]["id"] + 1
			data.unshift(obj);// ...добавляем в начало распарсенного массива data наш обьект obj...
			data.splice(5)

			localStorage.setItem(DB_CARS, JSON.stringify(data))//...сохраняем заново уже обновленный массив обьектов ( + обьект obj)...
			return data
		} //если localStorage пуст...
		const data = [obj]//...создаем массив с одним (первым) обьектом obj...

		localStorage.setItem(DB_CARS, JSON.stringify(data))//...и сохраняем его в localStorage...
		return data
	}


	function validation(data, checkValue, atStart) {
		if (data) {
			return <a href="#" onClick={hendleClick} className="result__tablet-active">
				<div className="result__text">
					<span className="result__text-brand">{brand}</span>
					<span className="result__text-model">{model}</span>
					<span className="result__text-year">{year}</span>
				</div>
			</a >
		} else if (checkValue && error) {//----если пользователь пробовал вводить винкод
			return <div className="result__tablet-nonactive">
				<div className="result__text">
					<span className="result__text-error">Error: Something went wrong...Please, check your internet cinnection and try again.</span>
				</div>
			</div>
		} else if (checkValue && !data) { //---- пропускаем через setTimeout, чтоб поставить его в eventloop после fetch 
			return <div className="result__tablet-nonactive">
				<div className="result__text">
					<span className="result__text-error">Sorry, there's no such car in our catalog!</span>
				</div>
			</div>
		} else {
			return atStart
		}

	}

	function renderEmptyTablet(prop) {
		return <div className="result__tablet-nonactive">{prop}</div>
	}

	return (
		validation(brand, vincode, renderEmptyTablet())




	)
}
export default Result