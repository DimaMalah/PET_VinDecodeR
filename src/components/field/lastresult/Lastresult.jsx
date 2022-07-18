import "./lastresult.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";


function Lastresult(props) {
	const { getInfoCar } = props //send vin from LastResult tablet to <VariablesPage/> for rendering
	const [targetVin, setTargetVin] = useState("1")
	let navigate = useNavigate()

	function renderItem() {
		const DB_CARS = "saved_data"
		if (localStorage[DB_CARS]) {// если в localStorage уже что-то есть...
			const data = JSON.parse(localStorage[DB_CARS]); //...парсим данные из lS в массив обьектов...
			return <ul className="lastresult__list">
				{data.filter(item => (item != null)).map(item => (
					<a href="#" onClick={handleClick} className="lastresult__item" key={item["id"]}>
						<span className="lastresult__vincode">{item['vincode']}</span>
						<div className="lastresult__link">
							<span className="lastresult__link_brand" >{item['brand']}</span>
							<span className="lastresult__link_model" > {item['model']}</span>
							<span className="lastresult__link_year" >{item['year']}</span>
						</div>
					</a>
				))}
			</ul>
		}
	}

	async function handleClick(e) {
		const targetVincode = e.currentTarget.firstChild.innerHTML
		await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${targetVincode}?format=json `)
			.then(response => response.json())
			.then(response => response['Results'])
			.then(results => JSON.stringify(results))
			.then(results => getInfoCar(JSON.parse(results)))
		setTargetVin(targetVincode)
		setTimeout(() => navigate("/variables"), 0)
	}

	return (
		<>
			{renderItem()}
		</>
	)
}
export default Lastresult