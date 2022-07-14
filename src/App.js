
import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage.jsx";
import { VariablesPage } from "./pages/variablesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from './components/Layout';

function App() {

	const [infoCar, setInfoCar] = useState("") //--> Came from-->Result
	function getInfo(arr) { return setInfoCar(`${arr}`) }



	return (

		<Routes>

			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage infoCar={getInfo} />} />
				<Route path="variables" element={<VariablesPage infoCar={infoCar} />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>


		</Routes>


	)
}

export default App;
