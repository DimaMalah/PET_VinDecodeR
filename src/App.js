
import './App.css';
import Container from './components/container/Container';
import { Routes, Route, Link } from "react-router-dom";
import Main from './components/main/Main';
import { Layout } from './components/layout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
	return (

		<div className='wrapper'>
			<Header />
			<Main />
			<Footer>Malakhovskyi Dmytro Inc.</Footer>
		</div>



	);
}

export default App;
