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
import Flower from "./pages/Flower";
import Liver from "./pages/body/Liver";
import Spleen from "./pages/body/Spleen";
import Stomach from "./pages/body/Stomach";
import Gallbladder from "./pages/body/Gallbladder";
import Large from "./pages/body/Large";
import Small from "./pages/body/Small";
import Plants from "./pages/Plants";
import Nobble from "./pages/elements/Nobble";
import Halogen from "./pages/elements/Halogen";
import Nonmetal from "./pages/elements/Nonmetal";
import Metalloid from "./pages/elements/Metalloid";
import Basic from "./pages/elements/Basic";
import Transition from "./pages/elements/Transition";
import Lanthanide from "./pages/elements/Lanthanide";
import Actinide from "./pages/elements/Actinide";
import Alkaline from "./pages/elements/Alkaline";
import Alkali from "./pages/elements/Alkali";

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
					path='/spleen'
					element={<Spleen />}
				/>
				<Route
					path='/stomach'
					element={<Stomach />}
				/>
				<Route
					path='/gall'
					element={<Gallbladder />}
				/>
				<Route
					path='/large'
					element={<Large />}
				/>
				<Route
					path='/small'
					element={<Small />}
				/>
				<Route
					path='/plants'
					element={<Plants />}
				/>
				<Route
					path='/flower'
					element={<Flower />}
				/>
				<Route
					path='/nobble'
					element={<Nobble />}
				/>
				<Route
					path='/halogen'
					element={<Halogen />}
				/>
				<Route
					path='/nonmetal'
					element={<Nonmetal />}
				/>
				<Route
					path='/metalloid'
					element={<Metalloid />}
				/>
				<Route
					path='/basic'
					element={<Basic />}
				/>
				<Route
					path='/transition'
					element={<Transition />}
				/>

				<Route
					path='/lanthanide'
					element={<Lanthanide />}
				/>
				<Route
					path='/actinide'
					element={<Actinide />}
				/>
				<Route
					path='/alkaline'
					element={<Alkaline />}
				/>
				<Route
					path='/alkali'
					element={<Alkali />}
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
