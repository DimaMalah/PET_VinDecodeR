
import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage.jsx";
import { VariablesPage } from "./pages/variablesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { VariableIdPage } from "./pages/variableIdPage"
import { Layout } from './components/Layout';

function App() {

	const [infoCar, setInfoCar] = useState("") //--> vincode, Came from-->Result
	const [id, setId] = useState("")

	function getInfo(vin) { return setInfoCar(vin) }

	function setVariableId(varId) {
		return setId(varId)
	}

	return (
		<Routes>
			<Route path="/PET_VinDecodeR/" element={<Layout />}>
				<Route index element={<MainPage infoCar={getInfo} />} />
				<Route path="variables" element={<VariablesPage infoCar={infoCar} varId={setVariableId} />} />
				<Route path="variables/:id" element={<VariableIdPage infoCar={infoCar} id={id} />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default App;
