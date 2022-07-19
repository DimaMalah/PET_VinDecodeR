import React, { useState, useEffect } from "react"
import "./result.css"
import { useNavigate } from "react-router-dom"

function Result(props) {
	const { infoCar } = props //-->Field-->Main--->MainPage-->useState of App.js
	const { setVin } = props //--vin from Form for render big tablet

	let navigate = useNavigate()
	const [vincode, setVincode] = useState("") //----set here the vincode, came from <Form/>
	const [brand, setBrand] = useState("")
	const [model, setModel] = useState("")
	const [year, setYear] = useState("")
	const [error, setError] = useState("")
	const [id, setId] = useState(0)//--id for setting to localStorage
	const [carInfo, setCarInfo] = useState("") //---set here the json to sent up to <--variablesPage-->

	const DB_CARS = "saved_data" //--for saving to localStorage
	const vinCode = setVin


	useEffect(() => {
		if (vinCode) {
			setVincode(vinCode)
			setError("")
			fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinCode}?format=json `)
				.then(response => response.json())
				.then(json => json['Results'])
				.then(results => {
					JSON.stringify(results)
					setCarInfo(JSON.stringify(results))//---set all variables from Fetch to useState (carInfo)
					return results.filter((obj) => obj['Variable'] == 'Make' || obj['Variable'] == 'Model' || obj['Variable'] == 'Model Year')
				})
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
	}, [vinCode])


	function handleClick() {
		const carData = { "brand": brand, "model": model, "year": year, "id": id, "vincode": vinCode }
		saveDataToLS(carData)
		infoCar(JSON.parse(carInfo)) //--> send it to App.js for render --<VariablesPage/>--
		setVincode("")
		setBrand("")
		setTimeout(() => navigate("/PET_VinDecodeR/variables"), 0)
	}


	function saveDataToLS(obj) {
		if (localStorage[DB_CARS]) {// если в localStorage уже что-то есть...
			const data = JSON.parse(localStorage[DB_CARS]) //...парсим данные из lS в массив обьектов...
			obj["id"] = data[0]["id"] + 1
			data.unshift(obj);// ...добавляем в начало распарсенного массива data наш обьект obj...
			data.splice(5) //обрезаем его до длины - 5

			localStorage.setItem(DB_CARS, JSON.stringify(data))//...сохраняем заново уже обновленный массив обьектов ( + обьект obj)...
			return data
		} //если localStorage пуст...
		const data = [obj]//...создаем массив с одним (первым) обьектом obj...

		localStorage.setItem(DB_CARS, JSON.stringify(data))//...и сохраняем его в localStorage...
		return data
	}


	function validation(data, checkValue, startState) {
		if (data && checkValue) {
			// console.log(1)
			return <a href="#" onClick={handleClick} className="result__tablet-active">
				<div className="result__text">
					<span className="result__text-brand">{brand}</span>
					<span className="result__text-model">{model}</span>
					<span className="result__text-year">{year}</span>
				</div>
			</a >
		} else if (checkValue && !data && !error) {
			// console.log(2)
			return <div className="result__tablet-nonactive">
				<div className="result__text">
					<span className="result__text-error">Sorry, there's no such car in our catalog!</span>
				</div>
			</div>
		} else if (error) {
			// console.log(3)
			return <div className="result__tablet-nonactive">
				<div className="result__text">
					<span className="result__text-error">Error: Something went wrong...Please, check your internet cinnection and try again.</span>
				</div>
			</div>
		} else {
			// console.log(4);
			return startState
		};
	}

	function renderEmptyTablet() {
		return <div className="result__tablet-nonactive">{ }</div>
	}

	return (
		validation(brand, vincode, renderEmptyTablet())
	)
}

export default Result