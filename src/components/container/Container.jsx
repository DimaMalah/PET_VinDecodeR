import "./container.css"
import cn from 'classnames';

function Container(props) {

	const containerClass = cn("container", { [props.className]: (props.className) })
	return (
		<div className={containerClass}>{props.children}</div>
	)
}
export default Container