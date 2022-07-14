import "./lastresult.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";



function Lastresult(props) {
	const { getInfoCar } = props //send vin from LastResult tablet to <VariablesPage/> for rendering
	const [targetVin, setTargetVin] = useState("")

	function renderItem() {
		const DB_CARS = "saved_data"
		if (localStorage[DB_CARS]) {// если в localStorage уже что-то есть...
			const data = JSON.parse(localStorage[DB_CARS]); //...парсим данные из lS в массив обьектов...
			return <ul className="lastresult__list">
				{data.filter(item => (item != null)).map(item => (
					<Link to={`variables/`} onClick={handleClick} className="lastresult__item" key={item["id"]}>
						<span className="lastresult__vincode">{item['vincode']}</span>
						<div className="lastresult__link">

							<span className="lastresult__link_brand" >{item['brand']}</span>
							<span className="lastresult__link_model" > {item['model']}</span>
							<span className="lastresult__link_year" >{item['year']}</span>

						</div>
					</Link>
				))}
			</ul>
		}
	}

	async function handleClick(e) {
		console.log(e.currentTarget.firstChild.innerHTML);
		setTargetVin(`${e.currentTarget.firstChild.innerHTML}`)
		const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${targetVin}?format=json `);
		const json = await response.json();
		const results = json['Results'];
		return getInfoCar(JSON.stringify(results));// all variables from Fetch
	}




	return (
		renderItem()
	)
}
export default Lastresult