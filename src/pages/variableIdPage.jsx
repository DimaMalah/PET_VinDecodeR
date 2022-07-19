import Container from "../components/container/Container"

function VariableIdPage(props) {

	const { id, infoCar } = props
	const style = {
		backgroundColor: "#e0e0e0",
		color: "black",
		fontSize: "18px"
	}


	function renderItem(array) {
		const arr = array.filter(item => (item["VariableId"] == id))
		const entries = Object.entries(arr)
		const obj = entries[0][1]

		const keys = Object.keys(obj)

		return keys.map(key => {
			return <ul className="variables-page__option-title" style={{ ...style, fontSize: "26px", backgroundColor: "white" }} key={key}>{key}
				<li className="variables-page__option-description" style={style}>
					{obj[key]}
				</li>
			</ul >
		})

	}

	return (
		<Container className="variables-page" style={{ "minWidth": "40%" }}>
			{renderItem(infoCar)}
		</Container>
	)
}

export { VariableIdPage }