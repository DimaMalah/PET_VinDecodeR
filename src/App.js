
import './App.css';
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage.jsx";
import { VariablesPage } from "./pages/variablesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from './components/Layout';

function App() {
	return (

		<Routes>

			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path="variables" element={<VariablesPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>


		</Routes>


	)
}

export default App;
