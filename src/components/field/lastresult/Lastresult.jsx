import "./lastresult.css"
import { Link } from "react-router-dom"


function Lastresult(props) {
	const { vin, gotBackVin } = props

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
	function handleClick(e) {

		return //gotBackVin(e.currentTarget.firstChild.firstChild)

	}


	return (
		renderItem()
	)
}
export default Lastresult