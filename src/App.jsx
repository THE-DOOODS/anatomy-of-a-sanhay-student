import Preloader from "./pages/Preloader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Dictionary from "./pages/Dictionary";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		preload().then(() => {
			setLoading(false);
		});
	}, []);
	if (loading) {
		return <Preloader />;
	}
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/anatomy'
					element={<Dashboard />}
				/>
				<Route
					path='/calculator'
					element={<Calculator />}
				/>
				<Route
					path='/dictionary'
					element={<Dictionary />}
				/>
			</Routes>
		</Router>
	);
}

function preload() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, 3000);
	});
}

export default App;
