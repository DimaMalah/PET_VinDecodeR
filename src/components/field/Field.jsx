import "./field.css"
import Container from "../container/Container"
import Result from "./result/Result"
import Lastresult from "./lastresult/Lastresult"

function Field(props) {

	return (
		<Container className="field">
			<Result vin={props.vin} />
			<Lastresult vin={props.vin} />
		</Container>

	)
}
export default Field