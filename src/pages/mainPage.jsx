import Main from "../components/main/Main";

function MainPage(props) {
	const { infoCar } = props //--> useStete of App.js

	return (
		<Main infoCar={infoCar} />
	)
}

export { MainPage }