import { useNavigate } from "react-router-dom"


function BackBTN(props) {

	const style = {
		display: "block",
		alignSelf: "center",
		justifySelf: "flex-start",
		maxWidth: "70px",
		position: "relative",
		padding: "2px 10px",
		borderRadius: "5px",
		backgroundColor: "#e1e1ff",
		fontWeight: "500",
	}

	const navigate = useNavigate()

	function onClickHandler() {
		return navigate(props.navigate)
	}

	return (
		<button className="back-btn" onClick={onClickHandler} style={style}>back</button>
	)
}


export default BackBTN