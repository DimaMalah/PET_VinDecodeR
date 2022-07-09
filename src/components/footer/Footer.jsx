import "./footer.css"

function footer(props) {
	return (
		<footer className="footer"><span className="footer__text">{props.children}</span></footer>
	)
}
export default footer