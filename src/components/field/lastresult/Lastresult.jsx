import "./lastresult.css"

function Lastresult(props) {
	const { vin } = props

	function renderItem() {
		const DB_CARS = "saved_data"
		if (localStorage[DB_CARS]) {// если в localStorage уже что-то есть...
			const data = JSON.parse(localStorage[DB_CARS]); //...парсим данные из lS в массив обьектов...

			return <ul className="lastresult__list">
				{data.filter(item => (item != null)).map(item => (
					<li className="lastresult__item" key={item["id"]}>
						<span className="lastresult__vincode">{item['vincode']}</span>
						<a href="#" className="lastresult__link">
							{<>
								<span className="lastresult__link_brand" >{item['brand']}</span>
								<span className="lastresult__link_model" > {item['model']}</span>
								<span className="lastresult__link_year" >{item['year']}</span>
							</>}
						</a>
					</li>
				))}
			</ul>
		}


	}

	return (
		renderItem()
	)
}
export default Lastresult