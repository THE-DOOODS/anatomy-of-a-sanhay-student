import Preloader from "./pages/Preloader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Dictionary from "./pages/Dictionary";
import Periodic from "./pages/Periodic";
import Physics from "./pages/Physics";
import Kinematics from "./pages/physics/Kinematics";
import Newton from "./pages/physics/Newton";
import Gravity from "./pages/physics/Gravity";
import Body from "./pages/Body";
import Liver from "./pages/body/Liver";
import Stomach from "./pages/body/Stomach";
import Large from "./pages/body/Large";
import Small from "./pages/body/Small";

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
				<Route
					path='/periodic'
					element={<Periodic />}
				/>
				<Route
					path='/apple'
					element={<Physics />}
				/>
				<Route
					path='/kinematics'
					element={<Kinematics />}
				/>
				<Route
					path='/newton'
					element={<Newton />}
				/>
				<Route
					path='/gravity'
					element={<Gravity />}
				/>
				<Route
					path='/body'
					element={<Body />}
				/>
				<Route
					path='/liver'
					element={<Liver />}
				/>
				<Route
					path='/stomach'
					element={<Stomach />}
				/>
				<Route
					path='/large'
					element={<Large />}
				/>
				<Route
					path='/small'
					element={<Small />}
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
